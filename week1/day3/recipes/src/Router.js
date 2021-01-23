import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import Categories from "./pages/Categories"
import Category from "./pages/Category"
// Dummy components

// const Home = () => <h1>Home</h1>
// const Category = () => <h1>Category</h1>

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={Categories} path='/categories' />
        <Route component={Category} path='/:category' />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
