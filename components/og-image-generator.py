"""Generate OG image for Verbio Labs (1200x630).

Style: minimal Apple-like, white bg, Instrument Serif italic for English,
Pretendard for Korean. Brand mark in upper area, large title, subtitle,
small accent below.
"""
from PIL import Image, ImageDraw, ImageFont
from pathlib import Path

W, H = 1200, 630
BG = (251, 251, 253)        # --apple-bg
INK = (29, 29, 31)            # --apple-black
INK_SOFT = (66, 66, 69)       # --apple-gray-text
INK_LIGHT = (110, 110, 115)   # --apple-gray-text-light
LINE = (210, 210, 215)        # --apple-gray-line

OUT_DIR = Path("/sessions/zen-gifted-ramanujan/mnt/outputs")
FONT_DIR = Path("/tmp")

# Fonts
F_TITLE_PATH    = FONT_DIR / "instrument-italic.ttf"
F_LABEL_PATH    = FONT_DIR / "instrument-regular.ttf"
F_KR_PATH       = FONT_DIR / "pretendard-medium.otf"
F_KR_REG_PATH   = FONT_DIR / "pretendard-regular.otf"

font_title    = ImageFont.truetype(str(F_TITLE_PATH), 168)         # Verbio Labs (italic serif)
font_brand_lg = ImageFont.truetype(str(F_LABEL_PATH), 22)          # top: VERBIO LABS small caps style
font_kr       = ImageFont.truetype(str(F_KR_PATH), 38)             # AI 언어·교육 랩
font_meta     = ImageFont.truetype(str(F_KR_REG_PATH), 18)         # bottom meta line

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# === Subtle frame inset ===
INSET = 24
draw.rectangle([INSET, INSET, W - INSET, H - INSET], outline=LINE, width=1)

# === Top label "VERBIO LABS" (small, letterspaced) ===
top_label = "VERBIO LABS"
spaced = "  ".join(list(top_label))  # extra letterspacing via spaces
tw = draw.textlength(spaced, font=font_brand_lg)
top_y = 70
draw.text(((W - tw) / 2, top_y), spaced, font=font_brand_lg, fill=INK_LIGHT)

# === Brand mark: downward chevron + dot ===
# centered, between top label and main title
mark_y = top_y + 60
mark_cx = W / 2
mark_w = 26
draw.line(
    [(mark_cx - mark_w, mark_y),
     (mark_cx, mark_y + mark_w * 1.4),
     (mark_cx + mark_w, mark_y)],
    fill=INK, width=4, joint="curve"
)
# tail dot
dot_r = 4
draw.ellipse(
    [mark_cx - dot_r, mark_y + mark_w * 1.4 - dot_r,
     mark_cx + dot_r, mark_y + mark_w * 1.4 + dot_r],
    fill=INK
)

# === Main title: Verbio Labs (large italic serif) ===
title = "Verbio Labs"
# measure
bbox = draw.textbbox((0, 0), title, font=font_title)
title_w = bbox[2] - bbox[0]
title_h = bbox[3] - bbox[1]
title_x = (W - title_w) / 2 - bbox[0]
title_y = 240
draw.text((title_x, title_y), title, font=font_title, fill=INK)

# === Decorative thin line ===
sub_y = title_y + title_h + 60
line_w = 60
draw.line(
    [((W - line_w) / 2, sub_y), ((W + line_w) / 2, sub_y)],
    fill=LINE, width=1
)

# === Korean subtitle ===
kr_text = "AI 언어·교육 랩"
kr_bbox = draw.textbbox((0, 0), kr_text, font=font_kr)
kr_w = kr_bbox[2] - kr_bbox[0]
kr_y = sub_y + 28
draw.text(((W - kr_w) / 2 - kr_bbox[0], kr_y), kr_text, font=font_kr, fill=INK_SOFT)

# === Bottom meta ===
meta = "verbiolabs.com  ·  Built in Busan, Korea"
m_bbox = draw.textbbox((0, 0), meta, font=font_meta)
m_w = m_bbox[2] - m_bbox[0]
draw.text(((W - m_w) / 2 - m_bbox[0], H - 70), meta, font=font_meta, fill=INK_LIGHT)

# === Save ===
out = OUT_DIR / "og-image.png"
img.save(out, "PNG", optimize=True)
print(f"Saved: {out}")
print(f"Size: {out.stat().st_size:,} bytes")
print(f"Dimensions: {W}x{H}")
