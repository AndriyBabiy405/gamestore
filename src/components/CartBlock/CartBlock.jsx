import React from 'react'
import { useSelector } from 'react-redux';
import { calcTotalPrice } from '../utils';
import ItemsInCart from "../ItemsInCart/ItemsInCart";
import { BiCartAlt} from "react-icons/bi"
import { useState } from 'react';
import "./CartBlock.css";
import CartMenu from "../CartMenu/CartMenu";
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCallback } from 'react';

function CartBlock() {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    const items = useSelector(state => state.cart.itemsInCart);
    const totalPrice = calcTotalPrice(items);
    const history = useHistory();

    const handleClick = useCallback(() => {
        setIsCartMenuVisible(false);
        history.push('/order');
    }, [history]);

    return (
        <div className='cart-block'>
            <ItemsInCart quantity={items.length} />
            <BiCartAlt size={25} className='cart-block__icon' onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}/>
            {totalPrice > 0 ? (<span className="cart-block__total-price">{totalPrice} grn</span>) : null}
            {isCartMenuVisible && <CartMenu items={ items } onClick={ handleClick } />} 
        </div>
    )
}

export default CartBlock
