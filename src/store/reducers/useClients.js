import { createSlice } from "@reduxjs/toolkit"
import { IUsers } from "./../../models/IUsers.js"

interface UserState {
	users: IUsers[];
	isLoading: Boolean
	error: string
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error,
}

export const userSlice = createSlice