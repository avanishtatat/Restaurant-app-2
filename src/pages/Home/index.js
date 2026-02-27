import Loader from 'react-loader-spinner'
import {useContext} from 'react'
import {RestaurantContext} from '../../context/RestaurantContext'
import Navbar from '../../components/Navbar'
import Menu from '../../components/Menu'
import './index.css'

const Home = () => {
  const {data, isLoading, error} = useContext(RestaurantContext)

  const menuList = data?.[0]?.table_menu_list || []

  if (isLoading) {
    return (
      <div className="react-loader-container">
        <Loader type="Circles" color="#00BFFF" height={80} width={80} />
      </div>
    )
  }

  if (error) {
    return (
      <div className="react-loader-container">
        <p>{error}</p>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <Menu menuList={menuList} />
    </>
  )
}

export default Home
