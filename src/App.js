import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import firebase from 'firebase';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
        products: [],
        loading: true
    }
    this.db = firebase.firestore();
}
componentDidMount () {
  // firebase
  //   .firestore()
  //   .collection('products')
  //   .get()
  //   .then((snapshot) => {
  //     console.log(snapshot);

  //     snapshot.docs.map((doc) => {
  //       console.log(doc.data());
  //     });

  //     const products = snapshot.docs.map((doc) => {
  //       const data = doc.data();

  //       data['id'] = doc.id;
  //       return data;
  //     })

  //     this.setState({
  //       products,
  //       loading: false
  //     })
  //   })

  this.db
    .collection('products')
    .orderBy('price')
    .onSnapshot((snapshot) => {
      console.log('snapshot');

      snapshot.docs.map((doc) => {
        console.log(doc.data());
    });


      const products = snapshot.docs.map((doc) => {
        const data = doc.data();

        data['id'] = doc.id;
        return data;
      })

      this.setState({
        products,
        loading: false
      })
    })
}
handleIncreaseQuantity = (product) => {
    console.log('Hey Please increase qty of : ' , product);
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty+=1;
    // this.setState({
    //     products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty: products[index].qty+1
    }).
    then(() => {
      console.log('Updated successfully')
  }).
  catch((error) => {
    console.log('Error',error);
  })
}
handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if(products[index].qty===0)
    {
        return;
    }

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty-1
      }).
      then(() => {
        console.log('updated successfully')
      }).
      catch((error) => {
        console.log('Error',error);
      })

    // products[index].qty-=1;
    // this.setState({
    //     products: products
    // })
}

haldleDeleteProduct = (id) => {
    const { products } = this.state;
    // const items = products.filter((item) => item.id !== id);

    // this.setState({
    //     products: items
    // })

    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(() => {
      console.log('Deleted successfully')
    })
    .catch((error) => {
      console.log('Error',error);
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

addProduct = () => {
  this.db
    .collection('products')
    .add({
      img: 'https://www.printstop.co.in/images/products_gallery_images/Golden-_-silver-mug_S2.jpg',
      price: 150,
      qty: 2,
      title: 'Mug'
    })
    .then((docRef) => {
      console.log('product is added' , docRef);
    })
    .catch((error) => {
      console.log('Error',error);
    })
}
  render () {
    const { products,loading }= this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{padding: 20, fontSize: 20}}>Add a product</button>
        <Cart
        products = {products} 
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.haldleDeleteProduct}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{padding: 10,fontSize: 20,backgroundColor: 'blueviolet',height: 100,alignItems:'center'}}>TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
