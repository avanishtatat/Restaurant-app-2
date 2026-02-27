import React, {createContext} from 'react'
import useFetch from '../custom-hooks/useFetch'

export const RestaurantContext = createContext()

const dishesApiUrl = 'https://apis.ccbp.in/restaurants-list-details'

const RestaurantProvider = ({children}) => {
  const {data, isLoading, error} = useFetch(dishesApiUrl)

  return (
    <RestaurantContext.Provider
      value={{
        data,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  )
}

export default RestaurantProvider
