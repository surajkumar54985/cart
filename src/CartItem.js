import React from 'react';
import { render } from 'react-dom';

class Cartitem extends React.Component {
  constructor () {
    super();
    this.state = {
      price : 999,
      title : 'phone',
      qty : 1,
      img : ''
    }
  }
    render() {
        return (
            <div className="cart-item">
              <div className="left-block">
                <img style={styles.image} />
              </div>
              <div className="right-block">
                <div style={{fontSize: 25}}>Phone</div>
                <div style={{color: '#777'}}>Rs 999</div>
                <div style={{color: '#777'}}>Qty : 1</div>
                <div className="cart-item-actions">
                  {/* Buttons */}
                  <img alt="increase" className="action-icons" src="https://stock.adobe.com/images/plus-icon-add-plus-icon-addition-sign-medical-plus-icon/251038282" />
                  <img alt="decrease" className="action-icons" src="https://as1.ftcdn.net/v2/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg" />
                  <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/v2/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg" />
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