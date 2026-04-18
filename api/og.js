// Edge function for dynamic OG tags
// Serves proper HTML for social media crawlers (Facebook, Twitter, etc.)

export const config = {
  runtime: 'edge',
}

const SANITY_PROJECT_ID = 'x5my9k3z'
const SANITY_DATASET = 'production'

async function fetchPost(slug) {
  try {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]{title,excerpt,"imageUrl":featuredImage.asset->url}`
    const res = await fetch(
      `https://${SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/query/${SANITY_DATASET}?query=${encodeURIComponent(query)}`
    )
    const data = await res.json()
    return data.result
  } catch (e) {
    return null
  }
}

const DEFAULT_IMG = 'https://res.cloudinary.com/dmdl9p7do/image/upload/v1744975511/OG_Image_Digilabs_2_jpg_f8y4kc.jpg'
const SITE = 'https://www.digilabkreasi.my.id'

// List of social media crawlers - expanded list
const SOCIAL_CRAWLERS = [
  'facebookexternalhit',
  'facebookcatalog',
  'facebook',
  'Twitterbot',
  'twitterbot',
  'linkedinbot',
  'slackbot',
  'telegrambot',
  'discordbot',
  'whatsapp',
  'applebot',
  'googlebot',
  'bingbot',
  'yandex',
  'duckduckbot',
  'pinterest',
  'tiktok',
]

function isSocialCrawler(userAgent) {
  if (!userAgent) return false
  const ua = userAgent.toLowerCase()
  return SOCIAL_CRAWLERS.some(bot => ua.includes(bot.toLowerCase()))
}

export default async function handler(req) {
  const url = new URL(req.url)
  const slug = url.searchParams.get('slug')
  const userAgent = req.headers.get('user-agent') || ''

  if (!slug) {
    return new Response(null, { status: 302, headers: { Location: '/blog' } })
  }

  const post = await fetchPost(slug)

  // If post not found, redirect to blog page with article not found message
  if (!post) {
    return new Response(null, {
      status: 302,
      headers: { Location: '/blog?error=notfound' }
    })
  }

  const title = post.title
  const desc = post.excerpt || 'Baca artikel menarik di Digilabs Kreasi Nusantara'
  const img = post.imageUrl || DEFAULT_IMG
  const blogUrl = `${SITE}/blog/${slug}`

  // If not a social crawler, redirect to blog page with article param
  // Use ?article= slug instead of /slug to avoid infinite loop
  if (!isSocialCrawler(userAgent)) {
    return new Response(null, {
      status: 302,
      headers: { Location: `/blog?article=${slug}` }
    })
  }

  // Serve OG tags for social media crawlers (no redirect)
  const html = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>${title} | Digilabs Kreasi</title>
<meta name="description" content="${desc}"/>

<!-- Open Graph / Facebook -->
<meta property="og:type" content="article"/>
<meta property="og:url" content="${blogUrl}"/>
<meta property="og:title" content="${title} | Digilabs Kreasi"/>
<meta property="og:description" content="${desc}"/>
<meta property="og:image" content="${img}"/>
<meta property="og:image:width" content="1200"/>
<meta property="og:image:height" content="630"/>

<!-- Twitter/X -->
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:url" content="${blogUrl}"/>
<meta name="twitter:title" content="${title} | Digilabs Kreasi"/>
<meta name="twitter:description" content="${desc}"/>
<meta name="twitter:image" content="${img}"/>

<link rel="canonical" href="${blogUrl}"/>
</head>
<body>
<p>Redirecting to article...</p>
</body>
</html>`

  return new Response(html, {
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 's-maxage=300' },
  })
}