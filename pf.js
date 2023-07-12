const primarynav = document.querySelector('.primary_navigation')
const navtoggle = document.querySelector('.mobile-nav-toggle');


navtoggle.addEventListener('click', () => {
    const visibility = primarynav.getAttribute('data-visible');

if (visibility === "false") {
    primarynav.setAttribute('data-visible', true);
    navtoggle.setAttribute('aria-expanded', true);
} else if (visibility === "true") {
    primarynav.setAttribute('data-visible', false);
    navtoggle.setAttribute('aria-expanded', false);
}

});

let resizeTimer;
window.addEventListener("resize", () => {
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout (() => {
        document.body.classList.remove("resize-animation-stopper");
    },400);
});