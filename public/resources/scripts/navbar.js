let prevScrollPos = window.pageYOffset;
let navEl = document.querySelector("nav");

function showNav() {
    navEl.style.top = "0px";
}
function hideNav() {
    navEl.style.top = "-60px";
}

window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos < prevScrollPos) {
        showNav();
    } else {
        hideNav()
    }
    prevScrollPos = currentScrollPos;
}