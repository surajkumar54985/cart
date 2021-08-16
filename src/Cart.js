import React from 'react';
import Cartitem from './CartItem';

class Cart extends React.Component {
    constructor () {
        super();
        this.state = {
            products: [
                {
                    price: 99,
                    title: 'watch',
                    qty: 2,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile',
                    qty: 4,
                    img: '',
                    id: 2
                },
                {
                    price: 99999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 4
                }
            ]
        }
    }
    render () {
        const { products } = this.state;
        return (
            <div className="cart">
              {products.map((product) => {
                  return (
                    <Cartitem 
                      product={product}
                      key={product.id}
                    />
                  )
              })}
            </div>
        );
    }
}

export default Cart;