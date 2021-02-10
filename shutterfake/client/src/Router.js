import { BrowserRouter, Switch, Route } from "react-router-dom"
import LayoutApp from "./components/LayoutApp"

const Home = () => <h1>Home</h1>
const Signup = () => <h1>Signup</h1>
const Login = () => <h1>Login</h1>
const Profile = () => <h1>Profile</h1>

function Router() {
  return (
    <BrowserRouter>
      <LayoutApp>
        <Switch>
          <Route component={Home} path='/' exact />
          <Route component={Signup} path='/signup' />
          <Route component={Login} path='/login' />
          <Route component={Profile} path='/profile' />
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  )
}

export default Router
