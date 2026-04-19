import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'nuvi2tav',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-03-01',
  withCredentials: true,
})

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  if (!source) return null
  return builder.image(source)
}

// Fungsi untuk mengambil post berdasarkan slug
export async function getPost(slug: string) {
  return client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      content,
      publishedAt,
      featuredImage,
      excerpt,
      "category": category->title,
      "author": author->{
        name,
        image,
        bio,
        role
      }
    }
  `, { slug })
}

// Fungsi untuk mengambil semua posts
export async function getPosts() {
  return client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      featuredImage,
      excerpt,
      "category": category->title
    }
  `)
}