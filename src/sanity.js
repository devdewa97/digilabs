import { createClient } from '@sanity/client'
import createImageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'nuvi2tav',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = createImageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}