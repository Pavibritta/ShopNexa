import React, { useContext, useState, useEffect } from "react";
import { CiDark, CiLight } from "react-icons/ci";
import { ThemeContext } from "../Context/themeprovider";
import { CiSearch } from "react-icons/ci";
import { FaSignInAlt } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { ProductContext } from "../Context/ProductList";
import CartModal from "./CartModal";
import SignIn from "./SignIn";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { productList, setProductList, cartProduct, initialProducts } =
    useContext(ProductContext);
  const [search, setSearch] = useState("");
  const [openCartModal, setOpenCartModal] = useState(false);
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignOut, setOpenSignOut] = useState(false);

  useEffect(() => {
    const filteredProducts = initialProducts.filter((product) =>
      product.name.toLowerCase().includes(search.toLowerCase()),
    );

    setProductList(filteredProducts);
  }, [search]);
  const handleSignOut = () => {
    window.confirm("Are you sure to want Sign Out?");
    setOpenSignOut(false);
  };
  return (
    <>
      <header className="fixed  w-full  bg-background shadow z-50">
        <nav className="flex justify-between items-center px-3 py-5 max-w-8xl flex-wrap gap-3">
          <h1 className="text-transparent bg-clip-text bg-linear-to-r from-Primary to-Secondary font-bold text-xl">
            SHOPNEXA
          </h1>
          <div className="flex items-center bg-white rounded shadow px-3 py-2 w-full max-w-2xl">
            <CiSearch className="text-gray-500 mr-2" />
            <input
              type="search"
              placeholder="Search products..."
              className="outline-none w-full"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="relative cursor-pointer">
            <CiShoppingCart
              className="text-white text-3xl"
              onClick={() => setOpenCartModal(true)}
            />

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {cartProduct}
            </span>
          </div>

          {openSignOut ? (
            <button
              className="bg-linear-to-r from-Primary to-Secondary text-white px-3 py-2 rounded cursor-pointer flex items-center gap-3"
              onClick={handleSignOut}
            >
              <FaSignInAlt />
              <span>Sign Out</span>
            </button>
          ) : (
            <button
              className="bg-linear-to-r from-Primary to-Secondary text-white px-3 py-2 rounded cursor-pointer flex items-center gap-3"
              onClick={() => setOpenSignIn(true)}
            >
              <FaSignInAlt />
              <span>Sign in</span>
            </button>
          )}

          <button
            className="bg-linear-to-r from-Primary to-Secondary text-white px-3 py-3 rounded-full cursor-pointer"
            onClick={toggleTheme}
          >
            {theme === "light" ? <CiLight /> : <CiDark />}
          </button>
        </nav>
      </header>
      {openCartModal && <CartModal onClose={() => setOpenCartModal(false)} />}

      {openSignIn && (
        <SignIn
          onClose={() => {
            setOpenSignIn(false);
            setOpenSignOut(true);
          }}
        />
      )}
    </>
  );
};

export default Navbar;
