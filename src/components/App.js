import React from 'react'
//import './App.css';
import Cart from './Cart';
import FavoritePage from '../pages/FavoritePage';
import Navbar from './Navbar';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import ProductPage from '../pages/ProductPage';

class App extends React.Component {
  constructor() {
    super()

    // this.openCartHandler = this.openCartHandler.bind(this)
    // this.closeCartHandler = this.closeCartHandler.bind(this)
    this.cartHandler = this.cartHandler.bind(this)
    this.addCartItems = this.addCartItems.bind(this)
    this.deleteCartItems = this.deleteCartItems.bind(this)
    this.addFavoriteItems = this.addFavoriteItems.bind(this)
    this.deleteFavoriteItems = this.deleteFavoriteItems.bind(this)
    this.clearCart = this.clearCart.bind(this)
    this.state = {
      isLoaded: false,
      data: [],
      cartItems: [],
      favoriteItems: [],
      cartStatus: false,
      searchValue: '',
    }

  }

  async get_data() {

    //Api is https://dummyjson.com/products
    await axios.get(process.env.REACT_APP_MOCKAPI_DATA).then((response) => {
      this.setState({
        isLoaded: true,
        data: [...response.data[0].products]
      })
      // console.log(response.data[0].products)
    })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

  }
  componentDidMount() {
    this.get_data()

  }

  clearCart() {
    this.setState({
      cartItems: []
    })
  }
  cartHandler() {
    this.setState({ openCart: !this.state.openCart })
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  addCartItems(value) {
    this.setState(() => ({
      cartItems: [...this.state.cartItems, value]
    }))

  }
  deleteCartItems(value) {
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
  addFavoriteItems(value) {
    try {

      // console.log(value)
      // await axios.post(`https://6336fe665327df4c43cdefe7.mockapi.io/favorite`, value)

      // axios.get('https://6336fe665327df4c43cdefe7.mockapi.io/favorite').then((response) => {
      this.setState({

        favoriteItems: [...this.state.favoriteItems, value]
      })

      // })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error);
      // })
      // .then(function () {
      //   // always executed
      // });

    } catch (error) {
      alert(error)
    }
  }
  deleteFavoriteItems(value) {
    try {

      let newItems = []
      newItems = this.state.favoriteItems.filter(item => (
        Number(item.id) !== Number(value.id)
      ))

      this.setState(() => ({
        favoriteItems: [...newItems]
      }))


    } catch (error) {
      alert(error)
    }
  }
  render() {

    return (
      <div>

        {this.state.openCart && <Cart cartHandler={this.cartHandler}
          cartItems={this.state.cartItems}
          deleteCartItems={this.deleteCartItems}
          clearCart={this.clearCart} />}

        {/* {this.state.isLoaded ? <h1>Ready</h1> : <h1>Loading</h1>} */}
        <div className='cardsContent'>


          <Navbar cartHandler={this.cartHandler} cartItems={this.state.cartItems} />

          <Routes>
            <Route exact path='/try-todo' element={<ProductPage
              data={this.state.data}
              addCartItems={this.addCartItems}
              addFavoriteItems={this.addFavoriteItems}
              deleteCartItems={this.deleteCartItems}
              deleteFavoriteItems={this.deleteFavoriteItems}
              cartItems={this.state.cartItems}
              favoriteItems={this.state.favoriteItems}
              loadedStatus={this.state.isLoaded} />} />

            <Route exact path='/try-todo/favorite' element={<FavoritePage
              items={this.state.favoriteItems}
              addCartItems={this.addCartItems}
              deleteCartItems={this.deleteCartItems}
              cartItems={this.state.cartItems}
              deleteFavoriteItems={this.deleteFavoriteItems} />} />
          </Routes>

        </div>
        <div style={{ display: 'none' }}>{this.state.openCart ? document.body.style.overflow = "hidden" : document.body.style.overflow = 'scroll'}</div>
      </div>
    )
  }
}
export default App;
