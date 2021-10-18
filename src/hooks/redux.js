import { AppDispatch, RootState } from './../store/store'
const { TypedUseSelectorHook,  useDispatch, useSelector } = require("react-redux");

export const useAppDispatch = () => useDispatch < AppDispatch > ()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector