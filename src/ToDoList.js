import React, { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";

const ToDoList = () => {
	const savedList = localStorage.getItem("toDoList");

	const [toDoList, setToDoList] = useState(JSON.parse(savedList) || []);

	const addToDo = async (newToDo) => {
		localStorage.setItem("toDoList", JSON.stringify([...toDoList, newToDo]));
		setToDoList((toDoList) => [...toDoList, newToDo]);
	};

	const deleteToDo = async (task) => {
		localStorage.setItem(
			"toDoList",
			JSON.stringify(toDoList.filter((todo) => todo.task !== task))
		);
		await setToDoList((listOfTodos) => {
			return listOfTodos.filter((todo) => todo.task !== task);
		});
	};

	const editTodo = async (task, updatedTask) => {
		await setToDoList((listOfTodos) => {
			return listOfTodos.map((todo) => {
				if (todo.task === task) {
					todo.task = updatedTask;
				}
				return todo;
			});
		});
		localStorage.setItem("toDoList", JSON.stringify(toDoList));
	};

	return (
		<>
			<h1>To Do List</h1>
			<NewToDoForm addToDo={addToDo} />
			<div>
				{toDoList.map(({ task }) => {
					return (
						<ToDo key={task} task={task} deleteToDo={deleteToDo} editTodo={editTodo} />
					);
				})}
			</div>
		</>
	);
};

export default ToDoList;
