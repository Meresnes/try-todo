import React from "react"
import './Content.css'
function Content(props) {
    // const { cartAdded, setCartAdded } = useState(false)
    // useEffect(() => {
    //     console.log('sada')
    //     const isInCart = (props.cartItems.includes(props.items))

    // }, [props.items])

    const addCartStatus = () => {
        const isInCart = (props.cartItems.includes(props.items))
        isInCart ? props.deleteCartItems(props.items.id) : props.addCartItems(props.items)
        //console.log(this.state.cartAdded)
        //this.setState({ cartAdded: !this.state.cartAdded })
    }
    // const addFavoriteStatus = () => {
    //     const isInFavorites = (props.favoriteItems.includes(props.items))
    //     isInFavorites ? props.deleteFavoriteItems(props.items.id) : props.addFavoriteItems(props.items)

    // }

    return (

        // <div className="marketCard">
        //     <p>{this.props.items.title}</p>
        //     <img className="imgCard" src={this.props.items.image} alt={this.props.items.title} width={'100%'}/>
        //     <div className="cardFooter">
        //         <p className="price">{this.props.items.price}$</p>
        //         <p className="rating">★{this.props.items.rating.rate}</p>
        //     </div>

        // </div>
        // <div className="row">
        // <div className="col s12 m3">
        <div className="card center hoverable">
            <div className="card-favorite">

                {/* {props.favoriteItems.includes(props.items) && console.log(props.favoriteItems[Number(props.items.id)])} */}
                {/* <img className={`${props.favoriteItems.includes(props.items.id) ? '' : 'hide'}`} onClick={() => props.deleteFavoriteItems(props.items)} src="/favoriteLiked.svg" alt="favorite" />
                <img className={`${props.favoriteItems.includes(props.items.id) ? 'hide' : ''}`} onClick={() => props.addFavoriteItems(props.items)} src="/favorite.svg" alt="favorite" /> */}
                {props.favoriteItems.find(el => el.title === props.items.title) ? <img onClick={() => props.deleteFavoriteItems(props.items)} src="./favoriteLiked.png" alt="favorite" /> : <img onClick={() => props.addFavoriteItems(props.items)} src="./favorite.png" alt="favorite" />}
            </div>
            <div className="card-image">

                <img src={props.items.images[0]} alt={props.items.title} />
            </div>
            <div className="card-body">

                <p className="flow-text">{props.items.title}</p>
            </div>
            <div className="cart-footer">
                <ul>
                    <li className="price-label">Price:</li>
                    <li className="price-value">{props.items.price}$</li>
                </ul>
                <svg
                    onClick={addCartStatus}
                    className={`${props.cartItems.includes(props.items) ? 'hide' : 'cart-btn'}`}
                    width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#F2F2F2" />
                    <path d="M20.6653 15.1312H17.2021V11.6682C17.2021 10.3328 15.1311 10.3328 15.1311 11.6682V15.1312H11.668C10.3329 15.1312 10.3329 17.2022 11.668 17.2022H15.1311V20.6652C15.1311 22.0005 17.2021 22.0005 17.2021 20.6652V17.2022H20.6653C22.0005 17.2022 22.0005 15.1312 20.6653 15.1312Z" fill="#D3D3D3" />
                </svg>
                <svg
                    onClick={addCartStatus}
                    className={`cart-btn ${props.cartItems.includes(props.items) ? 'show' : 'hide'}`}
                    width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="8" fill="url(#paint0_linear_60_200)" />
                    <g clipPath="url(#clip0_60_200)">
                        <g filter="url(#filter0_d_60_200)">
                            <path d="M19.6567 11.6207C19.8394 11.4363 20.0876 11.3318 20.3471 11.3299C20.6066 11.3279 20.8563 11.4288 21.0416 11.6105C21.227 11.7921 21.3329 12.0398 21.3362 12.2993C21.3395 12.5588 21.24 12.809 21.0594 12.9954L15.8327 19.5294C15.7429 19.626 15.6346 19.7036 15.5141 19.7575C15.3937 19.8114 15.2636 19.8404 15.1317 19.8429C14.9998 19.8454 14.8687 19.8213 14.7463 19.772C14.6239 19.7227 14.5127 19.6492 14.4194 19.556L10.954 16.092C10.7699 15.9078 10.6665 15.6579 10.6665 15.3975C10.6666 15.137 10.7701 14.8872 10.9544 14.703C11.1386 14.5189 11.3885 14.4155 11.6489 14.4155C11.9094 14.4156 12.1592 14.5191 12.3434 14.7034L15.084 17.4447L19.6307 11.6514C19.639 11.6408 19.6479 11.6308 19.6574 11.6214L19.6567 11.6207Z" fill="white" />
                        </g>
                    </g>
                    <defs>
                        <filter id="filter0_d_60_200" x="10.6665" y="11.3298" width="10.6698" height="10.5132" filterUnits="userSpaceOnUse">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="2" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_200" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_200" result="shape" />
                        </filter>
                        <clipPath id="clip0_60_200">
                            <rect width="10.6667" height="10.6667" fill="white" transform="translate(10.6667 10.6667)" />
                        </clipPath>
                    </defs>
                </svg>



            </div>

        </div>
        // </div>
        // </div>
        // {this.state.isTrue && 
        //     <div>
        //         <p className="moreInfoText">{this.props.items.description}</p>
        //     </div>
        //      }
    )
}

export default Content