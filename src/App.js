import {Switch, Route} from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Cart from './pages/Cart'
import ProtectedRoutes from './components/ProtectedRoutes'
import './App.css'

// write your code here

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoutes exact path="/" component={Home} />
    <ProtectedRoutes exact path="/cart" component={Cart} />
  </Switch>
)

export default App
