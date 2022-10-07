import { Component } from "react";

export default class FavoritePage extends Component {
    render() {
        return (
            <div className="card center hoverable">
                <div className="card-favorite">

                </div>
                <div className="card-image">

                    <img src={this.props.items.images[0]} alt={this.props.items.title} />
                </div>
                <div className="card-body">

                    <p className="flow-text">{this.props.items.title}</p>
                </div>
                <div className="cart-footer">
                    <ul>
                        <li className="price-label">Price:</li>
                        <li className="price-value">{this.props.items.price}$</li>
                    </ul>



                </div>

            </div>
        )
    }
}