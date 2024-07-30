import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "https://backend-appeta-1.onrender.com";
    const [token, setToken] = useState("");
    const [food_list, setFoodList] = useState([]);

    const addToCart = async (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        }

        if (token) {
            await axios.post(url + "/api/cart/add", { itemId }, { headers: { token: token } })
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        if (token) {
            await axios.post(url + '/api/cart/remove', { itemId }, { headers: { token: token } })
        }
    };

    const getTotalCartAmt = () => {
        let totalAmt = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmt += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmt;
    }

    // Functions for fetching products from the database
    const fetchFoodList = async () => {
        const response = await axios.get(url + '/api/food/list');
        setFoodList(response.data.data);
    }

    const loadCartData = async (token) => {
        const response = await axios.post(url + '/api/cart/get', {}, { headers: { token: token } });
        setCartItems(response.data.cartData)
    }

    // Keeping the user logged in while refreshing the page
    useEffect(() => {
        async function loadData() {
            await fetchFoodList();
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
            }
        }
        loadData();
    }, []);

    // Function to handle user login and store token
    const handleLogin = (token) => {
        localStorage.setItem('token', token);
        setToken(token);
    };

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmt,
        url,
        token,
        setToken,
        handleLogin // Expose handleLogin to the context
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
