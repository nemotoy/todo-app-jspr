import { App } from "./src/App.js"

const formElement = document.querySelector("#js-form");
const formInputElement = document.querySelector("#js-form-input");
const todoListContainerElement = document.querySelector("#js-todo-list");
const todoCountElement = document.querySelector("#js-todo-count");

const app = new App({
    formElement,
    formInputElement,
    todoListContainerElement,
    todoCountElement
});

window.addEventListener("load", () => {
    app.mount();
});

window.addEventListener("unload", () => {
    app.unmount();
});
