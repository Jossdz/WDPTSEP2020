import { Card, Col } from "antd"

const { Meta } = Card

const BookCard = ({ book_image, author, title, description, buy_links }) => {
  return (
    <Col sx={24} md={12} lg={6}>
      <Card
        style={{ minHeight: "800px" }}
        cover={
          <img
            style={{ height: "500px", objectFit: "cover" }}
            src={book_image}
            alt={`${title}-image`}
          />
        }
      >
        <Meta title={`${title} - ${author}`} description={description} />
        <ul>
          {buy_links.map((link, i) => (
            <li key={i}>
              <a target='_blank' href={link.url}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </Col>
  )
}

export default BookCard
