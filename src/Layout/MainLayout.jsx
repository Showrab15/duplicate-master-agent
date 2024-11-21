/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import Message from "../components/Message/Message";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      {/* <Helmet prioritizeSeoTags>
        <title>Updated Velki Live Agent List: Find Your Support Now</title>
        <meta
          property="og:title"
          content="Updated Velki Live Agent List: Find Your Support Now"
        />
        <meta
          property="og:description"
          content="Discover the complete Velki Live Agent List to connect with expert, caring agents ready to assist you. Find top-rated support quickly and easily –4 your reliable guide to trusted live agents for fast solutions and guidance tailored to your needs"
        />
        <meta
          property="og:image"
          content="https://www.velkie123live.com/favicon.ico"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.velkie123live.com/favicon.ico"
        />
        <meta property="og:image:type" content="image/ico" />
        <meta property="og:image:alt" content="website image" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content="Velkie123live" />
      </Helmet> */}

      <Navbar />

      <Outlet />
      <Footer />
      <BackToTopBtn />

      <Message />
    </>
  );
};

export default MainLayout;
