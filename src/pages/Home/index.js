import Loader from 'react-loader-spinner'
import {Component} from 'react'
import Navbar from '../../components/Navbar'
import Menu from '../../components/Menu'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiData: [],
    apiStatus: apiStatusConstants.initial,
    activeId: '',
  }

  componentDidMount() {
    this.getRestaurantData()
    console.log('Component Did Mount Called')
  }

  getRestaurantData = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    try {
      const response = await fetch(
        'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
      )
      if (response.ok) {
        const data = await response.json()
        const formattedData = [
          {
            restaurantId: data[0].restaurant_id,
            restaurantName: data[0].restaurant_name,
            tableMenuList: data[0].table_menu_list.map(eachMenu => ({
              menuCategory: eachMenu.menu_category,
              menuCategoryId: eachMenu.menu_category_id,
              categoryDishes: eachMenu.category_dishes.map(eachDish => ({
                dishId: eachDish.dish_id,
                dishName: eachDish.dish_name,
                dishPrice: eachDish.dish_price,
                dishImage: eachDish.dish_image,
                dishCurrency: eachDish.dish_currency,
                dishCalories: eachDish.dish_calories,
                dishDescription: eachDish.dish_description,
                dishAvailability: eachDish.dish_Availability,
                dishType: eachDish.dish_Type,
                addOn: eachDish.addonCat,
              })),
            })),
          },
        ]
        this.setState({
          apiData: formattedData,
          apiStatus: apiStatusConstants.success,
          activeId: formattedData[0].tableMenuList[0].menuCategoryId,
        })
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    } catch (error) {
      console.log('Api Fail:', error)
    }
  }

  renderLoadingView = () => (
    <div className="react-loader-container">
      <Loader type="Circles" color="#00BFFF" height={80} width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="react-loader-container">
      <p>Failed to Load page</p>
      <button type="button" onClick={() => this.getRestaurantData()}>
        Retry
      </button>
    </div>
  )

  changeActiveId = id => {
    this.setState({activeId: id})
  }

  renderSuccessView = () => {
    const {apiData, activeId} = this.state
    const {tableMenuList} = apiData[0]
    return (
      <Menu
        tableMenuList={tableMenuList}
        activeId={activeId}
        changeActiveId={this.changeActiveId}
      />
    )
  }

  renderHomePage = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.success:
        return this.renderSuccessView()
      default:
        return null
    }
  }

  render() {
    const {apiData} = this.state

    console.log('Restaurant Name =>', apiData)
    return (
      <>
        <Navbar restaurantName="UNI Resto Cafe" />
        {this.renderHomePage()}
      </>
    )
  }
}

export default Home
