type HTML = HTMLElement | null;
type Input = HTMLInputElement | null;

const box: HTML = document.querySelector("#box");

const form: HTML = document.querySelector("form");
const mkAccount: HTML = document.querySelector("#mkaccount span");
const findIdPw: HTML = document.querySelector("#find_id_pw span");
const inputProblem: HTML = document.querySelector("#inputProblem");

const idBox: Input = document.querySelector("#id");
const pwBox: Input = document.querySelector("#pw");

export {
  box, form, mkAccount, findIdPw, idBox, pwBox, inputProblem
};