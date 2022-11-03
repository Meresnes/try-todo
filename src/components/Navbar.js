import React, { useEffect, useState } from "react";
import "./navbar.css"
import { Link } from "react-router-dom";


export default function Navbar(props) {
    const [cartSumm, setSumm] = useState(0)
    useEffect(() => {
        let itemsSumm = 0
        props.cartItems.forEach(item => {
            itemsSumm += item.price
        })
        setSumm(itemsSumm)

    }, [props.cartItems])
    return (
        <div className="navbar-content">
            <Link to='/try-todo'>
                <div className="logo-block">
                    <img src="./mylogo.png" width={75} height={75} alt="logo" />
                    <h4>Fake store</h4>
                </div>
            </Link>
            <div className="user-block">
                <img className="animated-logo"
                    src="./cart.png"
                    style={{ cursor: "pointer" }}
                    width={40} height={40}
                    onClick={props.cartHandler}
                    alt="cart" />
                <b>{cartSumm}$ </b>
                <Link to='/try-todo/favorite'>
                    <img className="animated-logo"
                        src="./favoriteLiked.svg"
                        style={{ cursor: "pointer" }}
                        width={40}
                        height={40}
                        alt="faforite" />
                </Link>
            </div>

        </div>

    )

}