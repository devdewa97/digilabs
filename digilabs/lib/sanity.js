import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "nuvi2tav",
  dataset: "production",
  useCdn: true,
  apiVersion: "2024-01-01",
});