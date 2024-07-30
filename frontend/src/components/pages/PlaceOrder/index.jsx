import "./index.css";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";

const PlaceOrder = () => {
    const { getTotalCartAmt, token, food_list, cartItems, url } = useContext(StoreContext);

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zipcode: "",
        country: "",
        phone: "",

    })
    const onChangeHandler = (event) => {
        const name = event.target.name
        const value = event.target.value
        setData(data => ({ ...data, [name]: value }))
    }

    const placeOrder = async (event) => {
        event.preventDefault();
        let orderItems = [];
        food_list.map((item) => {
            if (cartItems[item._id] > 0) {
                let itemInfo = item;
                itemInfo["quantity"] = cartItems[item._id];
                orderItems.push(itemInfo);
            }
        })
        let orderData = {
            address: data,
            items: orderItems,
            amount: getTotalCartAmt() + 2
        }

        let response = await axios.post(url + "/api/order/place/", orderData, { headers: { token } })
        if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url);
        } else {
            alert('Error with the route')
        }
    }

    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate("/cart")
        } else if (getTotalCartAmt() === 0) {
            navigate("/cart")
        }
    }, [token])


    return (
        <>
            <form onSubmit={placeOrder} className='place-order'>
                <div className="place-order-left">
                    <p className="title">Delivery Information</p>
                    <div className="multi-fields">
                        <input required onChange={onChangeHandler} value={data.firstName} name="firstName" type="text" placeholder="First name" />
                        <input required onChange={onChangeHandler} value={data.lastName} name="lastName" type="text" placeholder="Last name" />
                    </div>
                    <input required onChange={onChangeHandler} value={data.email} name="email" type="email" placeholder="Email Address" />
                    <input required onChange={onChangeHandler} value={data.street} name="street" type="text" placeholder="Street Name" />
                    <div className="multi-fields">
                        <input required onChange={onChangeHandler} value={data.city} name="city" type="text" placeholder="City" />
                        <input required onChange={onChangeHandler} value={data.state} name="state" type="text" placeholder="State" />
                    </div>
                    <div className="multi-fields">
                        <input required onChange={onChangeHandler} value={data.zipcode} name="zipcode" type="text" placeholder="Zip Code" />
                        <input required onChange={onChangeHandler} value={data.country} name="country" type="text" placeholder="Country" />
                    </div>
                    <input required onChange={onChangeHandler} value={data.phone} name="phone" type="text" placeholder="Phone Number" />
                </div>

                <div className="place-order-right">
                    <div className="cart-total">
                        <h2>Cart Totals</h2>
                        <div>
                            <div className="cart-total-details">
                                <p>Subtotal</p>
                                <p>$ - {getTotalCartAmt()}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <p>Delivery Fee</p>
                                <p>$ - {getTotalCartAmt() === 0 ? 0 : 2000}</p>
                            </div>
                            <hr />
                            <div className="cart-total-details">
                                <b>Total  </b>
                                <b>{getTotalCartAmt() === 0 ? 0 : getTotalCartAmt() + 2000}</b>
                            </div>
                        </div>
                        <button type="submit">PROCEED TO PAYMENT</button>
                    </div>
                </div>
            </form>
        </>
    )
}

export default PlaceOrder
