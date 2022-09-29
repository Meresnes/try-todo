import { Component } from 'react'
export default class CartItems extends Component {

    render() {
        const cardStyles = {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
            borderTop: "1px solid #ececec",

            margin: "0 45px 15px 0 ",
            paddingLeft: "30px",
            overflow: "hidden",
            width: "100%",


        }
        return (
            <div className="card center">
                <div className="card-title ">
                    <p className="flow-text">{this.props.items.title}</p>

                </div>
                <div className="card-image">
                    <img src={this.props.items.images[0]} alt={this.props.items.title} />
                </div>
                <div className="card-content" style={cardStyles}>
                    <p>{this.props.items.price}$ </p>
                    <svg
                        onClick={() => this.props.deleteCartItems(this.props.items.id)}
                        width="32" height="32"
                        viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        style={{ cursor: "pointer" }}>
                        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                        <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                    </svg>

                </div>

            </div>
        )
    }
}
