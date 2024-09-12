import "./style.css";
import { createInitialContent } from "./pageLoad";
import { createMenuContent } from "./menu";
import { createAboutContent } from "./about";

createInitialContent();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

let selected = homeBtn;

function changeContent(createContentFn, event) {
    if (event.target === selected) return;

    createContentFn();
    
    selected.classList.remove("selected");
    selected = event.target;
    selected.classList.add("selected");
}

homeBtn.addEventListener("click", e => changeContent(createInitialContent, e));
menuBtn.addEventListener("click", e => changeContent(createMenuContent, e));
aboutBtn.addEventListener("click", e => changeContent(createAboutContent, e));