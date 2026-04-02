/**
 * Converts mkdocs.yml nav structure to Starlight sidebar config.
 * Usage: node scripts/convert-nav.mjs > sidebar-output.mjs
 */

import { readFileSync } from 'fs';
import { parse } from 'yaml';

// We'll parse the YAML manually since the nav structure is complex
// For now, just extract and convert
const raw = readFileSync('mkdocs.yml', 'utf-8');

// Parse just the nav section using a simple YAML parser approach
// Since we don't have the yaml package, we'll install it or use a regex approach
// Let's just output the conversion directly

const config = parse(raw);
const nav = config.nav;

function mdPathToSlug(mdPath) {
  // Convert "business-first-ai-framework/index.md" -> "/business-first-ai-framework/"
  // Convert "about.md" -> "/about/"
  if (!mdPath) return '/';
  let slug = mdPath
    .replace(/\.md$/, '')
    .replace(/\/index$/, '')
    .replace(/\/README$/, '');
  if (slug === 'index' || slug === '') return '/';
  return `/${slug}/`;
}

function convertNavItem(item) {
  if (typeof item === 'string') {
    // Just a path, no label — use the path as link
    return { link: mdPathToSlug(item) };
  }

  if (typeof item === 'object') {
    const entries = Object.entries(item);
    if (entries.length !== 1) return null;

    const [label, value] = entries[0];

    if (typeof value === 'string') {
      // Simple link: "About: about.md"
      return { label, link: mdPathToSlug(value) };
    }

    if (Array.isArray(value)) {
      // Group with children
      const items = value.map(convertNavItem).filter(Boolean);
      return { label, items };
    }
  }
  return null;
}

const sidebar = nav.map(convertNavItem).filter(Boolean);

// Output as JavaScript
console.log('// Auto-generated from mkdocs.yml nav — paste into astro.config.mjs sidebar');
console.log('export const sidebar = ' + JSON.stringify(sidebar, null, 2) + ';');
