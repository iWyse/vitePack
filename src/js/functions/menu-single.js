import { bodyLock, bodyUnlock } from "../functions/bodylock.js";

const menu = document.querySelector(".menu");
const menuList = menu.querySelector(".menu-list");
const menuClosed = menu.querySelector(".menu-mobile-close");
const menuToggle = document.querySelector(".menu-mobile-toggle");
const menuOverlay = document.querySelector(".overlay");

menuList.addEventListener("click", (e) => {
    if (!menu.classList.contains("active")) {
        return;
    }
    if (e.target.closest(".menu-item")) {
        toggleMenu();
    }
});

menuToggle.addEventListener("click", () => {
    toggleMenu();
});
menuClosed.addEventListener("click", () => {
    toggleMenu();
});
menuOverlay.addEventListener("click", () => {
    toggleMenu();
});

function toggleMenu() {
    menu.classList.toggle("active");
    if (menu.classList.contains("active")) {
        bodyLock();
    } else {
        bodyUnlock();
    }
    menuOverlay.classList.toggle("active");
}

window.onresize = function () {
    if (this.innerWidth > 991) {
        if (menu.classList.contains("active")) {
            toggleMenu();
        }
    }
};
