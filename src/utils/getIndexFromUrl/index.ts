/**
 * Returns the index number (page, location or episode) from an url.
 *
 * @remarks
 * This is our math utilities lib for shared projects.
 *
 * @param url string - The url input
 * @returns The index number contained in url.
 */

export const getIndexFromUrl = (url: null | string): number => {
  if (!url) {
    return 0;
  }

  const matches = url.match(/(\d+)$/);

  if (!matches) {
    return 0;
  }

  const page = matches[1];

  return page ? Number(page) : 0;
};
