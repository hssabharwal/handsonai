/**
 * Migration script: converts MkDocs Material syntax to Astro/Starlight syntax.
 *
 * Transforms:
 * - Admonitions (!!! / ???) → Starlight ::: directives / <details>
 * - Content tabs (=== "Tab") → <Tabs><TabItem> (file becomes .mdx)
 * - Icon references (:material-*, :fontawesome-*, :octicons-*) → emoji/text
 * - Button classes ({ .md-button }) → <a> or <LinkCard>
 * - Attribute lists ({ .class }) → inline HTML
 * - Image paths (relative) → absolute /assets/... paths
 * - Snippets (--8<--) → flagged for manual fix
 *
 * Usage: node scripts/migrate-content.mjs [--dry-run]
 */

import { readFileSync, writeFileSync, readdirSync, renameSync, statSync } from 'fs';
import { join, relative } from 'path';

const CONTENT_DIR = 'src/content/docs';
const DRY_RUN = process.argv.includes('--dry-run');

// Icon mapping: MkDocs icon → replacement text
const ICON_MAP = {
  // Arrows
  ':octicons-arrow-right-24:': '→',
  ':octicons-arrow-right-16:': '→',
  ':material-arrow-right:': '→',
  ':material-arrow-right-bold:': '→',
  ':material-arrow-left:': '←',
  // Common
  ':material-download:': '↓',
  ':material-check:': '✓',
  ':material-close:': '✗',
  ':material-plus:': '+',
  ':material-minus:': '−',
  ':material-information:': 'ℹ',
  ':material-alert:': '⚠',
  ':material-star:': '★',
  // Tech/concept icons → emoji or text
  ':material-brain:': '🧠',
  ':material-robot:': '🤖',
  ':material-lightbulb:': '💡',
  ':material-lightbulb-on:': '💡',
  ':material-lightbulb-on-outline:': '💡',
  ':material-rocket-launch:': '🚀',
  ':material-code-tags:': '💻',
  ':material-cog:': '⚙',
  ':material-puzzle:': '🧩',
  ':material-puzzle-outline:': '🧩',
  ':material-chat-question:': '❓',
  ':material-file-document:': '📄',
  ':material-file-document-outline:': '📄',
  ':material-clipboard-text:': '📋',
  ':material-clipboard-text-outline:': '📋',
  ':material-school:': '🎓',
  ':material-play-circle:': '▶',
  ':material-play-circle-outline:': '▶',
  ':material-recycle:': '♻',
  ':material-link:': '🔗',
  ':material-book-open-variant:': '📖',
  ':material-book-open-page-variant:': '📖',
  ':material-chart-bar:': '📊',
  ':material-target:': '🎯',
  ':material-wrench:': '🔧',
  ':material-tools:': '🛠',
  ':material-eye:': '👁',
  ':material-hammer:': '🔨',
  ':material-test-tube:': '🧪',
  ':material-flask:': '🧪',
  ':material-run:': '🏃',
  ':material-trending-up:': '📈',
  ':material-shield:': '🛡',
  ':material-lock:': '🔒',
  ':material-earth:': '🌍',
  ':material-globe:': '🌐',
  ':material-account:': '👤',
  ':material-account-group:': '👥',
  ':material-comment:': '💬',
  ':material-email:': '✉',
  ':material-calendar:': '📅',
  ':material-clock:': '🕐',
  ':material-folder:': '📁',
  ':material-database:': '🗄',
  ':material-cloud:': '☁',
  ':material-refresh:': '🔄',
  ':material-sync:': '🔄',
  ':material-search:': '🔍',
  ':material-filter:': '🔍',
  ':material-magnify:': '🔍',
  ':material-api:': '🔌',
  ':material-console:': '💻',
  ':material-terminal:': '💻',
  ':material-github:': 'GitHub',
  ':material-google:': 'Google',
  ':material-microsoft:': 'Microsoft',
  ':material-rss:': '📡',
  ':material-web:': '🌐',
  ':material-flash:': '⚡',
  ':material-flash-outline:': '⚡',
  ':material-new-box:': '🆕',
  // FontAwesome
  ':fontawesome-brands-linkedin:': 'LinkedIn',
  ':fontawesome-brands-github:': 'GitHub',
  ':fontawesome-brands-discord:': 'Discord',
  ':fontawesome-brands-slack:': 'Slack',
  ':fontawesome-brands-youtube:': 'YouTube',
  ':fontawesome-brands-twitter:': 'Twitter',
  ':fontawesome-brands-python:': 'Python',
  ':fontawesome-solid-newspaper:': '📰',
  ':fontawesome-solid-globe:': '🌐',
  ':fontawesome-solid-graduation-cap:': '🎓',
  ':fontawesome-solid-book:': '📖',
  ':fontawesome-solid-rocket:': '🚀',
  ':fontawesome-solid-gear:': '⚙',
  ':fontawesome-solid-download:': '↓',
  // Simple icons
  ':simple-openai:': 'OpenAI',
  ':simple-anthropic:': 'Anthropic',
  ':simple-google:': 'Google',
  ':simple-microsoft:': 'Microsoft',
  ':simple-github:': 'GitHub',
  ':simple-claude:': 'Claude',
};

// Admonition type mapping
const ADMONITION_MAP = {
  'tip': 'tip', 'hint': 'tip', 'important': 'tip',
  'success': 'tip', 'check': 'tip', 'done': 'tip',
  'example': 'tip',
  'agents': 'tip', 'skills': 'tip',
  'note': 'note', 'seealso': 'note',
  'info': 'note', 'todo': 'note',
  'abstract': 'note', 'summary': 'note', 'tldr': 'note',
  'quote': 'note', 'cite': 'note',
  'usage': 'note', 'workflow': 'note',
  'warning': 'caution', 'attention': 'caution',
  'question': 'caution', 'help': 'caution', 'faq': 'caution',
  'danger': 'danger', 'error': 'danger',
  'failure': 'danger', 'fail': 'danger', 'missing': 'danger',
  'bug': 'danger',
  'caution': 'caution',
};

let stats = {
  admonitions: 0,
  collapsible: 0,
  tabs: 0,
  icons: 0,
  buttons: 0,
  attributes: 0,
  imagePaths: 0,
  snippets: 0,
  renamedToMdx: 0,
  filesProcessed: 0,
};

function findMdFiles(dir) {
  let results = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue;
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findMdFiles(fullPath));
    } else if (entry.isFile() && (entry.name.endsWith('.md') || entry.name.endsWith('.mdx'))) {
      results.push(fullPath);
    }
  }
  return results;
}

function convertAdmonitions(content) {
  // Convert !!! type "title" and !!! type blocks
  // and ??? type "title" (collapsible) blocks
  let result = '';
  const lines = content.split('\n');
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Match admonition: !!! type "title" or !!! type
    const admMatch = line.match(/^(!!!)\s+(\w+)\s*(?:"([^"]*)")?\s*$/);
    // Match collapsible: ??? type "title" or ???+ type "title"
    const collMatch = line.match(/^(\?\?\?\+?)\s+(\w+)\s*(?:"([^"]*)")?\s*$/);

    const match = admMatch || collMatch;
    const isCollapsible = !!collMatch;

    if (match) {
      const rawType = match[2].toLowerCase();
      const title = match[3] || '';
      const starlightType = ADMONITION_MAP[rawType] || 'note';

      // Collect indented body lines
      let body = [];
      i++;
      while (i < lines.length) {
        if (lines[i].match(/^    ./) || lines[i].trim() === '') {
          body.push(lines[i].replace(/^    /, ''));
          i++;
        } else {
          break;
        }
      }

      // Trim trailing empty lines from body
      while (body.length > 0 && body[body.length - 1].trim() === '') {
        body.pop();
      }

      const bodyText = body.join('\n');

      if (isCollapsible) {
        stats.collapsible++;
        const summary = title || starlightType.charAt(0).toUpperCase() + starlightType.slice(1);
        result += `<details>\n<summary>${summary}</summary>\n\n${bodyText}\n\n</details>\n`;
      } else {
        stats.admonitions++;
        if (title) {
          result += `:::${starlightType}[${title}]\n${bodyText}\n:::\n`;
        } else {
          result += `:::${starlightType}\n${bodyText}\n:::\n`;
        }
      }
      continue;
    }

    result += line + '\n';
    i++;
  }

  // Remove trailing extra newline
  if (result.endsWith('\n\n')) {
    result = result.slice(0, -1);
  }

  return result;
}

function convertTabs(content) {
  // Convert === "Tab Label" blocks to <Tabs><TabItem> syntax
  const tabPattern = /^===\s+"([^"]+)"\s*$/;
  const lines = content.split('\n');
  let result = [];
  let i = 0;
  let needsTabImport = false;

  while (i < lines.length) {
    const match = lines[i].match(tabPattern);
    if (!match) {
      result.push(lines[i]);
      i++;
      continue;
    }

    // Found start of tab group
    needsTabImport = true;
    stats.tabs++;
    let tabs = [];

    while (i < lines.length) {
      const tabMatch = lines[i].match(tabPattern);
      if (!tabMatch) break;

      const label = tabMatch[1];
      let body = [];
      i++;

      // Collect indented body
      while (i < lines.length) {
        if (lines[i].match(/^    ./) || (lines[i].trim() === '' && i + 1 < lines.length && lines[i + 1].match(/^    ./))) {
          body.push(lines[i].replace(/^    /, ''));
          i++;
        } else if (lines[i].trim() === '' && i + 1 < lines.length && lines[i + 1].match(tabPattern)) {
          i++; // skip blank line between tabs
          break;
        } else {
          break;
        }
      }

      // Trim trailing empty lines
      while (body.length > 0 && body[body.length - 1].trim() === '') {
        body.pop();
      }

      tabs.push({ label, body: body.join('\n') });
    }

    // Output Starlight tabs
    result.push('<Tabs>');
    for (const tab of tabs) {
      result.push(`  <TabItem label="${tab.label}">`);
      result.push(tab.body);
      result.push('  </TabItem>');
    }
    result.push('</Tabs>');
    result.push('');
  }

  return { content: result.join('\n'), needsTabImport };
}

function convertIcons(content) {
  // Replace icon references with mapped values
  // Match :icon-name: with optional { .class } suffix
  let result = content;

  for (const [icon, replacement] of Object.entries(ICON_MAP)) {
    // Escape special regex chars in icon name
    const escaped = icon.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped + '(?:\\{[^}]*\\})?', 'g');
    const before = result;
    result = result.replace(regex, replacement);
    if (result !== before) stats.icons++;
  }

  // Catch any remaining icons we missed — just strip the colons and attribute
  result = result.replace(/:(material|fontawesome|octicons|simple)-[\w-]+:(?:\{[^}]*\})?/g, (match) => {
    stats.icons++;
    return '';
  });

  return result;
}

function convertButtons(content) {
  // Convert [text](url){ .md-button .md-button--primary } → styled link
  // Convert [text](url){ .md-button target="_blank" } → styled link
  let result = content.replace(
    /\[([^\]]+)\]\(([^)]+)\)\{\s*\.md-button[^}]*\}/g,
    (match, text, url) => {
      stats.buttons++;
      return `[${text}](${url})`;
    }
  );
  return result;
}

function convertAttributes(content) {
  // Remove { .class } and { #id } attributes from non-button contexts
  // These are pymdownx attr_list syntax not supported by Starlight
  let result = content.replace(
    /\{\s*\.\w[\w-]*(?:\s+\.\w[\w-]*)*\s*\}/g,
    (match) => {
      // Don't count .md-button (already handled)
      if (!match.includes('md-button')) {
        stats.attributes++;
      }
      return '';
    }
  );
  // Also { #id } and { width="..." }
  result = result.replace(/\{\s*(?:#[\w-]+|width="[^"]*"|height="[^"]*")\s*\}/g, () => {
    stats.attributes++;
    return '';
  });
  return result;
}

function convertImagePaths(content) {
  // Convert relative image/asset paths to absolute
  // assets/images/foo.png → /assets/images/foo.png
  // ../assets/pdfs/bar.pdf → /assets/pdfs/bar.pdf
  // ../../assets/images/foo.png → /assets/images/foo.png
  let result = content.replace(
    /(\!\[[^\]]*\]\()(?:\.\.\/)*(?:assets\/)/g,
    (match, prefix) => {
      stats.imagePaths++;
      return prefix + '/assets/';
    }
  );
  // Also fix href links to assets
  result = result.replace(
    /(\]\()(?:\.\.\/)*(?:assets\/)/g,
    (match, prefix) => {
      stats.imagePaths++;
      return prefix + '/assets/';
    }
  );
  return result;
}

function flagSnippets(content, filePath) {
  if (content.includes('--8<--')) {
    stats.snippets++;
    console.log('  MANUAL: Snippet (--8<--) found in', filePath);
  }
  return content;
}

function processFile(filePath) {
  let content = readFileSync(filePath, 'utf-8');
  const original = content;

  // 1. Convert admonitions
  content = convertAdmonitions(content);

  // 2. Convert tabs
  const tabResult = convertTabs(content);
  content = tabResult.content;
  let needsMdx = tabResult.needsTabImport;

  // 3. Convert icons
  content = convertIcons(content);

  // 4. Convert buttons
  content = convertButtons(content);

  // 5. Convert attributes
  content = convertAttributes(content);

  // 6. Fix image paths
  content = convertImagePaths(content);

  // 7. Flag snippets
  content = flagSnippets(content, filePath);

  // Add component imports if needed
  if (needsMdx) {
    // Add import after frontmatter
    const fmEnd = content.indexOf('---', content.indexOf('---') + 3);
    if (fmEnd !== -1) {
      const before = content.slice(0, fmEnd + 3);
      const after = content.slice(fmEnd + 3);
      let imports = '\nimport { Tabs, TabItem } from \'@astrojs/starlight/components\';\n';
      content = before + imports + after;
    }
  }

  if (content !== original) {
    stats.filesProcessed++;

    if (DRY_RUN) {
      console.log(`  Would modify: ${relative(CONTENT_DIR, filePath)}`);
    } else {
      writeFileSync(filePath, content);

      // Rename to .mdx if it needs component imports
      if (needsMdx && filePath.endsWith('.md')) {
        const newPath = filePath.replace(/\.md$/, '.mdx');
        renameSync(filePath, newPath);
        stats.renamedToMdx++;
        console.log(`  Renamed to .mdx: ${relative(CONTENT_DIR, newPath)}`);
      }
    }
  }
}

// Main
console.log(`Migrating content in ${CONTENT_DIR}...`);
if (DRY_RUN) console.log('(DRY RUN — no files will be modified)');
console.log('');

const files = findMdFiles(CONTENT_DIR);
console.log(`Found ${files.length} markdown files`);
console.log('');

for (const file of files) {
  processFile(file);
}

console.log('');
console.log('=== Migration Summary ===');
console.log(`Files processed:     ${stats.filesProcessed}`);
console.log(`Admonitions:         ${stats.admonitions}`);
console.log(`Collapsible:         ${stats.collapsible}`);
console.log(`Tab groups:          ${stats.tabs}`);
console.log(`Icons replaced:      ${stats.icons}`);
console.log(`Buttons simplified:  ${stats.buttons}`);
console.log(`Attributes removed:  ${stats.attributes}`);
console.log(`Image paths fixed:   ${stats.imagePaths}`);
console.log(`Snippets (manual):   ${stats.snippets}`);
console.log(`Renamed to .mdx:     ${stats.renamedToMdx}`);
