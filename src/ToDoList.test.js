import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import ToDoList from "./ToDoList";

beforeEach(() => {
	// due to adding localstorage, need to clear this otherwise tasks will keep being added
	localStorage.clear();
});
//smoke test
it("should render NewBoxForm", () => {
	render(<ToDoList />);
});

//snapshot test
it("should match snapshot", () => {
	const { asFragment } = render(<ToDoList />);
	expect(asFragment()).toMatchSnapshot();
});

function addTask(toDoList, taskName) {
	const todo = toDoList.getByLabelText("New Task");
	const btn = toDoList.getByText("Submit");

	fireEvent.change(todo, { target: { value: taskName } });
	fireEvent.click(btn);
}

it("should add a new todo", () => {
	const list = render(<ToDoList />);
	expect(list.queryByText("task")).not.toBeInTheDocument();

	addTask(list, "task");

	expect(list.queryByText("task")).toBeInTheDocument();
});

it("should delete a new todo", () => {
	const list = render(<ToDoList />);
	addTask(list, "new task");

	expect(list.queryByText("new task")).toBeInTheDocument();

	const del = list.getByText("Delete");
	fireEvent.click(del);

	expect(list.queryByText("new task")).not.toBeInTheDocument();
});

it("should edit a new todo", () => {
	const list = render(<ToDoList />);
	addTask(list, "new task");

	expect(list.queryByText("new task")).toBeInTheDocument();

	const edit = list.getByText("Edit");
	fireEvent.click(edit);

	fireEvent.change(list.getByDisplayValue("new task"), { target: { value: "updated" } });

	fireEvent.click(list.getByText("Update!"));

	expect(list.queryByText("updated")).toBeInTheDocument();
});
