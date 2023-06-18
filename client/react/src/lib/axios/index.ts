import axios from "axios";

const API = axios.create({
	withCredentials: true,
});

// TODO auth interceptors

export default API;
