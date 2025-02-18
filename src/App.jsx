import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import './App.css'
import { Profile } from './Profile'
import userSlice from './store/userSlice'
import Counter from './Counter'
import { counterStore } from './store/counterSlice'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { postsApi } from './store/api/apiSlice'
import Post from './rtk-query/post'

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
      <hr />
      <ApiProvider api={postsApi}>
        <Post />
      </ApiProvider>
    </div>
  )
}

export default App
