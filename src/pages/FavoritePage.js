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
        />

    ))
    return (
        <div className="items-body">
            {FavoriteList.length > 0 ? FavoriteList : <h3 className="empty-result"> You have not favorite products </h3>}
        </div>
    )
}
export default FavoritePage