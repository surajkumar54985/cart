import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'watch',
                qty: 2,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
                id: 1
            },
            {
                price: 999,
                title: 'Mobile',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=359&q=80',
                id: 2
            },
            {
                price: 99999,
                title: 'Laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1515343480029-43cdfe6b6aae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
                id: 4
            }
        ]
    }
}
handleIncreaseQuantity = (product) => {
    console.log('Hey Please increase qty of : ' , product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty+=1;
    this.setState({
        products: products
    })
}
handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0)
    {
        return;
    }
    products[index].qty-=1;
    this.setState({
        products: products
    })
}

haldleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}
getCartCount = () => {
  const { products } = this.state;

  let count = 0;

  products.forEach((product) => {
    count+=product.qty;
  });

  return count;
}

getCartTotal = () => {
  const { products } = this.state;

  let total = 0;

  products.forEach((product) => {
    total+=product.qty*product.price;
  });

  return total;
}
  render () {
    const { products }= this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
        products = {products} 
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.haldleDeleteProduct}
        />
        <div style={{padding: 10,fontSize: 20}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
