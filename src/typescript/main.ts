import { form } from "./dom";

declare global {
  interface Window {
    dologin: () => void
  }
}

window.dologin = function () {
  console.log("Hello world");
}

form?.addEventListener("submit", e => {
  e.preventDefault();
});