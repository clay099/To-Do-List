import React, { useState } from "react";
import "./NewToDoForm.css";

const NewToDoForm = ({ addToDo }) => {
	const INITIALSTATE = { task: "" };
	const [formData, setFormData] = useState(INITIALSTATE);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((formData) => ({ ...formData, [name]: value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		addToDo({ ...formData });
		setFormData(INITIALSTATE);
	};

	return (
		<form onSubmit={handleSubmit} className="NewTaskForm">
			<label htmlFor="task">New Task</label>
			<input
				id="task"
				name="task"
				placeholder="New Task"
				type="text"
				value={formData.task}
				onChange={handleChange}
			/>
			<button className="NewTaskForm-btn">Submit</button>
		</form>
	);
};

export default NewToDoForm;
