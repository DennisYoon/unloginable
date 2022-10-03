const box = document.querySelector("#box");
const scroller = document.querySelector("#signInUpIdPw");
const form = document.querySelector("form");
const mkAccount = document.querySelector("#mkaccount span");
const findIdPw = document.querySelector("#find_id_pw span");
const inputProblem = document.querySelector("#inputProblem");
const idBox = document.querySelector("#id");
const pwBox = document.querySelector("#pw");
const returns = document.querySelectorAll(".return");
{ box, form, mkAccount, findIdPw, idBox, pwBox, inputProblem, scroller, returns };

scroller === null || scroller === void 0 ? void 0 : scroller.scrollTo(scroller.clientWidth * 1, 0);
window.dologin = function () {
    inputProblem === null || inputProblem === void 0 ? void 0 : inputProblem.classList.remove("hide");
    inputProblem === null || inputProblem === void 0 ? void 0 : inputProblem.classList.add("show");
    box === null || box === void 0 ? void 0 : box.classList.remove("shake");
    window.requestAnimationFrame(() => box === null || box === void 0 ? void 0 : box.classList.add("shake"));
    idBox ? idBox.value = "" : null;
    pwBox ? pwBox.value = "" : null;
};
form === null || form === void 0 ? void 0 : form.addEventListener("submit", e => {
    e.preventDefault();
});
mkAccount === null || mkAccount === void 0 ? void 0 : mkAccount.addEventListener("click", () => {
    doScroll(scroller, (scroller === null || scroller === void 0 ? void 0 : scroller.clientWidth) * 2);
    // alert("계정 만드는 창으로 넘어가라!");
});
findIdPw === null || findIdPw === void 0 ? void 0 : findIdPw.addEventListener("click", () => {
    doScroll(scroller, (scroller === null || scroller === void 0 ? void 0 : scroller.clientWidth) * 0);
    // alert("진정하시고 심호흡 하세요. 당신의 아이디 또는 비밀번호를 기억하려 애쓰세요. 당신의 전화번호나 다른 플렛폼의 계정을 떠올려 보세요!");
});
for (const element of returns) {
    element.addEventListener("click", () => {
        doScroll(scroller, (scroller === null || scroller === void 0 ? void 0 : scroller.clientWidth) * 1);
    });
}

function doScroll(what, where) {
    const interval = setInterval(() => {
        what.scrollTo(what.scrollLeft + (where - what.scrollLeft) / 10, 0);
        console.log(where, what.scrollLeft);
        if (Math.abs(where - what.scrollLeft) < 10) {
            what.scrollTo(where, 0);
            clearInterval(interval);
        }
    }, 1);
}
{ doScroll };
