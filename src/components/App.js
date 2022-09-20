import React from 'react'
import './App.css';
import Cart from './Cart';
import Content from './Content';
import Navbar from './Navbar';

class App extends React.Component{
  constructor(props){
    super()
    this.showData = this.showData.bind(this)
    this.openCartHandler = this.openCartHandler.bind(this)
    this.closeCartHandler = this.closeCartHandler.bind(this)
    this.state = {
      isLoaded:false,
      data:[]
    }
  }
  get_data(){
    fetch('https://fakestoreapi.com/products')
      .then(res=>res.json())
      .then((result)=>{
        this.setState({
          isLoaded: true,
          data:result,
          cartStatus: false
        })
      })
    
  }
  componentDidMount(){
    this.get_data()
    console.log(this.props)
    
  }
  showData(){
    console.log(this.state.data)
  }
  openCartHandler(){
    this.setState({openCart:true})
  }
  closeCartHandler(){
    this.setState({openCart:false})
  }
  render(){
    const ContentList = this.state.data.map(data =>(
      <Content
      key = {data.id}
      items={data} />
    ))
    return(
      <div>
        {this.state.openCart && <Cart cartHandler={this.closeCartHandler}/>}
        <button onClick={this.showData}>show data</button>
        {this.state.isLoaded ? <h1>Ready</h1> :<h1>Loading</h1>}
        {/* <div className="col s12 m2"> */}
        
        <div className='cardsContent'>
        
          <Navbar cartHandler={this.openCartHandler}/>
          
          {ContentList}
          
        </div>
      </div>
      )
  }
}
export default App;
//Получилось выгрузить api в компонент