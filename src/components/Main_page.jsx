import React from 'react'
import Navbar1 from "../components/Navbar/Navbar1";
import Home from "../components/Home/Home";
import Home_cards from "../components/Home/Home_cards";
import ProductCards from './Products/ProductCards';
const Main_page = () => {
  return (
    <>
    <Navbar1/>
    <Home/>
    <Home_cards/>
    <ProductCards />
    
    </>
    
  )
}

export default Main_page