import { getBooks } from "../services"
import { useEffect, useState } from "react"
import BookCard from "../components/BookCard"
import { Row } from "antd"

const Home = () => {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    getBooks()
      .then(
        ({
          data: {
            results: { books }
          }
        }) => {
          setBooks(books)
        }
      )
      .catch(err => {
        console.error(err)
      })
  }, [])

  return books ? (
    <>
      <h1>Books</h1>
      <Row gutter={[16, 16]}>
        {books.map(book => (
          <BookCard {...book} />
        ))}
      </Row>
    </>
  ) : (
    <h2>Loading...</h2>
  )
}

export default Home
