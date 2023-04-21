import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers = createAsyncThunk("users/fetch", async () => {
	const res = await axios.get("http://localhost:3001/users");
	await pause(4000);
	return res.data;
});

// dev Only
const pause = (duration) => {
	return new Promise((resolve) => {
		setTimeout(resolve, duration);
	});
};

export { fetchUsers };
