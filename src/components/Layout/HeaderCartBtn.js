import React, { useContext, useEffect, useState } from 'react'
import classes from './HeaderCartBtn.module.css'
import CartContext from '../../store/cart-context'
import CartIcon from '../Cart/CartIcon'

const HeaderCartBtn = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
   const cartCtx = useContext(CartContext);
   const { items } = cartCtx;

   const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
   }, 0);

   const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

   useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(()=> {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
   }, [items]);

  return <button className={btnClasses} onClick={props.onClick}>
    <span>
        <CartIcon />
    </span>
    <span className={classes.textbtn}>Your Cart</span>
    <span className={classes.badg}>{numberOfCartItems}</span>
  </button>
}

export default HeaderCartBtn