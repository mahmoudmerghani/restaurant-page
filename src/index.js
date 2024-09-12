import "./style.css";
import { createInitialContent } from "./pageLoad";
import { createMenuContent } from "./menu";
import { createAboutContent } from "./about";

createInitialContent();

const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const aboutBtn = document.getElementById("about");

homeBtn.addEventListener("click", createInitialContent);
menuBtn.addEventListener("click", createMenuContent);
aboutBtn.addEventListener("click", createAboutContent);
