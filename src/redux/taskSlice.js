import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pending: false,
  taskInfo: { taskStatus: "" },
  error: null,
};

export const updateTask = createAsyncThunk(
  "task/updateTask",
  async ({ taskId, newStatus }) => {
    const res = await axios.put(`/update/${taskId}`, {
      taskStatus: newStatus,
    });
    return res.data;
  }
);

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: {
    [updateTask.pending]: (state) => {
      state.pending = true;
      state.error = null;
    },

    [updateTask.fulfilled]: (state, action) => {
      state.pending = false;

      state.taskInfo.taskStatus = action.payload.taskStatus;
      state.error = "";
    },

    [updateTask.rejected]: (state, action) => {
      state.pending = false;
      state.error = action.error.message;
    },
  },
});

export default taskSlice.reducer;
