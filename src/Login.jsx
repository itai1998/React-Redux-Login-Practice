import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setLogout } from './store/userSlice'

const Login = () => {
  const state = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(setLogout())
  }
  return (
    <div>
      <p>Name:{state.profile.name}</p>
      <p>age:{state.profile.age}</p>
      <p>Email:{state.profile.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Login
