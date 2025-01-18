"use client";

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import OffertsDay from './pages/OffertsDay'
import BlackFriday from './pages/BlackFriday'
import Register from './pages/Register'
import Login from './pages/Login'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />;
      case "offertsday":
        return <OffertsDay />;
      case "blackfriday":
        return <BlackFriday />;
      case "register":
        return <Register setCurrentPage={setCurrentPage}/>;
      case "login":
        return <Login setCurrentPage={setCurrentPage}/>;
      default:
        return <HomePage />;
    }
  };

  const loginPages = ["register", "login"]
  return (
    <>
    {!loginPages.includes(currentPage) && <Header setCurrentPage={setCurrentPage} />}
    <main>{renderPage()}</main>
    {!loginPages.includes(currentPage) && <Footer />}
    </>
  );
}
