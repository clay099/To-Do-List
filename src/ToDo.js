import React, { useState } from "react";
import ToDoList from "./ToDoList";
import "./ToDo.css";

const ToDo = ({ task, deleteToDo, editTodo }) => {
	const [editTask, setEditTask] = useState(task);
	const [isEditing, setIsEditing] = useState(false);
	const [isComplete, setIsComplete] = useState(false);

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

	const toggleComplete = () => {
		setIsComplete((val) => !val);
	};

	const completeClass = isComplete ? " ToDo completed" : "ToDo";

	let display = (
		<div className={completeClass} onClick={toggleComplete}>
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
			<button className="ToDo-complete">Mark Complete</button>
		</div>
	);

	if (isEditing) {
		display = (
			<div className="ToDo">
				<form onSubmit={handleUpdate}>
					<input type="text" value={editTask} onChange={handleChange} />
					<button className="ToDo-update">Update!</button>
				</form>
			</div>
		);
	}

	return display;
};

export default ToDo;
