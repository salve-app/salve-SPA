export function scrollToTop(ref: HTMLElement | null) {
  if (ref) {
    ref.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
}
