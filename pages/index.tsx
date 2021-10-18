import type { NextPage } from 'next'
import { useSelector } from 'react-redux'
import { $CombinedState } from 'redux'
import { userSlice } from '../src/store/reducers/useClients'
import { RootState } from '../src/store/store'
import { useAppDispatch, useAppSelector } from './../src/hooks/redux'

const Home: NextPage = () => {
  const { count } = useAppSelector(state => state.userReducer)
  const { increment } = userSlice.actions
  const dispatch = useAppDispatch()
  
  return (
    <div>
      <h1>{count}</h1>

      
    </div>
  )
}

export default Home
