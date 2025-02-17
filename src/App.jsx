import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import './App.css'
import { Profile } from './Profile'
import userSlice from './store/userSlice'

//store

const store = configureStore({
  reducer: {
    // key : value
    user: userSlice,
  },
})

function App() {
  return (
    <Provider store={store}>
      <div>
        <Profile />
      </div>
    </Provider>
  )
}

export default App
