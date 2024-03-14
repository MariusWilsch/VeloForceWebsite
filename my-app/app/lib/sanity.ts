import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "ygxo8qa0",
  dataset: "production",
  apiVersion: "2021-03-25",
  useCdn: false,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source)
}