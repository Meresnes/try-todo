import React from "react"
import '../components/App.css'
import Content from "../components/Content"
function ProductPage(props) {
    const [searchValue, setSearchValue] = React.useState('')
    const ContentList = props.data.filter(data => data.title.toLowerCase().includes(searchValue.toLowerCase())).map(data => (
        <Content
            key={data.id}
            items={data}
            addCartItems={props.addCartItems}
            addFavoriteItems={props.addFavoriteItems}
            deleteCartItems={props.deleteCartItems}
            deleteFavoriteItems={props.deleteFavoriteItems}
            cartItems={props.cartItems}
            favoriteItems={props.favoriteItems}
        />
    ))
    return (

        <div className="page-body">

            <div className='topContent'>
                <h3>All Products</h3>
                <div className="input-field">
                    <input id="search" type="text" onChange={event => setSearchValue(event.target.value)} value={searchValue} placeholder='Search...' />
                </div>
            </div>
            <div className="items-body" >
                {ContentList.length > 0 ? ContentList : <h3>No results</h3>}
            </div>
        </div>
    )
}

export default ProductPage