export function debounce(fn: Function, delay: number) {
  let timer;
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), delay);
  })();
}
