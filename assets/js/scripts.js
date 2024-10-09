// Button Menu Mobile
const buttonMenuMobile = document.querySelector(".header .inner-menu-mobile");
if (buttonMenuMobile){
    const menu = document.querySelector(".header .inner-menu");
    buttonMenuMobile.onclick = () => {
        const isShow = menu.getAttribute("show");
        if (isShow == "yes")
        {
            menu.setAttribute("show", " ");
        }
        else
        {
            menu.setAttribute("show", "yes");
        }
    }
}
// End Button Menu Mobile