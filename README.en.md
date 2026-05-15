<div align="center">

![Launch Kit](images/social-preview.png)

# Launch Kit

**Stop forgetting these 12 things every time you ship a SaaS.**

The 1 week you lose right before launch — packaged into copy-paste templates.<br>
Korea PIPA + e-commerce law compliant legal templates included.

[🇰🇷 한국어](README.md) · 🇺🇸 English (current)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)
[![Made with Claude Code](https://img.shields.io/badge/Made_with-Claude_Code-D97757?style=flat-square&logo=anthropic&logoColor=white)](https://claude.ai/code)
[![Stars](https://img.shields.io/github/stars/JacobanXXX/launch-kit?style=flat-square&logo=github)](https://github.com/JacobanXXX/launch-kit/stargazers)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-22863a?style=flat-square)](CONTRIBUTING.md)

[**🚀 Quick Start**](#-quick-start) · [**📋 Checklist**](#-12-item-pre-launch-checklist) · [**💎 What's Inside**](#-whats-inside) · [**🤔 FAQ**](#-faq)

</div>

---

## 👥 Built for these vibe coders

<table>
<tr>
<td width="33%" align="center">
  <h3>🛠 Solo indie maker</h3>
  <p>Building sites/SaaS alone with Cursor·Claude Code.<br>Falls into the same 12 traps every launch.</p>
</td>
<td width="33%" align="center">
  <h3>🇰🇷 Korean SaaS founder</h3>
  <p>Lost on writing PIPA·e-commerce law compliant ToS.<br>Lawyer quotes ₩500K+ feel heavy.</p>
</td>
<td width="33%" align="center">
  <h3>⚡ Weekend hacker</h3>
  <p>Friday start → Sunday ship goal.<br>No time to learn UX·SEO·Analytics from scratch.</p>
</td>
</tr>
</table>

---

## 🤔 Why this exists?

> **"30 minutes to build a site with Claude Code.<br>
> 1 week to make it actually launch-ready."**

I went through this 5 times while building verbiolabs.com. Same traps every time:

- Mobile menu disappears → no hamburger
- KakaoTalk link shows just text → no OG image
- Doesn't appear on Google → no sitemap
- No idea who's visiting → no analytics
- Asked a lawyer friend for ToS → ₩500K quote
- ...

Each item: search → fix → 1 day lost. Compiled here.

This repo is for **the next indie maker so they don't lose the same week.**

---

## 📦 What's inside?

| Category | Files | What you get |
|---|---|---|
| 🏛️  **Legal** | `privacy.html.template` `terms.html.template` `refund.html.template` | Korea PIPA + e-commerce law compliant ToS (saves ₩500K lawyer quote) |
| 🔍  **SEO** | `sitemap.xml.template` `robots.txt` `jsonld-organization.json` | Full Google indexing kit |
| 📊  **Analytics** | `clarity.html` | Microsoft Clarity snippet (free, unlimited, heatmaps + session recordings) |
| 🎨  **Components** | `mobile-hamburger.html` `404.html` `app-store-badge.html` `a11y.css` `og-image-generator.py` | Drop-in UI code |
| 🤖  **AI Workflow** | `claude.md` | Universal `claude.md` template (works with Claude Code · Cursor · Aider) |

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/JacobanXXX/launch-kit.git

# 2. Copy what you need into your project
cp -r launch-kit/legal ./your-project/
cp -r launch-kit/components ./your-project/
cp launch-kit/claude.md ./your-project/

# 3. Customize legal templates with your business info
#    See legal/README.md for variable list
```

Or grab just the most-forgotten thing — mobile hamburger menu:

```bash
curl -O https://raw.githubusercontent.com/JacobanXXX/launch-kit/main/components/mobile-hamburger.html
```

---

## 📋 12-Item Pre-Launch Checklist

| # | Item | If you skip... | Code |
|---|------|---------------|------|
| 1 | **Mobile hamburger menu** | Mobile users scroll the entire page | [components/mobile-hamburger.html](components/mobile-hamburger.html) |
| 2 | **Privacy / Terms / Refund** | Required by law for payments in Korea | [legal/](legal/) |
| 3 | **OG image** | Link previews show only text on KakaoTalk/Facebook | [components/og-image-generator.py](components/og-image-generator.py) |
| 4 | **Favicon set** | Browser tab shows globe icon | [components/favicon/](components/favicon/) |
| 5 | **Microsoft Clarity** | No idea where users drop off | [analytics/clarity.html](analytics/clarity.html) |
| 6 | **Google Search Console + sitemap** | Doesn't appear on Google | [seo/google-search-console.md](seo/google-search-console.md) |
| 7 | **JSON-LD structured data** | No logo in search results | [seo/jsonld-organization.json](seo/jsonld-organization.json) |
| 8 | **Brand 404 page** | Vercel/Netlify default error page | [components/404.html](components/404.html) |
| 9 | **`prefers-reduced-motion`** | Motion-sensitive users get dizzy | [components/a11y.css](components/a11y.css) |
| 10 | **App Store + Google Play badge** | Download buttons are just text links | [components/app-store-badge.html](components/app-store-badge.html) |
| 11 | **`canonical` + `robots` meta** | SEO duplicate content penalty | All pages `<head>` |
| 12 | **Good `claude.md`** | "Why did you refactor everything?" moments | [claude.md](claude.md) |

Detailed checklist → [`checklist.md`](checklist.md)

---

## ⚖️ Comparison — Launch Kit vs Manual

| Task | Manual ⏰ | Launch Kit ⚡ |
|------|----------|---------------|
| Mobile hamburger menu | 1-2 days (with debugging) | **5 min** (copy-paste) |
| Legal docs (3) | **₩500K** (lawyer) or 1 week (DIY) | 10 min (variable substitution) |
| Full SEO setup | 1 week (learning + trial-error) | 30 min (templates) |
| OG image | Designer outsource or Figma work | 1 Python script run |
| Analytics + privacy disclosure | Half day | 5 min |
| 404 page design | Usually procrastinated forever | Instant |
| Accessibility basics | Often forgotten | 1 CSS import |

**Total saved**: average **1 week + ₩500,000** 💰

---

## 📈 Star History

[![Star History Chart](https://api.star-history.com/svg?repos=JacobanXXX/launch-kit&type=Date)](https://star-history.com/#JacobanXXX/launch-kit&Date)

⭐ Star this repo to help other indie makers find it.

---

## 🤔 FAQ

<details>
<summary><b>Can I use the legal templates without lawyer review?</b></summary>

⚠️ Templates based on standard Korean SaaS practices.

- **Personal side project** (no payments, no signup) → use as-is
- **Before starting payments/subscriptions/course sales** → 1-time lawyer review recommended (₩100K-300K, much cheaper than ₩500K from-scratch)
- **B2B SaaS / sensitive data handling** → separate review essential

Treat this as a **starting point** for lawyer review, not a replacement.

</details>

<details>
<summary><b>Is Microsoft Clarity really free?</b></summary>

Yes. Unlimited free. No ads. No payment method required.

But:
- Microsoft may use anonymized data for their ad model training (opt-out available)
- For Korean PIPA compliance: **must disclose Microsoft Clarity in your privacy policy** (template already includes this)

</details>

<details>
<summary><b>Can I use this without Claude Code?</b></summary>

Yes. 90% of this kit is plain HTML/CSS/JS/Python — works with any tool.

`claude.md` works as `.cursorrules` for Cursor as-is. Same pattern for Aider, Continue, etc.

</details>

<details>
<summary><b>I'm using Next.js / React. Are HTML templates useful?</b></summary>

Absolutely. Legal pages are static anyway. SEO meta moves to `next/head` or `<head>`. Mobile hamburger component → 5 minutes to convert to React.

Add "Using Next.js App Router" line to `claude.md` and Claude will convert for you.

</details>

<details>
<summary><b>Why so much Korea-specific content?</b></summary>

- Launching SaaS in Korea legally requires e-commerce law + PIPA compliant ToS
- Existing English launch kits cover only GDPR/CCPA, not Korean laws
- Korean vibe coders re-invent this from scratch every time
- → so I bundled it

Global users: just use the English parts.

</details>

---

## 🌟 Made with Launch Kit

Sites built with this kit:

- 🌐 [verbiolabs.com](https://verbiolabs.com) — AI for human language. Solo SaaS based in Busan, Korea.

Add yours! → PR with one line.

---

## 🤝 Contributing

Traps you've encountered before launch — share them!

Detailed guide → [CONTRIBUTING.md](CONTRIBUTING.md)

Quick version:
1. Fork this repo
2. Add your solution to the appropriate folder
3. Update README + checklist
4. Open PR

---

## 📜 License

[MIT](LICENSE) — use freely. Attribution welcome but not required.

---

## ❤️ Made by

[**Jacob (Junyeong An)**](https://verbiolabs.com) — Solo SaaS maker based in Busan, Korea. 5 years running Sikbang English + AI lecturer.

Building:
- 🌐 [verbiolabs.com](https://verbiolabs.com) — AI for human language
- 📱 [TopikIQ](https://topikiq.com) — AI Korean for TOPIK ([App Store](https://apps.apple.com/kr/app/topikiq/id6761719529) · [Google Play](https://play.google.com/store/apps/details?id=com.topikiq.app))
- 🇰🇷 [Sikbang English](https://sikbang.co) — 5-year English education brand (4,600+ subscribers)

Feedback / questions:
- 🧵 Threads (DMs welcome)
- 📧 hello@verbiolabs.com

---

<div align="center">

⭐ **Star this repo if it saved you a week** ⭐

Helps other indie makers find it.

</div>
