// Button Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");
if (buttonMenuMobile){
    const menu = document.querySelector(".header .inner-menu");
    const overlay = menu.querySelector(".inner-overlay")
    buttonMenuMobile.onclick = () => {
        menu.setAttribute("show", "yes");
    }

    overlay.onclick = () => {
        menu.setAttribute("show", "");
    }
}
// End Button Menu Mobile