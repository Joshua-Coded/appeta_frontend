import "./index.css";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
    const navigate = useNavigate();
    const [menu, setMenu] = useState('home');

    const logOut = () => {
        localStorage.removeItem("token");
        setToken("");
        navigate("/");
    }

    const { getTotalCartAmt, token, setToken } = useContext(StoreContext);

    return (
        <div className='navbar'>
            <Link to="/"> <img src={assets.logo} alt='logo' className='logo' /></Link>
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt='' className='' />
                <div className='search-navbar-icon'>
                    <Link to="/cart"><img src={assets.basket_icon} alt='' /></Link>
                    <div className={getTotalCartAmt() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? (
                    <button onClick={() => setShowLogin(true)}>Sign In</button>
                ) : (
                    <div className="navbar-profile">
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate("/myorders")}>
                                <img src={assets.bag_icon} alt="" />
                                <p>Orders</p>
                            </li>
                            <hr />
                            <li onClick={logOut}>
                                <img src={assets.logout_icon} alt="" />
                                <p>Logout</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar;
