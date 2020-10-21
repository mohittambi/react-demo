import axios from 'axios';

class APIError extends Error {
	constructor(message, errorMessage, statusCode = null) {
		super(message);
		this.errorMessage = errorMessage;
		this.statusCode = statusCode;
	}
}

class APIClient {
	constructor(token) {
		let loginToken = token;
		if (loginToken === undefined) {
			loginToken = TokenManager.getToken();
		}
		this.client = axios.create({
			baseURL: API_URL,
			timeout: 100000,
			headers: {
				Authorization: `Bearer ${loginToken}`,
			},
		});
	}


}

export default APIClient;
