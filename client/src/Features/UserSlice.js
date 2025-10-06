import { createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../Exampledata";

const initialState = { value: UsersData };

export const userSlice = createSlice({
  name: "users", //name of the state
  initialState, // initial value of the state
  reducers: {},
});

export default userSlice.reducer;
