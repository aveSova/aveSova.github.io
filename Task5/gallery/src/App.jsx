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
    { src: '/assets/arbuz.webp', alt: 'Арбуз' },
    { src: './assets/dynia.webp', alt: 'Тыква' },
    { src: './assets/tykva.webp', alt: 'Дыня' },
    { src: './assets/granat.webp' , alt: 'Гранат' },
    { src: './assets/pomelo.webp' , alt: 'Помело' },
    { src: './assets/orange.webp' , alt: 'Апельсин' },
    { src: './assets/durian.webp' , alt: 'Дурь' },
    { src: './assets/pineapple.webp' , alt: 'Ананас' },
  ];

  return (
    <>
    <ConfigProvider
      theme={{
        token: {
          colorText: "#FFFF",
        },

        components: {
          Carousel: {
            dotOffset: '-15vw',
          }
        }
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
