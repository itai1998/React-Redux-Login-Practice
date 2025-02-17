import React from 'react'
import Notlogin from './Notlogin'
import Login from './Login'
import { useSelector } from 'react-redux'

export const Profile = () => {
  const state = useSelector((state) => state.user)

  return (
    <div style={{ marginTop: '50px' }}>
      {state.profile.login ? <Login /> : <Notlogin />}
    </div>
  )
}
