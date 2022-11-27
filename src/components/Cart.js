import "./Cart.css"
import emailjs from '@emailjs/browser';
import axios from "axios";
import CartItems from "./CartItems";
import React, { useState, useEffect } from "react";

import SadIcon from "../img/sad_icon.png"

export default function Cart(props) {
    const cartFooterStyle = {
        visibility: 'hidden'
    }
    const [cartSumm, setSumm] = useState(0)
    useEffect(() => {

        let itemsSumm = 0
        props.cartItems.forEach(item => {
            itemsSumm += item.price
        })
        setSumm(itemsSumm)

    }, [props.cartItems])
    const [userEmail, setUserEmail] = useState('')
    const [disable, setDisable] = useState(false)
    const orderHandler = async () => {
        try {
            setDisable(true)
            if (cartSumm) {
                if (userEmail) {
                    const orderData = props.cartItems.map(item => ({
                        product_id: item.id,
                        title: item.title,
                        price: item.price,
                        customerEmail: userEmail
                    }))
                    const orderCostumerData = props.cartItems.map((item, index) => (
                        [`\n${index + 1}) ${item.title}: ${item.price}$`]
                    ))

                    // orderCostumerData.push([`\nTotal price: ${cartSumm}$ \n`])
                    const templateParams = {
                        message: String(orderCostumerData),
                        user_mail: userEmail,
                        total: `Your total sum : ${cartSumm}`
                    }
                    emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, templateParams, process.env.REACT_APP_PUBLIC_KEY)
                        .then(function (response) {
                            console.log('SUCCESS!', response.status, response.text);
                        }, function (error) {
                            console.log('FAILED...', error);
                        });
                    orderData.push({ total_summ: cartSumm })
                    console.log(orderData)
                    await axios.post(process.env.REACT_APP_MOCKAPI_ORDERS, orderData)
                    alert('You order has been recived!')

                    props.clearCart()
                    props.cartHandler()
                } else {
                    alert('Your Email field is empty')
                }

            } else {
                alert('Your cart is empty')
            }
            setDisable(false)

        } catch (error) {
            alert(error)
        }
    }
    const cartList = props.cartItems.map((data, index) => (
        <CartItems key={index} items={data} deleteCartItems={props.deleteCartItems} />
    ))
    props.cartItems.length === 0 ? cartFooterStyle.visibility = 'hidden' : cartFooterStyle.visibility = 'visible'
    return (
        <div className="wrapper">
            <div className="catr-bg"></div>
            <div className="cart-right-menu">
                <div className="cart-header">
                    <h3>Cart</h3>
                    <svg
                        className="close-btn"
                        onClick={props.cartHandler}
                        width="32" height="32"
                        viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                    </svg>
                </div>
                <div className="cart-body">
                    {cartList.length > 0 ? cartList : <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-around",

                    }}><h2 style={{ margin: "0 auto 30px 20px" }}> Your cart is empty</h2><br /> <img style={{ margin: "auto" }} src={SadIcon} alt="sad" width={'100px'} height={'100px'} /></div>}
                </div>

                <div className="cart-footer" style={cartFooterStyle}>
                    <div className="total-price">
                        <p>Total Amount: </p> <p> {cartSumm} $</p>
                    </div>
                    <div className="customer-data">
                        <form >
                            <label>Enter your email:</label>
                            <input type="email" disabled={disable} placeholder="absdefg@mymail.cock" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} />
                        </form>
                    </div>
                    <button disabled={disable} onClick={orderHandler}>Place an order </button>

                </div>
            </div>
        </div>

    )
}
