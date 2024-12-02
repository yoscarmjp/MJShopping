"use client";

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/Home'
import OffertsDay from './pages/OffertsDay'
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
      default:
        return <HomePage />;
    }
  };
  return (
    <><Header setCurrentPage={setCurrentPage} />
    <main>{renderPage()}</main>
    <Footer /></>
  );
}
