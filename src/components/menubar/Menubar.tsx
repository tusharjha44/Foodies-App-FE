import React, { useState, useContext } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { assets } from '../../assets'
import { StoreContext } from '../../context/StoreContext'

const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { quantities } = useContext(StoreContext)
  const location = useLocation()
  const navigate = useNavigate()

  const toggleMenu = () => setIsOpen(!isOpen)
  const totalItemsInCart: number = Object.values(quantities).filter((qty: any) => qty > 0).length

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container">
        <Link to="/">
          <img src={assets.logo} height={64} width={64} className="mx-2" />
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li
              className={`nav-item ${location.pathname === '/' ? 'nav-link fw-bold' : 'nav-link'}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li
              className={`nav-item ${location.pathname === '/explore' ? 'nav-link fw-bold' : 'nav-link'}`}>
              <Link className="nav-link" to="/explore">
                Explore
              </Link>
            </li>
            <li
              className={`nav-item ${location.pathname === '/contact' ? 'nav-link fw-bold' : 'nav-link'}`}>
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-4">
            <Link to="/cart">
              <div className="position-relative me-2">
                <img src={assets.cart} height={64} width={64} className="position-relative" />
                {totalItemsInCart > 0 && (
                  <span className="position-absolute top-40 start-50 badge rounded-pill bg-danger">
                    {totalItemsInCart}
                  </span>
                )}
              </div>
            </Link>
            <button className="btn btn-outline-primary" onClick={() => navigate('/login')}>
              Login
            </button>
            <button className="btn btn-outline-success" onClick={() => navigate('/register')}>
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Menubar
