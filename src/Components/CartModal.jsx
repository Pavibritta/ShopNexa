import React, { useContext, useState } from "react";
import { ProductContext } from "../Context/ProductList";
import { QRCodeCanvas } from "qrcode.react";

const CartModal = ({ onClose }) => {
  const { selectedProduct } = useContext(ProductContext);

  const [count, setCount] = useState({});

  const handleAdd = (id) => {
    setCount((prev) => ({ ...prev, [id]: (prev[id] || 1) + 1 }));
  };

  const handleRemove = (id) => {
    setCount((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) - 1),
    }));
  };

  if (selectedProduct.length === 0) {
    return (
      <section className="fixed inset-0 flex items-center justify-center">
        <p className="text-xl font-bold">Your Cart Is Empty</p>
      </section>
    );
  }
  const totalPrice = selectedProduct.reduce((total, product) => {
    const qty = count[product.id] || 1;
    return total + product.price * qty;
  }, 0);

  const handleOrder = () => {
    alert("Order Placed Successfully!");
  };
  return (
    <section className="fixed inset-0 flex items-center justify-center z-50 bg-white w-full max-w-4xl mx-auto mt-10 rounded-xl shadow flex-col gap-3 overflow-scroll">
      <button
        className="bg-Primary text-white rounded cursor-pointer absolute top-5 right-5 p-3"
        onClick={onClose}
      >
        X
      </button>
      <h1 className="text-transparent bg-clip-text bg-linear-to-r from-Primary to-Secondary font-bold text-xl ">
        Shopping cart
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
        {selectedProduct.map((product) => {
          const qty = count[product.id] || 1;

          return (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <img src={product.image} className="w-full h-44 object-cover" />

              <div className="p-4 space-y-3 text-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-xl font-bold text-green-600">
                  ₹{product.price * qty}
                </p>

                <div className="flex justify-center gap-3">
                  <button
                    className="bg-green-600 text-white px-3 py-1 rounded"
                    onClick={() => handleAdd(product.id)}
                  >
                    +
                  </button>

                  <span className="font-bold">{qty}</span>

                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded"
                    onClick={() => handleRemove(product.id)}
                  >
                    -
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="bg-background rounded shadow text-Primary flex flex-col gap-3 px-3">
          <h3 className="text-white text-center">Summary</h3>

          <p className="font-semibold text-lg">Total:{totalPrice}</p>
          <QRCodeCanvas value={`pay ₹${totalPrice} to ShopNexa`} size={150} />

          <button
            className="bg-linear-to-r from-Primary to-Secondary text-white px-3 py-3 rounded-full cursor-pointer"
            onClick={handleOrder}
          >
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartModal;
