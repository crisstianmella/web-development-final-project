/*==================== Import data ====================*/
import { blog_post } from "../utils/data.js";

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

/*==================== Data Blog ====================*/
// Obtener data
const postContainer = document.getElementById("post_container");
console.log(postContainer);
console.log(blog_post);

const mappingData = (data) => {
    return data.map(
        (post) =>
            `
    <div>
        <div class="post_content post_close">
            <div class="post_header">
                <div>
                    <h1 class="post_title">
                        ${post.title}
                    </h1>
                    <span class="post_author"
                        >Autor: ${post.author}</span
                    >
                    <br />
                    <span class="post_date"
                        >Fecha: ${post.date}</span
                    >
                </div>
                <i class="uil uil-angle-down post_arrow"></i>
            </div>
            <div>
                <div class="post_data">
                    <p class="post_content">
                        ${post.content}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `
    );
};

const renderData = () => {
    const template = mappingData(blog_post);
    console.log(template);
    return (postContainer.innerHTML = template.join(" "));
};

renderData();

/*==================== Publicaciones ====================*/
const postContent = document.getElementsByClassName("post_content");
const postHeader = document.querySelectorAll(".post_header");

function togglePost() {
    let itemClass = this.parentNode.className;
    //console.log(itemClass);
    for (let i = 0; i < postContent.length; i++) {
        postContent[i].className = "post_content post_close";
    }
    if (itemClass === "post_content post_close") {
        this.parentNode.className = "post_content post_open";
    }
}
postHeader.forEach((elem) => {
    elem.addEventListener("click", togglePost);
});
