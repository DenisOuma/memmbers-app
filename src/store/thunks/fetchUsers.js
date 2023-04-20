import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const fetchUsers = createAsyncThunk("users/fetch", async () => {
	const res = await axios.get("http://localhost:3001/users");
	return res.data;
});

export { fetchUsers };
