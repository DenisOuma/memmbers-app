import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";
const userSlice = createSlice({
	name: "users",
	initialState: {
		data: [],
		isLoading: false,
		error: null,
	},
	extraReducers(builder) {
		builder.addCase(fetchUsers.pending, (state, action) => {
			// Action goes here
			state.isLoading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			// Action goes here
			state.isLoading = false;
			state.data = action.payload;
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			// Action goes here
			state.isLoading = false;
			state.error = action.error;
		});
	},
});

export const usersReducer = userSlice.reducer;
