import React, { useState } from "react";
import ToDoList from "./ToDoList";

const ToDo = ({ task, deleteToDo, editTodo }) => {
	const [editTask, setEditTask] = useState(task);
	const [isEditing, setIsEditing] = useState(false);

	const handleChange = (e) => {
		setEditTask(e.target.value);
	};

	const toggleEdit = () => {
		setIsEditing((edit) => !edit);
	};

	const handleUpdate = (e) => {
		e.preventDefault();
		editTodo(task, editTask);
		setIsEditing(false);
	};

	let display = (
		<div className="ToDo">
			{task}
			<button
				className="ToDo-delete"
				onClick={() => {
					deleteToDo(task);
				}}
			>
				Delete
			</button>
			<button className="ToDo-edit" onClick={toggleEdit}>
				Edit
			</button>
		</div>
	);

	if (isEditing) {
		display = (
			<div>
				<form onSubmit={handleUpdate}>
					<input type="text" value={editTask} onChange={handleChange} />
					<button>Update!</button>
				</form>
			</div>
		);
	}

	return display;
};

export default ToDo;
