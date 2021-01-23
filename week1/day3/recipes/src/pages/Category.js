import { Typography } from "antd"
import { useState, useEffect } from "react"
import { getBooksByCategory } from "../services/categoryService"
import { Row, Skeleton } from "antd"
import BookCard from "../components/BookCard"
const { Title } = Typography

const Category = ({
  match: {
    params: { category }
  }
}) => {
  const [books, setBooks] = useState(null)

  useEffect(() => {
    getBooksByCategory(category)
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
    <div>
      <Title>{category.replaceAll("-", " ")}</Title>
      <Row gutter={[16, 16]}>
        {books.map(book => (
          <BookCard {...book} />
        ))}
      </Row>
    </div>
  ) : (
    <Skeleton active />
  )
}

export default Category
