import React, {useState} from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";

import styled from "styled-components";

const Login = () => {
	const [userName, setUserName] = useState(null);
	const [password, setPassword] = useState(null);

	const loginUser = () => {
		console.log(userName, password);
	}

	return (
		<Grid>
			<form noValidate autoComplete="off">
				<Input
					id="username"
					label="Outlined"
					variant="outlined"
					placeholder="Enter Username"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
				<Input
					id="password"
					label="Outlined"
					variant="outlined"
					type="password"
					placeholder="Enter Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button variant="contained" color="primary" onClick={loginUser}>
					Login
				</Button>
			</form>
		</Grid>
	);
};

export default Login;