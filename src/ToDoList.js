import React, { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";

const ToDoList = () => {
	const [toDoList, setToDoList] = useState([]);

	console.log("general todolist", toDoList);
	const addToDo = (newToDo) => {
		setToDoList((toDoList) => [...toDoList, newToDo]);
	};

	const deleteToDo = (task) => {
		setToDoList((listOfTodos) => {
			return listOfTodos.filter((todo) => todo.task !== task);
		});
	};

	return (
		<>
			<h1>To Do List</h1>
			<NewToDoForm addToDo={addToDo} />
			<div>
				{toDoList.map(({ task }) => {
					return <ToDo key={task} task={task} deleteToDo={deleteToDo} />;
				})}
			</div>
		</>
	);
};

export default ToDoList;
