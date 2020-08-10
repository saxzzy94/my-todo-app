import React, { useState } from "react";

const TodoItem = ({ title, id, deleteTodo, time }) => {
	const [done, setDone] = useState(false);

	const toggle = () => {
		if (!done) {
			setDone(true);
		} else {
			setDone(false);
		}
	};
	return (
		<li className='todo-item'>
			<div className='todo-title'>
				<input type='checkbox' onClick={toggle} className='checkbox' />
				<h3 className={`${done ? "completed" : "nil"}`}>{title}</h3>
			</div>
			<time>{time}</time>
			<button
				onClick={() => {
					deleteTodo(id);
				}}
				className='delete-btn'
			>
				X
			</button>
		</li>
	);
};

export default TodoItem;
