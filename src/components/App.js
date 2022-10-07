import React from 'react'
import './App.css';
import Cart from './Cart';
import Content from './Content';
import Navbar from './Navbar';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom'
import FavoriteItems from './FavoritePage';

class App extends React.Component {
  constructor() {
    super()
    this.showData = this.showData.bind(this)
    // this.openCartHandler = this.openCartHandler.bind(this)
    // this.closeCartHandler = this.closeCartHandler.bind(this)
    this.cartHandler = this.cartHandler.bind(this)
    this.addCartItems = this.addCartItems.bind(this)
    this.deleteCartItems = this.deleteCartItems.bind(this)
    this.addFavoriteItems = this.addFavoriteItems.bind(this)
    this.deleteFavoriteItems = this.deleteFavoriteItems.bind(this)
    this.state = {
      isLoaded: false,
      data: [],
      cartItems: [],
      favoriteItems: [],
      cartStatus: false,
      searchValue: '',
    }

  }

  get_data() {
    // fetch('https://dummyjson.com/products')
    //   .then(res => res.json())
    //   .then((result) => {
    //     console.log(result)
    //     this.setState({
    //       isLoaded: true,
    //       data: [...result.products].sort(),

    //     })
    //   })

    //Api is https://dummyjson.com/products
    axios.get('https://6336fe665327df4c43cdefe7.mockapi.io/data').then((response) => {
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
  showData() {
    console.log(this.state.data)

    // axios.post('https://6336fe665327df4c43cdefe7.mockapi.io/products', this.state.data.map((item) => ({
    //   id: item.id,
    //   title: item.title,
    //   description: item.description,
    //   price: item.price,
    //   discountPercentage: item.discountPercentage,
    //   rating: item.rating,
    //   stock: item.stock,
    //   brand: item.brand,
    //   category: item.category,
    //   thumbnail: item.thumbnail,
    //   images: item.images
    // })))
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }
  // openCartHandler(){
  //   this.setState({openCart:true})
  // }
  // closeCartHandler(){
  //   this.setState({openCart:false})

  // }
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
    this.setState(() => ({
      favoriteItems: [...this.state.favoriteItems, value]
    }))

  }
  deleteFavoriteItems(value) {
    const newItems = []
    this.state.favoriteItems.forEach(item => {
      if (item.id !== value) {
        newItems.push(item)
      }
    })
    this.setState(() => ({
      favoriteItems: [...newItems]
    }))
  }
  render() {
    const ContentList = this.state.data.filter(data => data.title.toLowerCase().includes(this.state.searchValue.toLowerCase())).map(data => (
      <Content
        key={data.id}
        items={data}
        addCartItems={this.addCartItems}
        addFavoriteItems={this.addFavoriteItems}
        deleteCartItems={this.deleteCartItems}
        deleteFavoriteItems={this.deleteFavoriteItems}
        cartItems={this.state.cartItems}
        favoriteItems={this.state.favoriteItems}
      />
    ))
    const FavoriteList = this.state.favoriteItems.map(items => (
      <FavoriteItems
        key={items.id}
        items={items}
        addCartItems={this.addCartItems}
        deleteCartItems={this.deleteCartItems}
        deleteFavoriteItems={this.deleteFavoriteItems}
      />

    ))
    return (
      <div>
        {this.state.openCart ? document.body.style.overflowY = "hidden" : document.body.style.overflowY = "scroll"}
        {this.state.openCart && <Cart cartHandler={this.cartHandler} cartItems={this.state.cartItems} deleteCartItems={this.deleteCartItems} />}
        <button onClick={this.showData}>show data</button>
        {this.state.isLoaded ? <h1>Ready</h1> : <h1>Loading</h1>}

        <div className='cardsContent' >

          <Navbar cartHandler={this.cartHandler} cartItems={this.state.cartItems} />

          <div className='topContent'>
            <h3>All Products</h3>
            <div className="input-field">
              <input id="search" type="text" onChange={event => this.setState({ searchValue: event.target.value })} value={this.state.searchValue} placeholder='Search...' />
            </div>

          </div>
          <Routes>
            <Route exact path='/' element={ContentList} />
            <Route exact path='/favorite' element={FavoriteList} />
          </Routes>

        </div>

      </div>
    )
  }
}
export default App;
