import logo from "./logo.svg"
import "./App.css"
import CreatePost from "./components/CreatePost"
import axios from "axios"
import { useState, useEffect } from "react"

function App() {
  const [posts, setPosts] = useState(null)
  useEffect(() => {
    function getPosts() {
      axios
        .get("http://localhost:3001/api/post/all")
        .then(({ data: { posts } }) => {
          setPosts(posts)
        })
    }

    getPosts()
  }, [])

  function addPost(post) {
    setPosts([...posts, post])
  }

  return (
    <div className='App'>
      <CreatePost addPost={addPost} />
      {posts?.map(post => (
        <div key={post._id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
          <img src={post.img} width='200px' />
        </div>
      ))}
    </div>
  )
}

export default App
