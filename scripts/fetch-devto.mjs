import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const username = process.env.DEVTO_USERNAME || 'nikhilrajnair';
const outputPath = resolve(process.cwd(), 'public/data/devto-articles.json');
const endpoint = `https://dev.to/api/articles?username=${encodeURIComponent(username)}&per_page=6`;

async function fetchArticles() {
  const response = await fetch(endpoint, {
    headers: {
      'User-Agent': 'portfolio-build-script'
    }
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch dev.to articles: ${response.status}`);
  }

  const articles = await response.json();

  return articles.map((article) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    publishedAt: article.published_at,
    coverImage: article.cover_image,
    tags: article.tag_list || []
  }));
}

async function main() {
  try {
    const normalized = await fetchArticles();
    await mkdir(resolve(process.cwd(), 'public/data'), { recursive: true });
    await writeFile(outputPath, `${JSON.stringify(normalized, null, 2)}\n`, 'utf8');
    console.log(`Fetched ${normalized.length} dev.to article(s) for ${username}`);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.warn(`Using existing article cache. Reason: ${message}`);
  }
}

main();
