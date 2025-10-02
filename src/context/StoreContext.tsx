import axios from 'axios'
import { createContext, useEffect, useState } from 'react'

export const StoreContext = createContext(null as any)

export const StoreContextProvider = (props: any) => {
  const [foodList, setFoodList] = useState([])
  const [quantities, setQuantities] = useState({})

  const incrementQuantity = (id: string) => {
    setQuantities((prevQuantities: any) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }))
  }

  const decrementQuantity = (id: string) => {
    setQuantities((prevQuantities: any) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0,
    }))
  }

  const removeItem = (id: number) => {
    setQuantities((prev: any) => {
      const newQuantities = { ...prev }
      delete newQuantities[id]
      return newQuantities
    })
  }

  const fetchFoodList = async () => {
    const response = await axios.get('http://localhost:8080/api/foods')
    const data = await response.data
    setFoodList(data)
  }

  useEffect(() => {
    async function loadData() {
      await fetchFoodList()
    }
    loadData()
  }, [])

  const contextValue = {
    foodList,
    incrementQuantity,
    decrementQuantity,
    quantities,
    removeItem,
  }

  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>
}
