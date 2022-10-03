type HTML = HTMLElement | null;
type Input = HTMLInputElement | null;

const box: HTML = document.querySelector("#box");

const scroller: HTMLElement = document.querySelector("#signInUpIdPw")!;

const form: HTML = document.querySelector("form");
const mkAccount: HTML = document.querySelector("#mkaccount span");
const findIdPw: HTML = document.querySelector("#find_id_pw span");
const inputProblem: HTML = document.querySelector("#inputProblem");

const idBox: Input = document.querySelector("#id");
const pwBox: Input = document.querySelector("#pw");

const returns: NodeListOf<HTMLElement> = document.querySelectorAll(".return")!;

export {
  box, form, mkAccount, findIdPw, idBox, pwBox, inputProblem, scroller, returns
};