import React, { useState, useEffect } from 'react';

export default function TodoApp({ todos, addTodo, fetchTodos }) {
	const [text, setText] = useState('');

	useEffect(() => {
		fetchTodos();
	}, [fetchTodos]);

	return (
		<div className="todoApp">
			{/* <input
				type="text"
				value={text}
				onChange={(e) => {
					setText(e.target.value);
				}}
				onKeyUp={(e) => {
					if (e.keyCode === 13) {
						addTodo(text);
						setText('');
					}
				}}
			/>
			<button
				onClick={() => {
					addTodo(text);
					setText('');
				}}
			>
				Add
			</button> */}
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>{todo.title}</li>
				))}
			</ul>
		</div>
	);
}
