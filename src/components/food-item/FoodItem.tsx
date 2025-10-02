import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const FoodItem = ({ item }: { item: any }) => {
  const { incrementQuantity, decrementQuantity, quantities } = useContext(StoreContext)

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
      <div className="card" style={{ maxWidth: '320px' }}>
        <Link to={`food/${item.id}`}>
          <img src={item.imageUrl} className="card-img-top" alt="Product Image" />
        </Link>
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="h5 mb-0">₹{item.price}</span>
            <div>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-fill text-warning"></i>
              <i className="bi bi-star-half text-warning"></i>
              <small className="text-muted">(4.5)</small>
            </div>
          </div>
        </div>
        <div className="card-footer d-flex justify-content-between bg-light">
          <Link className="btn btn-primary btn-sm" to={`food/${item.id}`}>
            View Food
          </Link>
          {quantities[item.id] > 0 ? (
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-danger btn-sm" onClick={() => decrementQuantity(item.id)}>
                <i className="bi bi-dash-circle"></i>
              </button>
              <span className="mx-2">{quantities[item.id]}</span>
              <button className="btn btn-success btn-sm" onClick={() => incrementQuantity(item.id)}>
                <i className="bi bi-plus-circle"></i>
              </button>
            </div>
          ) : (
            <button className="btn btn-primary btn-sm" onClick={() => incrementQuantity(item.id)}>
              Add to Cart
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default FoodItem
