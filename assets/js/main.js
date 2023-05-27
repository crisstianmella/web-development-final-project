/*==================== Mostrar y ocultar menu ====================*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
/*===== Mostrar menu =====*/
/* Validar si existe la constante */
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

/*===== Ocultar menu =====*/
/* Validar si existe la constante */
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

/*==================== Remover menu en version mobile ====================*/
const navLink = document.querySelectorAll(".nav_link");

function linkAction() {
    const navMenu = document.getElementById("nav-menu");
    // Cuando se da click sobre un nav_link, se quita la clase show-menu
    navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== Habilidades ====================*/
const skillsContent = document.getElementsByClassName("skills_content");
const skillsHeader = document.querySelectorAll(".skills_header");
// console.log(skillsContent);
// console.log(skillsHeader);

function toggleSkills() {
    let itemClass = this.parentNode.className;
    // console.log(itemClass);
    for (let i = 0; i < skillsContent.length; i++) {
        skillsContent[i].className = "skills_content skills_close";
    }
    if (itemClass === "skills_content skills_close") {
        this.parentNode.className = "skills_content skills_open";
    }
}
skillsHeader.forEach((elem) => {
    elem.addEventListener("click", toggleSkills);
});
