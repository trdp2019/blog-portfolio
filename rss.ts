import fs from 'fs'
import { getSortedPostsData } from './lib/posts'

export async function generateRssFeed() {
  const posts = getSortedPostsData()

  const rssItemsXml = posts
    .map(post => `
      <item>
        <title>${post.title}</title>
        <link>https://yourdomain.com/posts/${post.id}</link>
        <pubDate>${new Date(post.date).toUTCString()}</pubDate>
        <description>${post.title}</description>
      </item>`)
    .join('')

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
      <title>My Blog Portfolio</title>
      <link>https://yourdomain.com</link>
      <description>Developer blog built with Next.js and Markdown</description>
      ${rssItemsXml}
    </channel>
  </rss>`

  fs.writeFileSync('./public/rss.xml', rssXml)
}
