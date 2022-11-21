import React from "react"
import '../components/App.css'
import '../components/Content'

import Content from "../components/Content"
import ContentLoader from "react-content-loader"

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

    const skeleton = [...Array(10)].map((index) => (
        <div className="card center hoverable">
            <ContentLoader
                key={index}
                speed={2}
                width={310}
                height={420}
                viewBox="0 0 310 420"
                backgroundColor="#f5f5f5"
                foregroundColor="#fafafa"
                {...props}
            >
                <rect x="88" y="68" rx="20" ry="20" width="150" height="142" />
                <rect x="27" y="11" rx="11" ry="11" width="34" height="38" />
                <rect x="96" y="251" rx="0" ry="0" width="129" height="17" />
                <rect x="130" y="314" rx="0" ry="0" width="49" height="35" />
                <rect x="140" y="379" rx="11" ry="11" width="29" height="29" />

            </ContentLoader></div>))


    return (

        <div className="page-body">

            <div className='topContent'>
                <h3>All Products</h3>
                <div className="input-field">
                    <input id="search" type="text" onChange={event => setSearchValue(event.target.value)} value={searchValue} placeholder='Search...' />
                </div>
            </div>
            <div className="items-body" >
                {props.loadedStatus && ContentList}
                {!props.loadedStatus && skeleton
                }

            </div>
        </div>
    )
}

export default ProductPage