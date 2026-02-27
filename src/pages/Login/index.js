import {useState} from 'react'
import Cookies from 'js-cookie'
import './index.css'

const Login = ({history}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSignIn = async e => {
    e.preventDefault()
    setIsLoading(true)
    const options = {
      method: 'POST',
      body: JSON.stringify({username, password}),
    }
    try {
      const response = await fetch('https://apis.ccbp.in/login', options)
      const data = await response.json()
      if (response.ok) {
        const jwtToken = data.jwt_token
        Cookies.set('jwt_token', jwtToken, {expires: 7})
        history.replace('/')
      } else {
        setError(data.error_msg)
      }
    } catch (err) {
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="cafe-name">Welcome to UNI Resto Cafe</h1>
        <form onSubmit={handleSignIn}>
          <div className="input-container">
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              id="username"
              value={username}
              type="text"
              className="input"
              onChange={e => setUsername(e.target.value)}
              placeholder="Enter Username"
            />
          </div>
          <div className="input-container">
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              id="password"
              value={password}
              type="password"
              className="input"
              onChange={e => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>
          <div className="login-button-container">
            <button type="submit" className="sign-in-button">
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
