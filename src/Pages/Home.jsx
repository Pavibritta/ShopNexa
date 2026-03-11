import React, { useContext, useState } from "react";
import Carditems from "../Components/Carditems";

import { ProductContext } from "../Context/ProductList";

const Home = () => {
  const { productList, setProductList } = useContext(ProductContext);
  // console.log(productList);
 

  return (
    <>
      <section className=" max-w-8xl mx-auto text-center px-6 py-20 bg-background text-white relative min-h-screen ">
        <h1 className="text-transparent bg-clip-text bg-linear-to-r from-Primary to-Secondary font-bold text-xl lg:mt-10">
          Welcome pavi!
        </h1>

        <Carditems products={productList} />
      </section>
    </>
  );
};

export default Home;
