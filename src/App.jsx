import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import './App.css'
import { Profile } from './Profile'
import userSlice from './store/userSlice'
import Counter from './Counter'
import { counterStore } from './store/counterSlice'

//store

const store = configureStore({
  reducer: {
    // key : value
    user: userSlice,
  },
})

function App() {
  return (
    <div>
      <Provider store={store}>
        <Profile />
      </Provider>
      <hr />
      <Provider store={counterStore}>
        <Counter />
      </Provider>
    </div>
  )
}

export default App
