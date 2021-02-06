import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LayoutApp from './components/LayoutApp'
import Auth from './pages/Auth'
import Profile from './pages/Profile'

const Home = () => <h1>Home</h1>
// const Auth = () => <h1>Auth</h1>
// const Profile = () => <h1>Profile</h1>

const Router = () => {
  return (
    <BrowserRouter>
      <LayoutApp>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/auth' component={Auth} exact />
          <Route path='/profile' component={Profile} exact />
        </Switch>
      </LayoutApp>
    </BrowserRouter>
  )
}

export default Router
