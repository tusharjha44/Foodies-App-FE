import React, { useState } from 'react'
import Header from '../../components/header/Header'
import ExploreMenu from '../../components/explore-menu/ExploreMenu'
import FoodDisplay from '../../components/food-display/FoodDisplay'

const Home = () => {
  const [category, setCategory] = useState('All')
  return (
    <main className="container">
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} searchText="" />
    </main>
  )
}

export default Home
