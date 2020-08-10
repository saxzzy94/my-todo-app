import React, { useState, useContext } from "react";
import { GLobalContext } from "../context/globalContext";

const TodoInput = () => {
	const [todo, setTodo] = useState("");
	const [time, setTime] = useState("");
	const { addTodo, todos } = useContext(GLobalContext);

	const onSubmit = e => {
		e.preventDefault();

		const newTodo = {
			id: todos.length + 1,
			title: todo,
			time: time,
		};
		addTodo(newTodo);
	};

	return (
		<div className='add-todos'>
			<form onSubmit={onSubmit} className='input-form'>
				<input
					id='todo-input'
					value={todo}
					onChange={e => setTodo(e.target.value)}
					placeholder='Enter task here'
					required
				/>
				<input
					type='time'
					id='todo-input'
					value={time}
					onChange={e => setTime(e.target.value)}
					placeholder='At what Time?'
					required
				/>
				<input type='submit' className='add-todo' value='Add Todos' />
			</form>
		</div>
	);
};

export default TodoInput;
