import React, { useEffect, useState } from "react";
import "./navbar.css"


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

            <div className="logo-block">
                <img src="./mylogo.png" width={75} height={75} alt="logo" />
                <h4>Fake store</h4>
            </div>
            <div className="user-block">
                <img src="./cart.png" style={{ cursor: "pointer" }}
                    width={40} height={40}
                    onClick={props.cartHandler}
                    alt="cart" />
                <b>{cartSumm}$</b>
                <img src="./favorites.png"
                    style={{ cursor: "pointer" }}
                    width={40}
                    height={40}
                    alt="cart" />
            </div>

        </div>

    )

}