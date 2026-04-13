import React from "react";






import LastestProduct from "./common/LastestProduct";
import FeaturedProduct from "./common/FeaturedProduct";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Hero from "./common/Hero";
import Layout from "./common/Layout";

const Home = () => {
  return (
    <>
     <Layout>
        <Hero/>
        <LastestProduct/>
        <FeaturedProduct/>
     </Layout>


     
    </>
  );
};

export default Home;
