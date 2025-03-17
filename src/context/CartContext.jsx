import React, { createContext, useState, useContext, useEffect } from 'react';
import { toast } from 'react-toastify';

// Create context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
    return useContext(CartContext);
};

// Provider component
export const CartProvider = ({ children }) => {
    // Initialize cart state from localStorage or empty array
    const [cartItems, setCartItems] = useState(() => {
        try {
            // Try to get cart items from localStorage
            const savedCartItems = localStorage.getItem('cartItems');
            return savedCartItems ? JSON.parse(savedCartItems) : [];
        } catch (error) {
            console.error("Error loading cart from localStorage:", error);
            return [];
        }
    });

    // Save to localStorage whenever cartItems changes
    useEffect(() => {
        try {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (error) {
            console.error("Error saving cart to localStorage:", error);
        }
    }, [cartItems]);

    // Add item to cart
    const addToCart = (product) => {
        setCartItems(prevItems => {
            // Check if product already exists in cart
            const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

            if (existingItemIndex >= 0) {
                // Product exists, increase quantity
                const updatedItems = [...prevItems];
                updatedItems[existingItemIndex] = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + 1
                };
                return updatedItems;
            } else {
                // Product doesn't exist, add new item
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    // Remove item from cart
    const removeFromCart = (productId) => {
        setCartItems(prevItems => {
            const updatedItems = prevItems.filter(item => item.id !== productId);
            toast.info('Đã xóa sản phẩm khỏi giỏ hàng');
            return updatedItems;
        });
    };

    // Update quantity of an item
    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) return;

        setCartItems(prevItems => {
            return prevItems.map(item =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            );
        });
    };

    // Clear cart completely
    const clearCart = () => {
        setCartItems([]);
        toast.info('Đã xóa toàn bộ giỏ hàng');
    };

    // Calculate total items in cart
    const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    // Value object to be provided to consumers
    const value = {
        cartItems,
        cartItemCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;