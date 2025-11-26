// src/utils/slug.ts

/**
 * Create a URL-friendly slug from a name string.
 * @param name - The input string to slugify
 * @returns The slugified string
 */
export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
