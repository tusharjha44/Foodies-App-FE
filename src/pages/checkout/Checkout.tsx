import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Checkout = () => {
  const { foodList, quantities } = useContext(StoreContext)
  const cartItems = foodList.filter((item: any) => quantities[item.id] > 0)

  const subtotal = cartItems.reduce(
    (acc: number, item: any) => acc + item.price * quantities[item.id],
    0,
  )
  const shipping = 10
  const tax = subtotal * 0.1
  const total = subtotal + shipping + tax
  const totalItemsInCart: number = Object.values(quantities).filter((qty: any) => qty > 0).length

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-8">
          <h4 className="mb-4 fw-bold">Billing address</h4>
          <form>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label">First name</label>
                <input type="text" className="form-control" placeholder="John" />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label">Last name</label>
                <input type="text" className="form-control" placeholder="Doe" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <div className="input-group">
                <span className="input-group-text">@</span>
                <input type="email" className="form-control" placeholder="Email" />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input type="tel" className="form-control" placeholder="9876543210" />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <input type="text" className="form-control" placeholder="1234 Main St" />
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label className="form-label">Country</label>
                <select className="form-select">
                  <option>Choose...</option>
                  <option>India</option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">State</label>
                <select className="form-select">
                  <option>Choose...</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                  <option>Karnataka</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <label className="form-label">Zip</label>
                <input type="text" className="form-control" placeholder="98745" />
              </div>
            </div>

            <button
              disabled={totalItemsInCart === 0}
              type="submit"
              className="btn btn-primary w-100">
              Continue to checkout
            </button>
          </form>
        </div>

        <div className="col-md-4 mt-2">
          <h4 className="d-flex justify-content-between align-items-center">
            <span className="text-primary">Your cart</span>
            <span className="badge bg-primary rounded-pill">{totalItemsInCart}</span>
          </h4>
          <div className="card">
            <ul className="list-group list-group-flush">
              {cartItems.map((item: any) => (
                <li
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-start">
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    <small className="text-muted">Qty: {quantities[item.id]}</small>
                  </div>
                  <span>₹{(item.price * quantities[item.id]).toFixed(2)}</span>
                </li>
              ))}

              <li className="list-group-item d-flex justify-content-between">
                <span>Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between">
                <span>Tax (10%)</span>
                <span>₹{tax.toFixed(2)}</span>
              </li>
              <li className="list-group-item d-flex justify-content-between fw-bold">
                <span>Total (INR)</span>
                <span>₹{total.toFixed(2)}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
