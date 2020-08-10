import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

const initialState = {
	todos: [
		{ id: 1, title: "Go to the market", time: "10:45" },
		{ id: 2, title: "finish my project", time: "13:00" },
		{ id: 3, title: "eat my lunch", time: "13:45" },
	],
};

export const GLobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(AppReducer, initialState);

	function addTodo(todo) {
		dispatch({
			type: "ADD_TODO",
			payload: todo,
		});
	}

	function deleteTodo(id) {
		dispatch({
			type: "DELETE_TODO",
			payload: id,
		});
	}

	// function editTodo(id) {
	// 	dispatch({
	// 		type: "EDIT_TODO",
	// 		payload: id,
	// 	});
	// }

	return (
		<GLobalContext.Provider value={{ todos: state.todos, addTodo, deleteTodo }}>
			{children}
		</GLobalContext.Provider>
	);
};
