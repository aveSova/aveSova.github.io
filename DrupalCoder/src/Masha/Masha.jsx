import React from "react";
import "./Masha.css";
import { BrowserRouter } from "react-router-dom";

import ReviewsCarousel from "./components/ReviewsCarousel";
import Clients from "./components/Clients";
import FAQ from "./components/FAQ";
import SupportForm from "./components/SupportForm";

const Masha = () => {
  return (
    <BrowserRouter>
      <ReviewsCarousel />
      <Clients />
      <FAQ/>
      <SupportForm />
    </BrowserRouter>
  );
};

export default Masha;
