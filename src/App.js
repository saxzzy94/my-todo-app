import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { GlobalProvider } from "./context/globalContext";
import Header from "./components/Header";

function App() {
	return (
		<GlobalProvider>
			<div className='container'>
				<Header />
				<TodoInput />
				<TodoList />
			</div>
		</GlobalProvider>
	);
}

export default App;
