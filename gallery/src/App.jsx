import { Carousel, ConfigProvider } from "antd";
import { useState, useEffect } from "react";
import './App.css'

function App() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesToShow(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const images = [
    { src: '/gal/public/arbuz.webp', alt: 'Арбуз' },
    { src: '/gal/public/dynia.webp', alt: 'Тыква' },
    { src: '/gal/public/tykva.webp', alt: 'Дыня' },
    { src: '/gal/public/granat.webp' , alt: 'Гранат' },
    { src: '/gal/public/pomelo.webp' , alt: 'Помело' },
    { src: '/gal/public/orange.webp' , alt: 'Апельсин' },
    { src: '/gal/public/durian.webp' , alt: 'Дурь' },
    { src: '/gal/public/pineapple.webp' , alt: 'Ананас' },
  ];

  return (
    <>
    <ConfigProvider
      theme={{
        token: {
          colorText: "#FFFF",
        },
      }}
    >
      <Carousel 
      arrows={true}
      infinite={true}
      dots={true}
      slidesToShow={slidesToShow}
      slidesToScroll={1}
      centerMode={true}
      centerPadding="0"
      focusOnSelect={true}>
          {images.map((image, index) => (
          <div key={index}>
          <img 
            src={image.src} 
            alt={image.alt}
            title={image.title}
          /></div>
          ))}
      </Carousel>
    </ConfigProvider>
    </>
  )
}

export default App
