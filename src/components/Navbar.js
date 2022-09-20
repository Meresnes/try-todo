import React from "react";
import "./navbar.css"


export default class Navbar extends React.Component{
    render(){ 
        return(
            <div className="navbar-content">
                
                <div className="logo-block">
                    <img src="./mylogo.png" width={75} height={75} alt="logo" />
                    <h4>Fake store</h4>
                </div>
                <div className="user-block">
                    <img src="./cart.png" style={{cursor: "pointer"}}
                     width={40} height={40}
                     onClick={this.props.cartHandler}
                     alt="cart"  />      
                    <b>313$</b> 
                    <img src="./favorites.png" 
                        style={{cursor: "pointer"}}
                        width={40} 
                        height={40}
                        alt="cart" />
                </div>
                
            </div>
            
        )
    }
}