import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';
import Special from '../Special/Special';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Products />
      <Reviews />
      <Special />
      <Footer />
    </>
  );
};

export default Home;
