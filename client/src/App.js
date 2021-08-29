import React from 'react'
import PostCreate from './PostCreate';
import Postlist from './Postlist';

export default function App() {
  return (
    <div className="container">
    <h1>Create new post</h1>
    <PostCreate />
    <h1>Posts</h1>
    <Postlist />
    </div>
  )
}
