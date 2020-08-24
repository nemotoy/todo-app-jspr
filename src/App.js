import { TodoListModel } from "./model/TodoListModel.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListView } from "./veiw/TodoListView.js";
import { render } from "./veiw/html-util.js";

export class App {
    constructor() {
        this.todoListModel = new TodoListModel();
        this.todoListView = new TodoListView([]);
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

    mount() {
        const formElement = document.querySelector("#js-form");
        const inputElement = document.querySelector("#js-form-input");
        const containerElement = document.querySelector("#js-todo-list");
        const todoItemCoundElement = document.querySelector("#js-todo-count");

        this.todoListModel.onChange(() => {
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
        formElement.addEventListener("submit", (event) => {
            event.preventDefault();
            this.handleAdd(inputElement.value);
            inputElement.value = "";
        });
    }
}
