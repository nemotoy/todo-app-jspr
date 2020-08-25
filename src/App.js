import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./view/TodoListView.js";
import { render } from "./view/html-util.js";

export class App {
    constructor({ formElement, formInputElement, todoListContainerElement, todoCountElement }) {
        this.todoListModel = new TodoListModel();
        this.todoListView = new TodoListView([]);

        this.formElement = formElement;
        this.formInputElement = formInputElement;
        this.todoListContainerElement = todoListContainerElement;
        this.todoCountElement = todoCountElement;

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleAdd(title) {
        this.todoListModel.addTodo(new TodoItemModel({ title, completed: false }));
    }

    handleUpdate({ id, completed }) {
        this.todoListModel.updateTodo({ id, completed });
    }

    handleDelete({ id }) {
        this.todoListModel.deleteTodo({ id });
    }

    handleSubmit(event) {
        event.preventDefault();
        const inputElement = this.formInputElement;
        this.handleAdd(inputElement.value);
        inputElement.value = "";
    }

    mount() {

        this.todoListModel.onChange(() => {
            const todoItems = this.todoListModel.getTodoItems();
            const todoCountElement = this.todoCountElement;
            const todoListContainerElement = this.todoListContainerElement;
            const todoListElement = this.todoListView.createElement(todoItems, {
                onUpdateTodo: ({ id, completed }) => {
                    this.handleUpdate({ id, completed });
                },
                onDeleteTodo: ({ id }) => {
                    this.handleDelete({ id });
                }
            })
            render(todoListElement, todoListContainerElement);
            todoCountElement.textContent = `Todo item counts: ${this.todoListModel.getTotalCount()}`;
        })
        this.formElement.addEventListener("submit", this.handleSubmit);
    }

    // TODO: refactor
    unmount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCoundElement = document.querySelector("#js-todo-count");

        this.todoListModel.offChange(() => {
            const todoItems = this.todoListModel.getTodoItems();
            const todoListView = new TodoListView();
            const todoListElement = todoListView.createElement(todoItems, {
                onUpdateTodo: ({ id, completed }) => {
                    this.handleUpdate({ id, completed });
                },
                onDeleteTodo: ({ id }) => {
                    this.handleDelete({ id });
                }
            })
            render(todoListElement, containerElement);
            todoItemCoundElement.textContent = `Todo item counts: ${this.todoListModel.getTotalCount()}`;
        })
        formElement.removeEventListener("submit", (event) => {
            event.preventDefault();
            this.handleAdd(inputElement.value);
            inputElement.value = "";
        });
    }
}
