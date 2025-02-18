import React from 'react'
import { useGetAllPostsQuery } from '../store/api/apiSlice'

const Post = () => {
  const { data, isLoading } = useGetAllPostsQuery()
  console.log('Posts', data)

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div>
      <h1>Post</h1>
      <h2>{data[0].title}</h2>
      <p>{data[0].body}</p>
    </div>
  )
}

export default Post
