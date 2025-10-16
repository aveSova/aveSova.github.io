import { useState, useRef } from 'react'
import './App.css'
import { Col, Row } from 'antd';
import { Flex } from "antd";
import Card from './Card';

function App() {
  const [summ, setSumm] = useState(0);
  const cardsRef = useRef([]);

  const ClickIt = () =>{
    let total = 0;

    cardsRef.current.forEach(cardInstance => {
      if (cardInstance && cardInstance.getCardData) {
        const cardData = cardInstance.getCardData();
        total += cardData.price * cardData.quantity;
      }
    });

    setSumm(total);
  }

  const addCardRef = (ref, index) => {
    cardsRef.current[index] = ref;
  };

  return (
    <>
    <Flex vertical gap={'small'} style={{minHeight:'100vh'}}>
      <header>
        <Row>
          <Col span={5} offset={1}><img src='/public/logo.png' /></Col>
          <Col span={6} offset={5}><h1>Магазин зарубежных товаров "Мост"</h1></Col>
        </Row>
      </header>
      <Col span={20} offset={2}
        style={{background: '#004562', 
        background: 'linear-gradient(0deg, rgba(0, 69, 98, 1) 0%, rgba(97, 165, 194, 1) 100%)',
        borderRadius: '10px'}}>
        <Row>
          <Col span={17} offset={1}>
            <Card ref={ref => addCardRef(ref, 0)} imgSrc={'/public/goods/Headphones.png'} name={'Наушники'} price={100}/>
            <Card ref={ref => addCardRef(ref, 1)} imgSrc={'/public/goods/VR.png'} name={'VR-гарнитура'} price={400}/>
            <Card ref={ref => addCardRef(ref, 2)} imgSrc={'/public/goods/Udon.png'} name={'Лапша'} price={10}/>
            <Card ref={ref => addCardRef(ref, 3)} imgSrc={'/public/goods/Win11.png'} name={'Цифровая лицензия Windows 11'} price={60}/>
            <Card ref={ref => addCardRef(ref, 4)} imgSrc={'/public/goods/Bubble.png'} name={'Жвачка'} price={5}/>
            <Card ref={ref => addCardRef(ref, 5)} imgSrc={'/public/goods/Toyota.png'} name={'Toyota Camry'} price={30000}/>
            <Card ref={ref => addCardRef(ref, 6)} imgSrc={'/public/goods/Марка.png'} name={'марка коллекционная'} price={250}/>
          </Col>
          <Col span={6}>
            <div>
              <h1>ИТОГО: {summ} $</h1>
              <button onClick={() => ClickIt()}>расчитать</button>
            </div>
          </Col>
        </Row>
      </Col>
      <footer style={{background: '#103857', height: '100px'}}>
        @Всеволод Гончар 2006
      </footer>
    </Flex>
    </>
  )
}

export default App
