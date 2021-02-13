import React, { useContext, useRef } from 'react'
import { NavLink, Link, withRouter } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./header.styles.css"
import { ReactComponent as Logo } from "../../assets/logo.svg"
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from "../cart-dropdown/cart-dropdown.component"
import { ShopProductsContext } from "../../context/shopProducts/shopProductsContext"
import { emptyCart } from "../../context/reducers/cart-reducer/cart-actions"
import API from "../../API"

function Header({ location }) {
    const { cartHidden, currentUser,setCurrentUser, dispatchCart } = useContext(ShopProductsContext);
    const toggleNavbar = useRef();
    const navbar = (e) => {
        toggleNavbar.current.classList.toggle("sidebar-open")
    }

    const handleSignout = () => {
        localStorage.removeItem("comfyHouse_jwt");
        setCurrentUser(null)
        emptyCart(dispatchCart)
        fetch(`${API}/signout`)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <nav className="container d-flex p-3 justify-content-between">
            <div className="navbar-logo">
                <Link to="/"><Logo/></Link>
            </div>
            <div className="burger-navbar" onClick={navbar}>
                <div className="navs">
                    <div className="burger">
                        <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" />
                        <label className="patty" htmlFor="menu-open">
                            <span className="hamburger"></span>
                        </label>
                    </div>
                    <div className="nav-menu" ref={toggleNavbar}>
                        <ul className="nav-list">
                        <li className="list-menu"><NavLink exact to="/" className="icon-link icon-2">Homepage</NavLink></li>
                        {
                            currentUser ? 
                            (<li onClick={handleSignout} className=" sign-out">SignOut</li>)
                            : 
                            (<li className="list-menu "><NavLink exact to={{ pathname: "/loginorsignup", state: { previousPath: location.pathname } }}  className="icon-link icon-2">SignUp</NavLink></li>)
                        }
                            
                        </ul>
                    </div>
                </div>
            </div>

            <ul className="nav-list-desktop d-flex links">
            {
                currentUser ? 
                (<li onClick={handleSignout} className="list-menu-desktop sign-out">SignOut</li>)
                : 
                (<li className="list-menu-desktop"><NavLink exact to={{ pathname: "/loginorsignup", state: { previousPath: location.pathname } }} className="icon-link icon-2">SignUp</NavLink></li>)
            }

                
                <li className="list-menu cart-icon-link">
                   <CartIcon />
                </li>
            </ul>
            {
                cartHidden ? null : <CartDropdown/>
            }
        </nav>
    )
}

export default withRouter(Header)