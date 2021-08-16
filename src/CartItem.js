import React from 'react';
import { render } from 'react-dom';

class Cartitem extends React.Component {
  constructor () {
    super();
    this.state = {
      price : 999,
      title : 'Mobile phone',
      qty : 1,
      img : '' 
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
  }
  increaseQuantity = () => {
    //this.state.qty+=1;
    //console.log('this' , this.state);
    //setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    //setState form 2  if previous state required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
    });
  }
  decreaseQuantity = () => {
    //console.log('this' , this.state);

    const { qty } = this.state;
    if(qty == 0)
    {
      return;
    }
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }
    render() {
        const {price,title,qty} = this.state;
        return (
            <div className="cart-item">
              <div className="left-block">
                <img style={styles.image} />
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
                    onClick={this.increaseQuantity.bind(this)}
                  />

                  <img
                    alt="decrease" 
                    className="action-icons" 
                    src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" 
                    onClick={this.decreaseQuantity.bind(this)}
                  />
                  <img
                    alt="delete" 
                    className="action-icons" 
                    src="https://as2.ftcdn.net/v2/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" 
                    onClick={this.deleteItem}
                  />
                </div>
              </div>
            </div>

        );
    }
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