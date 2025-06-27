# 📝 My Blog Portfolio

A minimal, SEO-friendly developer blog built with **Next.js 13**, **Markdown**, and **TailwindCSS**. This project is designed to be lightweight, fast, and easy to maintain. Write posts in Markdown, generate static pages at build time, and deploy with ease.

---

## ✨ Features

- ⚡️ Built with **Next.js 13** and the App Router
- 🧾 Write blog posts in plain **Markdown**
- 🧠 Automatic parsing of metadata via `gray-matter`
- 💡 Markdown rendered using `remark` and `remark-html`
- 💅 **TailwindCSS** for a minimal and responsive UI
- 🌐 **SEO metadata** with `next/head`
- 📰 Automatically generated **RSS feed**
- 🚀 Ready for deployment (Vercel, Netlify, etc.)

---

## 📁 Folder Structure

```
my-blog-portfolio/
├── app/                  # App Router pages
│   ├── layout.tsx        # Layout with metadata and layout
│   ├── page.tsx          # Blog index page
│   └── posts/[id]/       # Dynamic routes for blog posts
├── components/           # Header and Footer
├── lib/                  # Markdown parsing logic
├── posts/                # Markdown blog content
├── public/               # Static assets (favicon, rss.xml)
├── styles/               # TailwindCSS global styles
├── rss.ts                # RSS feed generator
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/my-blog-portfolio.git
cd my-blog-portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

> This will also generate the RSS feed at `/public/rss.xml`.

---

## ✍️ Writing Blog Posts

Create new Markdown files inside the `posts/` directory:

```markdown
---
title: "My First Blog Post"
date: "2025-06-27"
---

This is my first blog post written in **Markdown**.
```

---

## 📦 Deploying

### Deploy to Vercel

```bash
npx vercel
```

Or connect your GitHub repository to [Vercel](https://vercel.com/) for automatic deployments.

---

## 📚 Tech Stack

- [Next.js 13](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [gray-matter](https://www.npmjs.com/package/gray-matter)
- [remark](https://www.npmjs.com/package/remark)
- [remark-html](https://www.npmjs.com/package/remark-html)

---

## 📃 License

MIT License. Feel free to use and modify this project.

---

## 🙋‍♂️ Author

Made with ❤️ by [Tridip](https://github.com/trdp2019)
