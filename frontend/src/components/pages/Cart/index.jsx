import "./index.css";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";

const Cart = () => {

    const { cartItems, food_list, removeFromCart, getTotalCartAmt, url } = useContext(StoreContext)

    const navigate = useNavigate()
    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <>
                                <div className='cart-items-title cart-items-item'>
                                    <img src={url + "/images/" + item.image} alt='' />
                                    <p>{item.name}</p>
                                    <p>RWF {item.price}</p>
                                    <p>{cartItems[item._id]}</p>
                                    <p>RWF {item.price * cartItems[item._id]}</p>
                                    <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </>
                        )
                    }
                })}
            </div>
            <div className="cart-bottom">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>RWF - {getTotalCartAmt()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>RWF - {getTotalCartAmt() === 0 ? 0 : 2000}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total  </b>
                            <b>{getTotalCartAmt() === 0 ? 0 : getTotalCartAmt() + 2000}</b>
                        </div>
                    </div>
                    <button onClick={() => navigate("/order")}>PROCEED TO CHECKOUT</button>
                </div>


                <div className="cart-promocode">
                    <div>
                        <p>If you have a promo code. Enter it here</p>
                        <div className='cart-promocode-input'>
                            <input type="text" placeholder='enter your code' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
