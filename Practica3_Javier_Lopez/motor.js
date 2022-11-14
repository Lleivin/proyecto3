const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");
btnMenu.addEventListener("click", function () {
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i = 0; i < subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function () {
        if (window.innerWidth < 992) {
            const submenu = thius.nextElementSibling;
            const height = submenu.scrollHeight;

            if (submenu.classList.contains("desplegar")) {
                submenu.classList.remove("desplegar");
                submenu.removeAttribute("style");
            } else {
                submenu.classList.add("desplegar");
                submenu.style.heigtht = height + "px";
            }


        }
    })

}