import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const FoodDetails = () => {
  const { id } = useParams()
  const [food, setFood] = useState<any>({})
  const { incrementQuantity } = useContext(StoreContext)
  const navigate = useNavigate()

  const handleAddToCart = () => {
    incrementQuantity(food.id)
    navigate('/cart')
  }

  const fetchFoodDetails = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/foods/${id}`)
      if (response.status === 200) {
        setFood(response.data)
      }
    } catch (error) {
      console.error('Error fetching food details:', error)
    }
  }

  useEffect(() => {
    fetchFoodDetails()
  }, [])

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 align-items-center">
          <div className="col-md-6">
            <img className="card-img-top mb-5 mb-md-0" src={food.imageUrl} alt="..." />
          </div>
          <div className="col-md-6">
            <div className="fs-5 mb-1">
              Category: <span className="badge text-bg-warning">{food.category}</span>
            </div>
            <h1 className="display-5 fw-bolder">{food.name}</h1>
            <div className="fs-5 mb-2">
              <span>₹{food.price}</span>
            </div>
            <p className="lead">{food.description}</p>
            <div className="d-flex">
              <button
                className="btn btn-outline-dark flex-shrink-0"
                type="button"
                onClick={handleAddToCart}>
                <i className="bi-cart-fill me-1"></i>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FoodDetails
