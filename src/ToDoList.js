import React, { useState } from "react";
import NewToDoForm from "./NewToDoForm";
import ToDo from "./ToDo";

const ToDoList = () => {
	const [toDoList, setToDoList] = useState([]);

	const addToDo = (newToDo) => {
		setToDoList((toDoList) => [...toDoList, newToDo]);
	};

	const deleteToDo = (task) => {
		setToDoList((listOfTodos) => {
			return listOfTodos.filter((todo) => todo.task !== task);
		});
	};

	const editTodo = (task, updatedTask) => {
		setToDoList((listOfTodos) => {
			return listOfTodos.map((todo) => {
				if (todo.task === task) {
					todo.task = updatedTask;
				}
				return todo;
			});
		});
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
