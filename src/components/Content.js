import React from "react"
import './Content.css'
class Content extends React.Component{
    constructor(){
        super()
        this.showMoreHandler = this.showMoreHandler.bind(this)
        this.state = {
            isTrue:false,
            
        }
        
        this.showMoreHandler = this.showMoreHandler.bind(this)
        
    }
    showMoreHandler(){
        this.state.isTrue ? this.setState({isTrue:false}): this.setState({isTrue:true})
        // console.log(this.state.isTrue)
    }
    
    render(){
        
    return(
        
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
            <div className="card-title ">
                <p className="flow-text">{this.props.items.title}</p>
            </div>
            <div className="card-image">
                
                <img src={this.props.items.image} alt={this.props.items.title}/>
            </div>
            <div className="card-content">
                <p>{this.props.items.price}$ ★{this.props.items.rating.rate}</p>
            </div>
            <div className="card-action small">
                <button className="lighten-3 text-darken-2 hoverable flow-text"
                onClick={this.showMoreHandler}><p>Show more details</p></button>
                
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
}
export default Content