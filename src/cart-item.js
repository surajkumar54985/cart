import React from 'react';
import { render } from 'react-dom';

class cart-item extends React.Component {
    render() {
        return (
            <div className="cart-item">
              <div className="left-block">
                <img style={Styles.image}/>
              </div>
              <div className="right-block">
                <div style={{fontSize: 25}}>Phone</div>
                <div style={{color: '#777'}}>Rs 999</div>
                <div style={{color: '#777'}}>Qty : 1</div>
                <div className"cart-item-actions">
                  {/* Buttons */}
                </div>
              </div>
            </div>
        );
    }
}

const style = {
  image : {
    height : 120px;
    width : 70 px;
  }
}