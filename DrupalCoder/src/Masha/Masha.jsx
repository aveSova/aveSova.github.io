
import "./Masha.css";
import ReviewsCarousel from "./components/ReviewsCarousel.jsx";
import Clients from "./components/Clients.jsx";
import FAQ from "./components/FAQ.jsx";
import SupportForm from "./components/SupportForm.jsx";

const Masha = () => {
  return (
    <>
        <ReviewsCarousel />
        <Clients />
        <FAQ/>
        <SupportForm />
    </>
  );
};

export default Masha;
