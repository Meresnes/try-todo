import React from 'react'
import './App.css';
import Cart from './Cart';
import Content from './Content';
import Navbar from './Navbar';

class App extends React.Component {
  constructor(props) {
    super()
    this.showData = this.showData.bind(this)
    // this.openCartHandler = this.openCartHandler.bind(this)
    // this.closeCartHandler = this.closeCartHandler.bind(this)
    this.cartHandler = this.cartHandler.bind(this)
    this.addCartItems = this.addCartItems.bind(this)
    this.deleteCartTtems = this.deleteCartTtems.bind(this)
    this.state = {
      isLoaded: false,
      data: [],
      cartItems: [],
      cartStatus: false
    }

  }

  get_data() {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          data: [...result].sort(),

        })
      })

  }
  componentDidMount() {
    this.get_data()

  }
  showData() {
    console.log(this.state.data[1])
  }
  // openCartHandler(){
  //   this.setState({openCart:true})
  // }
  // closeCartHandler(){
  //   this.setState({openCart:false})

  // }
  cartHandler() {
    this.setState({ openCart: !this.state.openCart })
  }

  addCartItems(value) {
    this.setState(() => {
      return { cartItems: [...this.state.cartItems, value] }
    })

  }
  deleteCartTtems(value) {
    const newItems = []
    this.state.cartItems.forEach(item => {
      if (item.id !== value) {
        newItems.push(item)
      }
    })

    this.setState(() => ({
      cartItems: [...newItems]
    }))
  }
  render() {
    const ContentList = this.state.data.map(data => (
      <Content
        key={data.id}
        items={data}
        addCartItems={this.addCartItems}
      />
    ))
    return (
      <div>
        {this.state.openCart ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll"}
        {this.state.openCart && <Cart key={''} cartHandler={this.cartHandler} cartItems={this.state.cartItems} deleteCartTtems={this.deleteCartTtems} />}
        <button onClick={this.showData}>show data</button>
        {this.state.isLoaded ? <h1>Ready</h1> : <h1>Loading</h1>}
        {/* <div className="col s12 m2"> */}

        <div className='cardsContent' >
          <Navbar cartHandler={this.cartHandler} cartItems={this.state.cartItems} />
          {ContentList}
        </div>
      </div>
    )
  }
}
export default App;
//Получилось выгрузить api в компонент