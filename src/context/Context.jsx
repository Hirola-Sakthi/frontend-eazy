import { products as staticProducts } from "@/data/products";
import { useProducts } from "@/api/content";
import { openCart } from "@/utlis/toggleCart";
import React, { useEffect } from "react";
import { useContext, useState } from "react";

const dataContext = React.createContext();

export const useContextElement = () => {
  return useContext(dataContext);
};

export default function Context({ children }) {
  // Fetch products from API with fallback to static data
  const { products: apiProducts, loading: productsLoading } = useProducts();

  // Use API products if available, otherwise use static products
  const products = apiProducts.length > 0 ? apiProducts : staticProducts;

  const [cartProducts, setCartProducts] = useState([]);
  const [wishList, setWishList] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(products[0] || staticProducts[0]);
  const [totalPrice, setTotalPrice] = useState(0);

  // Update quickViewItem when products change
  useEffect(() => {
    if (products.length > 0 && !quickViewItem) {
      setQuickViewItem(products[0]);
    }
  }, [products]);

  useEffect(() => {
    const subtotal = cartProducts.reduce((accumulator, product) => {
      return accumulator + product.quantity * product.price;
    }, 0);
    setTotalPrice(subtotal);
  }, [cartProducts]);

  const addProductToCart = (id) => {
    if (!cartProducts.filter((elm) => elm.id == id || elm._id == id)[0]) {
      const item = products.filter((elm) => elm.id == id || elm._id == id)[0];
      if (item) {
        setCartProducts((pre) => [...pre, { ...item, quantity: 1 }]);
        openCart();
      }
    }
  };

  const isAddedToCartProducts = (id) => {
    if (cartProducts.filter((elm) => elm.id == id || elm._id == id)[0]) {
      return true;
    }
    return false;
  };

  const toggleWishlist = (id) => {
    if (wishList.includes(id)) {
      setWishList((pre) => [...pre.filter((elm) => elm != id)]);
    } else {
      setWishList((pre) => [...pre, id]);
    }
  };

  const isAddedtoWishlist = (id) => {
    if (wishList.includes(id)) {
      return true;
    }
    return false;
  };

  // Load cart from localStorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartList"));
    if (items?.length) {
      setCartProducts(items);
    }
  }, []);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem("cartList", JSON.stringify(cartProducts));
  }, [cartProducts]);

  // Load wishlist from localStorage
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist"));
    if (items?.length) {
      setWishList(items);
    }
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishList));
  }, [wishList]);

  const [isChecked, setIsChecked] = useState(false);

  const toggleDark = (value) => {
    if (value) {
      document.documentElement.classList.add("uc-dark");
    } else {
      document.documentElement.classList.remove("uc-dark");
    }
  };

  useEffect(() => {
    const getBooleanValue = (key) => {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : false;
    };
    const savedValue = getBooleanValue("isDark");
    toggleDark(savedValue);
    setIsChecked(savedValue);
  }, []);

  const contextElement = {
    products,
    productsLoading,
    cartProducts,
    setCartProducts,
    totalPrice,
    addProductToCart,
    isAddedToCartProducts,
    toggleWishlist,
    isAddedtoWishlist,
    quickViewItem,
    wishList,
    setQuickViewItem,
    isChecked,
  };

  return (
    <dataContext.Provider value={contextElement}>
      {children}
    </dataContext.Provider>
  );
}
