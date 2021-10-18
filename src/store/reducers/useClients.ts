import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUsers } from "../../models/IUsers.js"

interface UserState {
	users: IUsers[]
	isLoading: Boolean
	error: string
	count: number
}

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: '',
	count: 0
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		increment(state, action: PayloadAction<number>) {
			state.count += action.payload
		}
	}
})

export default userSlice.reducer