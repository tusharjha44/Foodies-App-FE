import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const CartPage: React.FC = () => {
  const { foodList, quantities, incrementQuantity, decrementQuantity, removeItem } =
    useContext(StoreContext)

  const cartItems = foodList.filter((item: any) => quantities[item.id] > 0)

  const subtotal = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * quantities[item.id],
    0,
  )

  const shipping = 20
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <h3 className="mb-4">Your Shopping Cart</h3>

          <div
            className="card p-3"
            style={{
              backgroundColor: '#f8f9fa',
              maxHeight: '80vh',
              overflowY: 'auto',
            }}>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item: any) => (
                <div className="card mb-3 p-2" key={item.id}>
                  <div className="row g-0 align-items-center">
                    <div className="col-md-3 text-center">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="img-fluid rounded"
                        style={{ maxHeight: '100px', objectFit: 'cover' }}
                      />
                    </div>

                    <div className="col-md-6">
                      <div className="card-body p-2">
                        <h5 className="card-title mb-1">{item.name}</h5>
                        <p className="card-text text-muted small">{item.description}</p>
                        <p className="card-text fw-bold">₹{item.price.toFixed(2)}</p>
                      </div>
                    </div>

                    <div className="col-md-3 d-flex flex-column align-items-center justify-content-center">
                      <div className="d-flex align-items-center mb-2">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => decrementQuantity(item.id)}>
                          <i className="bi bi-dash-circle"></i>
                        </button>
                        <span className="mx-2">{quantities[item.id]}</span>
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => incrementQuantity(item.id)}>
                          <i className="bi bi-plus-circle"></i>
                        </button>
                      </div>
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={() => removeItem(item.id)}>
                        <i className="bi bi-trash"></i> Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="mt-3 text-center">
            <Link to="/" className="btn btn-outline-primary">
              &larr; Continue your shopping
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <h3 className="mb-4">Order Summary</h3>
          <div className="card">
            <ul className="list-group list-group-flush">
              <li className="list-group-item d-flex justify-content-between">
                <span>Subtotal</span>
                <strong>₹{subtotal.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping</span>
                <strong>₹{shipping.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Tax (10%)</span>
                <strong>₹{tax.toFixed(2)}</strong>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Total</span>
                <strong>₹{total.toFixed(2)}</strong>
              </li>
            </ul>
            <div className="card-body">
              <Link to="/checkout" className="btn btn-primary w-100">
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
