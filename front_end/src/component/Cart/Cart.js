import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from './CartItemCard';
import {useSelector,useDispatch} from 'react-redux';
import { addItemsToCart, removeItemsFromCart } from "../../actions/cartActions";
import {Typography} from '@material-ui/core';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import {Link} from 'react-router-dom';
import MetaData from "../layout/MetaData";
import {useNavigate} from "react-router-dom";
const Cart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { cartItems } = useSelector((state)=>state.cart);


    const increaseQuantity = (id,quantity,stock) => {
       const newQty = quantity+1;
       if(stock<=quantity){
        return;
       }
       dispatch(addItemsToCart(id,newQty));
    }

    const decreaseQuantity = (id,quantity,stock) => {
        const newQty = quantity-1;
        if(quantity<=1){
            return;
        }
        dispatch(addItemsToCart(id,newQty));
    }

    const deleteCartItem = (id) => {
        dispatch(removeItemsFromCart(id));
    }
    const checkOutHandler = ()=> {
        navigate("/login?redirect=shipping");
    }
    return (
       
        <Fragment>
        <MetaData title={`Cart`}/>
            {
                cartItems.length < 1 ? <div className="emptyCart">
                    <RemoveShoppingCartIcon/>
                    <Typography>No Product in your Cart😟</Typography>
                    <Link to="/products">View Products</Link>
                </div> :  <Fragment>
            <div className="cartPage">
                <div className="cartHeader">
                    <p>Product</p>
                    <p>Quantity</p>
                    <p>Subtotal</p>
                </div>
            {cartItems && cartItems.map((item)=>(
            <div className="cartContainer" key={item.product}>
                <CartItemCard item={item} deleteCartItem={deleteCartItem}/>
                <div className="cartInput">
                    <button onClick={()=>decreaseQuantity(item.product,item.quantity,item.stock)}>-</button>
                    <input type="number" value={item.quantity} readOnly/>
                    <button onClick={()=>increaseQuantity(item.product,item.quantity,item.stock)}>+</button>
                </div>
                <p className="cartSubtotal">{`₹${item.price * item.quantity}`}</p>
            </div>
        ))}
           
        
            <div className="cartGrossProfit">
            <div className="cartGrossProfitBox">
             <p>Gross Total</p>
             <p>{`₹${cartItems.reduce(
                (sum,item)=> sum + item.quantity * item.price,0 
             )}`}</p>
            </div>
            <div className = "checkOutBtn">
                <button onClick={checkOutHandler}>Check Out</button>
            </div>
            </div>
            </div>
        </Fragment>
            }
        </Fragment>
       
    )
}

export default Cart;