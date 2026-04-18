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

export function urlFor(source) {
  return builder.image(source)
}