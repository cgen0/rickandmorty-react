/**
 * Applies input url as source for the HTMLImageElement,
 * This is a workaround that resolves BS_BINDING errors in Firefox. see https://github.com/facebook/react/issues/20682
 *
 *
 * @param src - image url
 * @returns void
 */
export function addSrc(src: string) {
  //resolves BS_BINDING firefox errors. see https://github.com/facebook/react/issues/20682
  return function (img: HTMLImageElement) {
    if (img) {
      img.src = src;
    }
  };
}
