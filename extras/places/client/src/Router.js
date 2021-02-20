import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from "./pages/Home"

// const Home = () => <h1>Home</h1>
const CreatePlace = () => <h1>Create place</h1>
const PlaceDetail = () => <h1>Place Detail</h1>

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/place/new' component={CreatePlace} />
        <Route path='/place/:placeId' component={PlaceDetail} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
