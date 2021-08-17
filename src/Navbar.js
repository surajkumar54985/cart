import React from 'react';

const Navbar = (props) => {
  return (
      <div style={styles.nav}>
        <div style={styles.cartIconContainer}>
          <img style={styles.cartIcon} src="https://img-premium.flaticon.com/png/512/2543/premium/2543369.png?token=exp=1629183859~hmac=6cefb04aec8f1bb016343a551c124032" alt="cart-icon" />
        </div>
        <span style={styles.cartCount}> { props.count } </span>
      </div>
    );
}

const styles = {
  cartIcon: {
      height: 50,
      marginRight: 20
  },
  nav: {
      height: 70,
      background: '#4267b2',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'centre'
  },
  cartIconContainer: {
      position: 'relative'
  },
  cartCount: {
      background: 'yellow',
      borderRadius: '50%',
      padding: '4px 8px',
      position: 'absolute',
      right: 0,
      top: 3
  }
};

export default Navbar;