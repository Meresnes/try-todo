import { Component } from 'react'

export default class CartItems extends Component {
    render() {
        return (
            <div className="card center">
                <div className="card-title ">
                    <p className="flow-text">{this.props.items.title}</p>
                </div>
                <div className="card-image">
                    <img src={this.props.items.images[0]} alt={this.props.items.title} />
                </div>
                <div className="card-content">
                    <p>{this.props.items.price}$ </p>
                </div>
                <div className="card-action">
                    <p>cartAction</p>
                </div>
            </div>
        )
    }
}
