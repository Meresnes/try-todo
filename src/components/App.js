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
    this.state = {
      isLoaded: false,
      data: [],
      cartItems: []
    }

  }
  get_data() {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(res => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          data: [...result].sort(),
          cartStatus: false
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
    console.log(this.state.cartItems)


  }
  render() {
    const ContentList = this.state.data.map(data => (
      <Content
        key={data.id}
        items={data}
        addCartItems={this.addCartItems} />
    ))
    return (
      <div>
        {this.state.openCart && <Cart cartHandler={this.cartHandler} cartItems={this.state.cartItems} />}
        <button onClick={this.showData}>show data</button>
        {this.state.isLoaded ? <h1>Ready</h1> : <h1>Loading</h1>}
        {/* <div className="col s12 m2"> */}

        <div className='cardsContent'>

          <Navbar cartHandler={this.cartHandler} />

          {ContentList}

        </div>
      </div>
    )
  }
}
export default App;
//Получилось выгрузить api в компонент