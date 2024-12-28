import {CartDropdownContainer,EmptyMessage,CartItems} from "./cart-dropdown.styles";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
const CartDropdown =()=>{
    const {cartItems}=useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckOutHandler = ()=>{
        navigate('/checkout');
    }


    return(
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length ? (cartItems.map((item)=>{
                    return(
                        <CartItem cartItem={item}/>
                    )
                })) : <EmptyMessage>Your Cart is empty</EmptyMessage>}
            </CartItems>
            <Button onClick = {goToCheckOutHandler}>Go To Checkout</Button>
            
        </CartDropdownContainer>
    )
}

export default CartDropdown;