#!/usr/bin/env python3
"""
Generate a professional HBR-style PDF from ai-agents-article-revised.md.
Outputs to outputs/ai-agents-article.pdf.
"""

import re
import os
from reportlab.lib.pagesizes import LETTER
from reportlab.lib import colors
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT, TA_CENTER, TA_JUSTIFY, TA_RIGHT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, HRFlowable, PageBreak,
    Table, TableStyle, KeepTogether
)
from reportlab.platypus.frames import Frame
from reportlab.platypus.doctemplate import PageTemplate, BaseDocTemplate
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor

# ── Brand colors ────────────────────────────────────────────────────────────
HBR_RED        = HexColor("#cc0000")
HBR_DARK       = HexColor("#1a1a1a")
HBR_GRAY       = HexColor("#555555")
HBR_LIGHT_GRAY = HexColor("#999999")
HBR_RULE       = HexColor("#cccccc")
HBR_PULL_BG    = HexColor("#f5f5f5")

# ── Page geometry ────────────────────────────────────────────────────────────
PAGE_W, PAGE_H = LETTER          # 8.5 × 11 in
MARGIN_L = 1.1 * inch
MARGIN_R = 1.1 * inch
MARGIN_T = 0.9 * inch
MARGIN_B = 0.9 * inch
CONTENT_W = PAGE_W - MARGIN_L - MARGIN_R

# ── Article metadata ─────────────────────────────────────────────────────────
TITLE    = "The Precision Advantage"
SUBTITLE = "Why Enterprise AI Agent Programs Succeed or Fail on Scope, Not Scale"
AUTHOR   = "James Gray"
DATE     = "March 2026"
COPYRIGHT_LINE = "© 2026 James Gray / JamesGray.AI. All rights reserved."

# ── Styles ───────────────────────────────────────────────────────────────────
def build_styles():
    base = getSampleStyleSheet()

    def S(name, parent_name="Normal", **kw):
        parent = base[parent_name] if parent_name in base else base["Normal"]
        s = ParagraphStyle(name=name, parent=parent, **kw)
        return s

    styles = {}

    # Cover — HBR masthead
    styles["masthead"] = S(
        "masthead",
        fontName="Helvetica-Bold",
        fontSize=9,
        textColor=HBR_RED,
        alignment=TA_CENTER,
        spaceAfter=4,
        letterSpacing=3,
    )

    # Cover — publication line under masthead
    styles["pub_line"] = S(
        "pub_line",
        fontName="Helvetica",
        fontSize=8,
        textColor=HBR_LIGHT_GRAY,
        alignment=TA_CENTER,
        spaceAfter=0,
    )

    # Cover — big article title
    styles["cover_title"] = S(
        "cover_title",
        fontName="Helvetica-Bold",
        fontSize=30,
        leading=36,
        textColor=HBR_DARK,
        alignment=TA_LEFT,
        spaceBefore=0,
        spaceAfter=10,
    )

    # Cover — subtitle
    styles["cover_subtitle"] = S(
        "cover_subtitle",
        fontName="Helvetica",
        fontSize=16,
        leading=22,
        textColor=HBR_GRAY,
        alignment=TA_LEFT,
        spaceBefore=0,
        spaceAfter=24,
    )

    # Cover — author / date meta
    styles["cover_meta"] = S(
        "cover_meta",
        fontName="Helvetica-Bold",
        fontSize=10,
        textColor=HBR_DARK,
        alignment=TA_LEFT,
        spaceAfter=4,
    )

    styles["cover_meta_light"] = S(
        "cover_meta_light",
        fontName="Helvetica",
        fontSize=10,
        textColor=HBR_GRAY,
        alignment=TA_LEFT,
        spaceAfter=0,
    )

    # Abstract box label
    styles["abstract_label"] = S(
        "abstract_label",
        fontName="Helvetica-Bold",
        fontSize=7.5,
        textColor=HBR_RED,
        alignment=TA_LEFT,
        spaceAfter=4,
        letterSpacing=1.5,
    )

    # Abstract text
    styles["abstract"] = S(
        "abstract",
        fontName="Helvetica-Oblique",
        fontSize=10,
        leading=15,
        textColor=HBR_DARK,
        alignment=TA_JUSTIFY,
        spaceAfter=0,
    )

    # Body text
    styles["body"] = S(
        "body",
        fontName="Helvetica",
        fontSize=10.5,
        leading=16,
        textColor=HBR_DARK,
        alignment=TA_JUSTIFY,
        spaceBefore=0,
        spaceAfter=10,
        firstLineIndent=0,
    )

    # First paragraph (no indent, slightly larger)
    styles["body_first"] = S(
        "body_first",
        fontName="Helvetica",
        fontSize=10.5,
        leading=16,
        textColor=HBR_DARK,
        alignment=TA_JUSTIFY,
        spaceBefore=6,
        spaceAfter=10,
    )

    # H2 section heading
    styles["h2"] = S(
        "h2",
        fontName="Helvetica-Bold",
        fontSize=13,
        leading=17,
        textColor=HBR_DARK,
        spaceBefore=22,
        spaceAfter=6,
    )

    # H3 sub-heading (bold lead-in within body, rendered inline)
    styles["h3"] = S(
        "h3",
        fontName="Helvetica-Bold",
        fontSize=11,
        leading=16,
        textColor=HBR_DARK,
        spaceBefore=14,
        spaceAfter=4,
    )

    # Pull quote
    styles["pull_quote"] = S(
        "pull_quote",
        fontName="Helvetica-BoldOblique",
        fontSize=13,
        leading=19,
        textColor=HBR_DARK,
        alignment=TA_LEFT,
        spaceBefore=0,
        spaceAfter=0,
        leftIndent=12,
    )

    # Attribution below pull quote
    styles["pull_attr"] = S(
        "pull_attr",
        fontName="Helvetica",
        fontSize=8.5,
        textColor=HBR_LIGHT_GRAY,
        alignment=TA_LEFT,
        spaceBefore=4,
        spaceAfter=0,
        leftIndent=12,
    )

    # Footer / page number
    styles["footer"] = S(
        "footer",
        fontName="Helvetica",
        fontSize=8,
        textColor=HBR_LIGHT_GRAY,
        alignment=TA_CENTER,
    )

    # Author bio
    styles["bio"] = S(
        "bio",
        fontName="Helvetica",
        fontSize=9.5,
        leading=14,
        textColor=HBR_GRAY,
        alignment=TA_JUSTIFY,
        spaceAfter=0,
    )

    # Copyright line
    styles["copyright"] = S(
        "copyright",
        fontName="Helvetica",
        fontSize=8,
        textColor=HBR_LIGHT_GRAY,
        alignment=TA_LEFT,
    )

    return styles


# ── Canvas callbacks (header/footer on each page) ────────────────────────────
class HBRCanvas:
    """Mixin applied via onFirstPage / onLaterPages."""

    def __init__(self, doc_title, doc_author):
        self.doc_title  = doc_title
        self.doc_author = doc_author

    def draw_first_page(self, canvas_obj, doc):
        """Cover page — no running header, just a thin top rule."""
        self._draw_top_rule(canvas_obj)
        self._draw_footer(canvas_obj, doc, show_page_num=False)

    def draw_later_pages(self, canvas_obj, doc):
        self._draw_top_rule(canvas_obj)
        self._draw_running_header(canvas_obj, doc)
        self._draw_footer(canvas_obj, doc, show_page_num=True)

    def _draw_top_rule(self, c):
        c.saveState()
        c.setStrokeColor(HBR_RED)
        c.setLineWidth(2.5)
        c.line(MARGIN_L, PAGE_H - 0.45 * inch,
               PAGE_W - MARGIN_R, PAGE_H - 0.45 * inch)
        c.restoreState()

    def _draw_running_header(self, c, doc):
        c.saveState()
        c.setFont("Helvetica-Bold", 7)
        c.setFillColor(HBR_RED)
        c.drawString(MARGIN_L, PAGE_H - 0.62 * inch, "HARVARD BUSINESS REVIEW")
        c.setFont("Helvetica", 7)
        c.setFillColor(HBR_LIGHT_GRAY)
        c.drawRightString(PAGE_W - MARGIN_R, PAGE_H - 0.62 * inch,
                          self.doc_title.upper())
        c.restoreState()

    def _draw_footer(self, c, doc, show_page_num):
        c.saveState()
        c.setStrokeColor(HBR_RULE)
        c.setLineWidth(0.5)
        c.line(MARGIN_L, MARGIN_B - 0.05 * inch,
               PAGE_W - MARGIN_R, MARGIN_B - 0.05 * inch)

        c.setFont("Helvetica", 7.5)
        c.setFillColor(HBR_LIGHT_GRAY)

        # Copyright on left
        c.drawString(MARGIN_L, MARGIN_B - 0.28 * inch, COPYRIGHT_LINE)

        # Page number on right
        if show_page_num:
            c.drawRightString(PAGE_W - MARGIN_R, MARGIN_B - 0.28 * inch,
                              str(doc.page))
        c.restoreState()


# ── Pull-quote helper ─────────────────────────────────────────────────────────
def pull_quote_block(quote_text, attribution, styles):
    """Returns a list of flowables forming a shaded pull-quote block."""
    inner = [
        Spacer(1, 8),
        Paragraph(f"\u201c{quote_text}\u201d", styles["pull_quote"]),
    ]
    if attribution:
        inner.append(Paragraph(f"\u2014 {attribution}", styles["pull_attr"]))
    inner.append(Spacer(1, 8))

    tbl = Table([[inner]], colWidths=[CONTENT_W])
    tbl.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), HBR_PULL_BG),
        ("LEFTPADDING",  (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
        ("TOPPADDING",   (0, 0), (-1, -1), 2),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 2),
        ("BOX",  (0, 0), (-1, -1), 1.5, HBR_RED),
        ("LEFTPADDING",  (0, 0), (0, -1), 0),
    ]))
    return [tbl, Spacer(1, 12)]


# ── Abstract box ─────────────────────────────────────────────────────────────
def abstract_block(text, styles):
    inner = [
        Paragraph("EXECUTIVE SUMMARY", styles["abstract_label"]),
        Paragraph(text, styles["abstract"]),
        Spacer(1, 4),
    ]
    tbl = Table([[inner]], colWidths=[CONTENT_W])
    tbl.setStyle(TableStyle([
        ("BACKGROUND",   (0, 0), (-1, -1), HBR_PULL_BG),
        ("LEFTPADDING",  (0, 0), (-1, -1), 14),
        ("RIGHTPADDING", (0, 0), (-1, -1), 14),
        ("TOPPADDING",   (0, 0), (-1, -1), 10),
        ("BOTTOMPADDING",(0, 0), (-1, -1), 10),
        ("BOX", (0, 0), (-1, -1), 1.5, HBR_RED),
    ]))
    return [tbl, Spacer(1, 18)]


# ── Cover page flowables ──────────────────────────────────────────────────────
def build_cover(styles):
    story = []

    # Red masthead bar sits via canvas; add vertical space for it
    story.append(Spacer(1, 0.35 * inch))

    # HBR label
    story.append(Paragraph("HARVARD BUSINESS REVIEW", styles["masthead"]))
    story.append(HRFlowable(width=CONTENT_W, thickness=0.5,
                             color=HBR_RULE, spaceAfter=4))
    story.append(Paragraph("hbr.org", styles["pub_line"]))
    story.append(Spacer(1, 0.45 * inch))

    # Big red rule
    story.append(HRFlowable(width=CONTENT_W, thickness=3, color=HBR_RED,
                             spaceAfter=18))

    # Title
    story.append(Paragraph(TITLE, styles["cover_title"]))
    story.append(Paragraph(SUBTITLE, styles["cover_subtitle"]))

    # Thin rule
    story.append(HRFlowable(width=CONTENT_W, thickness=0.75, color=HBR_RULE,
                             spaceAfter=14))

    # Author / date
    story.append(Paragraph(AUTHOR, styles["cover_meta"]))
    story.append(Paragraph(DATE, styles["cover_meta_light"]))
    story.append(Spacer(1, 0.35 * inch))

    # Abstract / executive summary
    abstract_text = (
        "The enterprises generating the strongest returns from AI agents share a "
        "counterintuitive trait: relentless restraint. Drawing on independently "
        "verified deployments at Morgan Stanley, Goldman Sachs, NVIDIA, Klarna, "
        "McKinsey, and Reddit, this article identifies three structural failure "
        "patterns, three enabling conditions for durable success, and the "
        "organizational capabilities that separate first-generation task automation "
        "from second-generation workflow orchestration."
    )
    story.extend(abstract_block(abstract_text, styles))

    story.append(PageBreak())
    return story


# ── Body parser ───────────────────────────────────────────────────────────────
def md_to_rich(text):
    """Very light Markdown → ReportLab XML conversion (bold/italic only)."""
    # Bold-italic
    text = re.sub(r'\*\*\*(.*?)\*\*\*', r'<b><i>\1</i></b>', text)
    # Bold
    text = re.sub(r'\*\*(.*?)\*\*', r'<b>\1</b>', text)
    # Italic
    text = re.sub(r'\*(.*?)\*', r'<i>\1</i>', text)
    # Escape bare ampersands that aren't already entities
    text = re.sub(r'&(?!(?:amp|lt|gt|quot|apos|#\d+|#x[\da-fA-F]+);)', '&amp;', text)
    return text


def build_body(md_text, styles):
    """Parse markdown and return a list of ReportLab flowables."""
    story = []
    lines = md_text.split("\n")

    # Pull quotes to inject at sensible points (hand-selected from article)
    pull_quotes = [
        {
            "after_heading": "The Knowledge Work Multiplier",
            "text": "AI agents are extraordinarily powerful within precisely "
                    "defined boundaries, and extraordinarily fragile outside them.",
            "attr": "",
        },
        {
            "after_heading": "The Customer Service Reality Check",
            "text": "The line between AI-appropriate and human-necessary requires "
                    "more precision than most organizations initially assume.",
            "attr": "",
        },
    ]
    injected = set()

    first_para = True
    i = 0
    while i < len(lines):
        line = lines[i].rstrip()

        # Skip horizontal rules and the word-count line
        if re.match(r'^---+$', line) or line.startswith("**Word count"):
            i += 1
            continue

        # H2
        if line.startswith("## "):
            heading_text = line[3:].strip()
            story.append(KeepTogether([
                HRFlowable(width=CONTENT_W, thickness=0.5,
                           color=HBR_RULE, spaceBefore=10, spaceAfter=0),
                Paragraph(md_to_rich(heading_text), styles["h2"]),
            ]))
            # Inject pull quote if one is keyed to this heading
            for pq in pull_quotes:
                if pq["after_heading"] == heading_text and heading_text not in injected:
                    story.extend(pull_quote_block(pq["text"], pq["attr"], styles))
                    injected.add(heading_text)
            i += 1
            continue

        # H3 (bold lead-in like "**Condition 1: ...**" on its own line)
        if line.startswith("### "):
            story.append(Paragraph(md_to_rich(line[4:].strip()), styles["h3"]))
            i += 1
            continue

        # Bold-only lines that act as H3 (e.g. "**The Knowledge Work Multiplier**")
        if re.match(r'^\*\*[^*].+\*\*$', line) and not line.startswith("**By"):
            story.append(Paragraph(md_to_rich(line), styles["h3"]))
            i += 1
            continue

        # Skip "**By James Gray**"
        if line.startswith("**By "):
            i += 1
            continue

        # Italic paragraph (lede / author note)
        if line.startswith("*") and line.endswith("*") and not line.startswith("**"):
            inner = line[1:-1]
            story.append(Paragraph(
                f"<i>{md_to_rich(inner)}</i>",
                styles["body"],
            ))
            i += 1
            continue

        # Normal paragraph (non-empty)
        if line.strip():
            style = styles["body_first"] if first_para else styles["body"]
            story.append(Paragraph(md_to_rich(line.strip()), style))
            first_para = False

        i += 1

    return story


# ── End matter ────────────────────────────────────────────────────────────────
def build_end_matter(styles):
    story = []
    story.append(Spacer(1, 18))
    story.append(HRFlowable(width=CONTENT_W, thickness=1.5,
                             color=HBR_RED, spaceAfter=10))

    bio_text = (
        "<b>About the Author</b>  |  James Gray advises Fortune 500 companies on "
        "AI strategy and data infrastructure. He writes about practical AI "
        "implementation for business leaders at JamesGray.AI."
    )
    story.append(Paragraph(bio_text, styles["bio"]))
    story.append(Spacer(1, 14))
    story.append(HRFlowable(width=CONTENT_W, thickness=0.5,
                             color=HBR_RULE, spaceAfter=8))
    story.append(Paragraph(COPYRIGHT_LINE, styles["copyright"]))
    return story


# ── Main ──────────────────────────────────────────────────────────────────────
def generate_pdf(src_md, out_pdf):
    styles = build_styles()

    cb = HBRCanvas(TITLE, AUTHOR)

    doc = SimpleDocTemplate(
        out_pdf,
        pagesize=LETTER,
        leftMargin=MARGIN_L,
        rightMargin=MARGIN_R,
        topMargin=MARGIN_T + 0.3 * inch,   # extra for running header
        bottomMargin=MARGIN_B + 0.2 * inch, # extra for footer
        title=f"{TITLE}: {SUBTITLE}",
        author=AUTHOR,
        subject="AI Strategy / Enterprise Technology",
        creator="JamesGray.AI",
        producer="ReportLab",
    )

    story = []
    story.extend(build_cover(styles))

    with open(src_md, "r", encoding="utf-8") as fh:
        md_text = fh.read()

    # Strip the H1 (rendered on cover) and the author line
    md_text = re.sub(r'^# .+\n', '', md_text, count=1)

    story.extend(build_body(md_text, styles))
    story.extend(build_end_matter(styles))

    doc.build(
        story,
        onFirstPage=cb.draw_first_page,
        onLaterPages=cb.draw_later_pages,
    )
    print(f"PDF written to: {out_pdf}")


if __name__ == "__main__":
    base = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    src  = os.path.join(base, "outputs", "ai-agents-article-revised.md")
    out  = os.path.join(base, "outputs", "ai-agents-article.pdf")
    generate_pdf(src, out)
