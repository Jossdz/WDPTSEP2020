import axios from "axios"
import { useState } from "react"

const CreatePost = ({ addPost }) => {
  const [img, setImg] = useState(null)
  const [loading, setLoading] = useState(false)

  const submitPost = e => {
    e.preventDefault()

    const title = e.target[0].value
    const body = e.target[1].value

    axios
      .post("http://localhost:3001/api/post/create", {
        title,
        body,
        img
      })
      .then(({ data }) => {
        addPost(data)
      })
      .catch(err => console.error(err))
  }

  const handleUploadPhoto = e => {
    console.log(e.target.files[0])
    setLoading(true)
    // Crear un Form data
    const data = new FormData()
    //           👇 Tenemos que nombrar la llave igual que como el middleware de multer lo nombra
    data.append("photo", e.target.files[0])

    axios
      .post("http://localhost:3001/upload-image", data)
      .then(({ data: { url } }) => {
        setImg(url)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }
  return (
    <div>
      {loading && <h2>uploading image...</h2>}
      <form onSubmit={submitPost}>
        <input type='text' name='title' id='title' placeholder='title' />
        <br />
        <input type='text' name='body' id='body' placeholder='body' />
        <br />
        <input
          type='file'
          name='photo'
          id='photo'
          onChange={handleUploadPhoto}
        />
        <button type='submit' disabled={!img}>
          Create Post
        </button>
      </form>
    </div>
  )
}

export default CreatePost
