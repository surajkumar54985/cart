import React from 'react';
import { render } from 'react-dom';

const Cartitem = (props) => {
  console.log('this.props' , props);
  const {price,title,qty} = props.product;
  const { product,onIncreaseQuantity,onDecreaseQuantity,onDeleteProduct} = props;
  return (
    <div className="cart-item">
      {props.jsx}
      <div className="left-block">
        <img style={styles.image} src= {product.img} />
      </div>
      <div className="right-block">
        <div style={{fontSize: 25}}>{title}</div>
        <div style={{color: '#777'}}>Rs {price}</div>
        <div style={{color: '#777'}}>Qty: {qty}</div>
          <div className="cart-item-actions">
          {/* Buttons */}
          <img 
            alt="increase" 
            className="action-icons" 
            src="https://image.flaticon.com/icons/png/512/992/992651.png" 
            onClick={() => onIncreaseQuantity(product)}
          />

          <img
            alt="decrease" 
            className="action-icons" 
            src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete" 
            className="action-icons" 
            src="https://as2.ftcdn.net/v2/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>

        );
}

const styles = {
  image : {
    height : 120,
    width : 120,
    borderRadius : 4,
    background: '#ccc'
  }
}

export default Cartitem;