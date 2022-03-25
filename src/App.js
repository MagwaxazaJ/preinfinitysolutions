import React, { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Choose from "./components/Choose";
import Home from "./components/Home";
import "./scss/index.scss";
import Services from "./components/Services";
import Categories from "./components/Categories";
import Recommend from "./components/Recommend";
import Products from "./components/Products";
import Promo from "./components/Promo";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import scrollreveal from "scrollreveal";

import ProductsPage from './components/products/products';
import ServicesPage from './components/services/services';
import AboutPage from './components/about/about';
import ContactPage from './components/contact/contact';
import CheckoutPage from './components/checkout/Checkout';
import LoginPage from './components/login/Login';
import PaymentPage from './components/payment/payment';

function App() {

  const [theme, setTheme] = useState("dark");
  const changeTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: "bottom",
        distance: "80px",
        duration: 1000,
        reset: false,
      });
      sr.reveal(
        `
        nav,
        .home,
        .services-container,
        .categories-container,
        .recommend-container,
        .choose-us-container,
        .products-container,
        .promo-container,
        footer
    `,
        {
          interval: 500,
        }
      );
    };
    registerAnimations();
  }, []);

  const FirstPage = () => {
    return(
      <div>
      <ScrollTop />
      <Home />
      <Services />
      <Categories />
      <Choose />
      {/* <Products /> */}
      <Footer />
    </div>
    )
  }

  return (
    <BrowserRouter>
    <div data-theme={theme} className="app">
    <Navbar changeTheme={changeTheme} currentTheme={theme} />
     <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
        </div>
    </BrowserRouter>
  );
}



export default App;
