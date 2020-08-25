import assert from "assert";
import { TodoItemModel } from "../src/model/TodoItemModel.js";

it("Given title isn't empty, isEmptyTitle return false", () => {
  const input = new TodoItemModel({ title: "title", completed: false });
  const expected = false;
  assert.strictEqual(input.isEmptyTitle(), expected);
});

it("Given title is empty, isEmptyTitle return true", () => {
  const input = new TodoItemModel({ title: "", completed: false });
  const expected = true;
  assert.strictEqual(input.isEmptyTitle(), expected);
});
