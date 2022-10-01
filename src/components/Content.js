import React from "react"
import './Content.css'
function Content(props) {
    // const { cartAdded, setCartAdded } = useState(false)
    // useEffect(() => {
    //     console.log('sada')
    //     const isInCart = (props.cartItems.includes(props.items))

    // }, [props.items])

    function addCartStatus() {
        const isInCart = (props.cartItems.includes(props.items))
        isInCart ? props.deleteCartItems(props.items.id) : props.addCartItems(props.items)
        //console.log(this.state.cartAdded)
        //this.setState({ cartAdded: !this.state.cartAdded })
    }

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
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="29" height="29" rx="6.5" fill="white" stroke="#F8F8F8" />
                    <path d="M19.936 10.5341L19.9356 10.5337C19.6035 10.2108 19.2118 9.9539 18.7817 9.77731L18.781 9.77704C18.3348 9.59311 17.856 9.49891 17.3725 9.50001L17.3714 9.50001C16.6917 9.50001 16.0296 9.68466 15.4551 10.0325L15.455 10.0325C15.3176 10.1157 15.1874 10.2068 15.0643 10.3059L14.7508 10.5582L14.4373 10.3059C14.3142 10.2068 14.184 10.1157 14.0465 10.0325L14.0465 10.0325C13.4719 9.68466 12.8099 9.50001 12.1302 9.50001C11.6398 9.50001 11.1671 9.59299 10.7205 9.77705L10.72 9.77727C10.2882 9.95465 9.89974 10.2094 9.56579 10.5339L9.56511 10.5346L9.56511 10.5346C9.23393 10.8552 8.96959 11.2369 8.78688 11.6581L19.936 10.5341ZM19.936 10.5341C20.267 10.8553 20.5315 11.2373 20.7148 11.6585C20.9048 12.0967 21.0014 12.5602 21 13.0377V13.0392C21 13.4865 20.9079 13.9636 20.7162 14.461L20.7158 14.4622C20.557 14.8772 20.3218 15.3178 20.0153 15.7718C19.5302 16.4894 18.854 17.2509 17.9995 18.0336C16.5792 19.3337 15.1726 20.232 15.1216 20.2645L15.1215 20.2646L14.7521 20.4996L14.7521 20.4996L14.7517 20.4998L14.75 20.5L14.7483 20.4998L14.7479 20.4996L14.7479 20.4996L14.3785 20.2646L14.3786 20.2645L14.3707 20.2597C14.3709 20.2598 14.3707 20.2597 14.3702 20.2594C14.3685 20.2583 14.3628 20.2547 14.3522 20.248C14.3394 20.2398 14.3214 20.2282 14.2985 20.2133C14.2529 20.1835 14.1884 20.1409 14.1077 20.0864C13.9463 19.9774 13.7208 19.8211 13.4524 19.625C12.9146 19.2322 12.2084 18.6823 11.5007 18.0338L11.5006 18.0338M19.936 10.5341L11.5006 18.0338M11.5006 18.0338C10.6462 17.2511 9.96994 16.4896 9.48483 15.7721C9.17889 15.3189 8.94468 14.8778 8.78377 14.461C8.59204 13.9636 8.5 13.4865 8.5 13.0392C8.5 12.5605 8.59679 12.0964 8.78686 11.6581L11.5006 18.0338Z" stroke="#ECECEC" />
                </svg>

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