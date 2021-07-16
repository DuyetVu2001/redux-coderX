import React, { useState } from 'react';

const Login = ({ login }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<form
			onSubmit={() => {
				login(email, password);
			}}
		>
			<input
				type="email"
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter your email"
			/>
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				placeholder="Enter your password"
			/>
			<button>Login</button>
		</form>
	);
};

export default Login;
