const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an absolute path with the configured `base` URL. */
export function baseUrl(path: string): string {
  return base + path;
}
