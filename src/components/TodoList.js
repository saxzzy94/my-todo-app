import React, { useContext } from "react";
import TodoItem from "./TodoItem";
import { GLobalContext } from "../context/globalContext";

const TodoList = () => {
	const { todos, deleteTodo } = useContext(GLobalContext);

	return (
		<div>
			<ul className='todo-list'>
				{todos.map(todo => (
					<TodoItem
						key={todo.id}
						id={todo.id}
						title={todo.title}
						time={todo.time}
						deleteTodo={deleteTodo}
					/>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
