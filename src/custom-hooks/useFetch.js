import {useEffect, useState} from 'react'

const useFetch = url => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const jsonData = await response.json()

        setData(jsonData)
        setError(null)
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()
  }, [url])

  return {data, isLoading, error}
}

export default useFetch
