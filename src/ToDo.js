import React from "react";
import ToDoList from "./ToDoList";

const ToDo = ({ task, deleteToDo }) => {
	return (
		<div className="ToDo">
			{task}
			<button
				className="ToDo-Btn"
				onClick={() => {
					deleteToDo(task);
				}}
			>
				Delete
			</button>
		</div>
	);
};

export default ToDo;
