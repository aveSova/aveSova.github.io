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
      dots={false}
      slidesToShow={slidesToShow}
      slidesToScroll={1}
      centerMode={true}
      centerPadding="0"
      focusOnSelect={true}
      style={{
            width: "100%",
            margin: "0 auto"
          }}>
          <div><img  src='/public/arbuz.webp'/></div>
          <div><img  src='/public/dynia.webp'/></div>
          <div><img  src='/public/tykva.webp'/></div>
      </Carousel>
    </ConfigProvider>
    </>
  )
}

export default App
