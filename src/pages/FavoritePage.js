import React from "react";
import FavoriteItems from '../components/FavoriteItems'
import '../components/App.css'
function FavoritePage(props) {
    const FavoriteList = props.items.map(items => (
        <FavoriteItems
            key={items.id}
            items={items}
            addCartItems={props.addCartItems}
            deleteCartItems={props.deleteCartItems}
            deleteFavoriteItems={props.deleteFavoriteItems}
            cartItems={props.cartItems}
        />

    ))
    return (
        <div className="items-body">
            <div className='topContent'>
                <h3>Faforites</h3>
            </div>
            {FavoriteList.length > 0 ? FavoriteList : <h3 className="empty-result"> You have not favorite products </h3>}
        </div>
    )
}
export default FavoritePage