function doScroll(what: HTMLElement, where: number) {
  const interval = setInterval(() => {
    what.scrollTo(what.scrollLeft + (where - what.scrollLeft) / 10, 0);
    console.log(where, what.scrollLeft);
    if (
      Math.abs(where - what.scrollLeft) < 10
    ) {
      what.scrollTo(where, 0);
      clearInterval(interval);
    }
  }, 1);
}

export {doScroll};