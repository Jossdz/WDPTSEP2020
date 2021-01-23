import { getCategories } from "../services/categories"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Categories = () => {
  const [categories, setCategories] = useState(null)
  useEffect(() => {
    async function getCategoriesfn() {
      const {
        data: { results }
      } = await getCategories()
      setCategories(results)
    }

    getCategoriesfn()
  }, [])

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories?.map((res, i) => (
          <li>
            <Link to={res.list_name_encoded}>{res.list_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories
