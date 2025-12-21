import logoF from '../assets/D.svg';
import ico1 from '../assets/iconS1.svg';
import ico2 from '../assets/iconS2.svg';
import ico3 from '../assets/iconS3.svg';
import p1 from '../assets/people1.jpg';
import p2 from '../assets/people2.jpg';
import p3 from '../assets/people3.jpg';
import p4 from '../assets/people4.jpg';
import p5 from '../assets/people5.jpg';

import case1 from '../assets/case1.jpg';
import case2 from '../assets/case2.jpg';
import case3 from '../assets/case3.jpg';
import case4 from '../assets/case4.jpg';
import case5 from '../assets/case5.png';
import React from 'react';
import { 
  Card, 
  Row, 
  Col, 
  Button, 
  Typography, 
  Divider,
  List,
  ConfigProvider,
  Space,
  Tag
} from 'antd';
import { 
  CheckOutlined,
  MessageOutlined,
  PhoneOutlined,
  MailOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

// Точные цвета из макета
const COLORS = {
  START: '#d45b5bff', // Темно-зеленый
  BUSINESS: '#d45b5bff', // Синий
  VIP: '#d45b5bff', // Фиолетовый
  BORDER: '#E0E0E0', // Светло-серый для границ
  TEXT: '#333333', // Основной текст
  TEXT_SECONDARY: '#666666', // Вторичный текст
  BACKGROUND: '#FFFFFF', // Белый фон
  BUTTON_TEXT: '#d45b5bff', // Белый текст на кнопках
};

const customTheme = {
  token: {
    colorPrimary: COLORS.BUSINESS,
    borderRadius: 5, // Прямые углы как в макете
    fontFamily: 'Arial, sans-serif',
  },
  components: {
    Card: {
      borderRadiusLG: 5,
      borderColor: COLORS.BORDER,
    },
    Button: {
      borderRadius: 5,
      controlHeight: 48,
    },
    Divider: {
      colorSplit: COLORS.BORDER,
    }
  },
};

// Тарифы с точными данными из макета
const tariffs = [
  {
    id: 1,
    name: 'Стартовый',
    
    color: COLORS.START,
    features: [
      'Консультации и работы по SEO',
      'Услуги дизайнера',
      'Неиспользованные оплаченные часы переносятся на следующий месяц',
      'Предоплата от 6 000 рублей в месяц',
    ],
    buttonText: 'СВЯЖИТЕСЬ С НАМИ!',
    
  },
  {
    id: 2,
    name: 'Бизнес',
    
    color: COLORS.BUSINESS,
    features: [
      'Консультации и работы по SEO',
      'Услуги дизайнера',
      'Высокое время реакции - до 2 рабочих дней',
      'Неиспользованные оплаченные часы не переносятся',
      'Предоплата от 30 000 рублей в месяц',
    ],
    buttonText: 'СВЯЖИТЕСЬ С НАМИ!',
    
  },
  {
    id: 3,
    name: 'VIP',
    color: COLORS.VIP,
    features: [
      'Консультации и работы по SEO',
      'Услуги дизайнера',
      'Максимальное время реакции - в день обращения',
      'Неиспользованные оплаченные часы не переносятся',
      'Предоплата от 270 000 рублей в месяц',
    ],
    buttonText: 'СВЯЖИТЕСЬ С НАМИ!',
  },
];

function Sasha() {
  const handleTariffClick = (tariffName) => (e) => {
    e.preventDefault();
    alert(`Это демо-версия. В реальном приложении здесь будет форма связи для тарифа "${tariffName}"`);
  };

  const handleIndividualRequest = (e) => {
    e.preventDefault();
    alert('Это демо-версия. В реальном приложении здесь будет форма для индивидуального тарифа');
  };

  const handleContact = (method) => (e) => {
    e.preventDefault();
    alert(`ничего ${method}`);
  };

  return (
    <ConfigProvider theme={customTheme}>
      {/*блок тарифа*-------------------------------------------------------------------------------------------------------------------------*/}
      <div style={{ 
        padding: '40px 20px', 
        maxWidth: 1200, 
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: '#f3f3f3ff', // Светло-серый фон всей страницы
       backgroundImage: `url(${logoF})`,
       backgroundPosition: 'right top',
        
      }}>
        
        {/* Основной заголовок */}
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <Title level={1} style={{ 
            color: COLORS.TEXT, 
            fontSize: '36px',
            marginBottom: 4,
            fontWeight: 600,
            letterSpacing: '0.5px',
            
          }}>
            Тарифы
          </Title>
          <div style={{ 
            width: '0px', 
            height: '0px', 
            backgroundColor: COLORS.BUSINESS,
            margin: '0 auto 24px',
          }} />
        
        </div>
        
        {/* Сетка тарифов - точная копия макета */}
        <Row 
          gutter={[0, 32]} // Нет горизонтальных отступов между карточками
          justify="center"
          style={{ marginBottom: 80 }}
        >
          {tariffs.map((tariff) => (
            <Col 
              key={tariff.id} 
              xs={24} 
              md={8}
              style={{ 
                display: 'flex',
                padding: '0 15px', // Отступы между карточками
              }}
            >
              <Card
                bordered
                hoverable={false}
                style={{
                  width: '100%',
                  border: `2px solid ${COLORS.BORDER}`,
                  borderRadius: 10,
                  boxShadow: 'none',
                  padding: 0,
                  backgroundColor: COLORS.BACKGROUND,
                }}
                bodyStyle={{ 
                  padding: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
                {/* Заголовок тарифа */}
                <div style={{ 
                  padding: '32px 24px',
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  borderBottom:`2px solid ${COLORS.BORDER}`,
                  borderRadius:20,
                  textAlign: 'left',
                  position: 'relative',
                }}>
                  <Title level={2} style={{ 
                    margin: 0, 
                    color: COLORS.BUTTON_TEXT,
                    fontSize: '24px',
                    fontWeight: 600,
                    letterSpacing: '0.3px',
                  }}>
                    {tariff.name}
                  </Title>
                  
                  
                </div>
                
                {/* Список возможностей */}
                <div style={{ 
                  padding: '24px',
                  flex: 1,
                }}>
                  <List
                    dataSource={tariff.features}
                    renderItem={(item, index) => (
                      <List.Item style={{ 
                        padding: '12px 0',
                        border: 'none',
                        borderBottom: index < tariff.features.length - 1 ? `0px solid ${COLORS.BORDER}40` : 'none',
                        
                      }}>
                        <Space align="start" style={{ width: '100%' }}>
                          <CheckOutlined style={{ 
                            color: tariff.color, 
                            fontSize: '16px',
                            marginTop: '2px',
                            flexShrink: 0,
                          }} />
                          <Text style={{ 
                            fontSize: '14px', 
                            color: COLORS.TEXT,
                            lineHeight: 1.5,
                            letterSpacing: '0.2px',
                          }}>
                            {item}
                          </Text>
                        </Space>
                      </List.Item>
                    )}
                    style={{ margin: 0 }}
                  />
                </div>
                
                {/* Кнопка */}
                <div style={{ 
                  padding: '20px 24px',
                  textAlign: 'center',
                }}>
                  <Button
                    type="primary"
                    block
                    size="large"
                    onClick={handleTariffClick(tariff.name)}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderColor: '#d45b5bff',
                      color: '#d45b5bff',
                      borderRadius: 5,
                      height: '56px',
                      fontSize: '16px',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      transition: 'none',
                      
                    }}
                    onMouseEnter={(e) => {
                      
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = `0 4px 12px ${tariff.color}40`;
                    }}
                    onMouseLeave={(e) => {
                      
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {tariff.buttonText}
                  </Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        
       
        <div style={{ 
        margin: '40px 0',
        textAlign: 'center',
        }}>
        <div style={{ 
            fontSize: '15px',
            fontWeight: 400,
            color: 'rgba(145, 133, 149, 1)',
            marginBottom: '12px',
        }}>
            Вам не подходят наши тарифы? Оставьте заявку и мы предложим вам индивидуальные условия!
        </div>
            <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                alert('+++');
            }}
            style={{
                color: COLORS.TEXT, 
                textDecoration: 'none',
                fontSize: '13px',
                borderBottom: `1px solid ${COLORS.TEXT}`, 
                paddingBottom: '2px',
            }}
        >
            получить индивидуальный тариф
        </a>
        </div>
                
       
      </div> 


        {/*------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
       {/*блок наши профессионалы */}
        <div style={{ 
        padding: '40px 20px', 
        maxWidth: 1200, 
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: '#f8f5f5ff', // Светло-серый фон всей страницы
      }}>
          {/* Заголовок блока */}
          <div style={{ 
          textAlign: 'center',
          marginBottom: '48px',
          }}>
          <div style={{ 
            fontSize: '28px',
            fontWeight: 600,
            color: '#1d1d1d',
            marginBottom: '16px',
            lineHeight: 1.3,
          }}>
            Наши профессиональные разработчики быстро выполняют любые задачи!
          </div>
          
          </div>
        
          {/* Сетка услуг */}
          <Row 
            gutter={[32, 15]}
            justify="center"
            
          >
            {/* Услуга 1 */}
            <Col xs={24} md={8}>
              <div style={{ 
                borderRadius: '8px',
                padding: '32px 24px',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                backgroundColor: '#f8f5f5ff',
              }}
              
              >
                {/* Иконка */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                }}>
                  <img 
                    src={ico1} 
                    alt="Иконка услуги"
                    style={{ 
                    width: '100px', 
                    height: '100px',
                    objectFit: 'contain'
                    }}
                    />
                </div>


                {/* Время */}
                <div style={{ 
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#000000ff',
                  marginBottom: '8px',
                }}>
                  от 1ч
                </div>
                
                
                {/* Название услуги */}
                <div style={{ 
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#6f6e6eff',
                  lineHeight: 1.4,
                  minHeight: '50px',
                }}>
                  Настройка события GA в 
                  интернет-магазине
                </div>
                
              </div>
            </Col>
            
            {/* Услуга 2 */}
            <Col xs={24} md={8}>
              <div style={{
              
                borderRadius: '8px',
                padding: '32px 24px',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                backgroundColor: '#f8f5f5ff',
              }}
              
              >
                {/* Иконка */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                }}>
                  <img 
                    src={ico2} 
                    alt="Иконка услуги"
                    style={{ 
                    width: '100px', 
                    height: '100px',
                    objectFit: 'contain'
                    }}
                    />
                </div>

                {/* Время */}
                <div style={{ 
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#000000ff',
                  marginBottom: '8px',
                }}>
                  от 20ч
                </div>
                
                {/* Название услуги */}
                <div style={{ 
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#6f6e6eff',
                  lineHeight: 1.4,
                  minHeight: '50px',
                }}>
                  Разработка мобильной версии сайта
                </div>
                
                
              </div>
            </Col>
            
            {/* Услуга 3 */}
            <Col xs={24} md={8}>
              <div style={{
                
                borderRadius: '8px',
                padding: '32px 24px',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                backgroundColor: '#f8f5f5ff',
              }}
            
              >
                {/* Иконка */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                }}>
                  <img 
                    src={ico3} 
                    alt="Иконка услуги"
                    style={{ 
                    width: '100px', 
                    height: '100px',
                    objectFit: 'contain'
                    }}
                    />
                </div>

                {/* Время */}
                <div style={{ 
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#000000ff',
                  marginBottom: '8px',
                }}>
                  от 8ч
                </div>
                
                {/* Название услуги */}
                <div style={{ 
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#6f6e6eff',
                  lineHeight: 1.4,
                  minHeight: '50px',
                }}>
                  Интеграция модуля оплаты
                </div>
                
              
                </div>
              </Col>
          </Row>
      </div>


      {/*-----------------------------------------------------------------------------------------------------------------------------------------*/}
      {/* БЛОК: КОМАНДА */}
      <div style={{
        padding: '40px 20px', 
        maxWidth: 1200, 
        margin: '0 auto',
        minHeight: '100vh',
        backgroundColor: '#f8f5f5ff', // Светло-серый фон всей страницы
      }}>

         {/* ЗАГОЛОВОК БЛОКА */}
              <div style={{ 
                textAlign: 'center',
                marginBottom: '48px',
              }}>
                <div style={{ 
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#1d1d1d',
                  marginBottom: '16px',
                }}>
                  Команда
                </div>
              </div>
              
              {/* СЕТКА КОМАНДЫ */}
              <Row 
                gutter={[12, 18]} // Отступы между карточками
                justify="center"
              >
                {/* КАРТОЧКА 1*/}
                <Col xs={24} md={12} lg={8}>
                  <div style={{
                    textAlign: 'center',
                    padding: '24px',
                  }}>
                    {/* ФОТОГРАФИЯ */}
                    <div style={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#f5f5f5', // Заглушка для фото
                      margin: '0 auto 20px',
                      overflow: 'hidden',
                    }}>
                       <img 
                        src={p1}
                        alt="Сергей Синица"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                    
                    {/* ИМЯ */}
                    <div style={{ 
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#1d1d1d',
                      marginBottom: '8px',
                    }}>
                      Сергей Синица
                    </div>
                    
                    {/* ДОЛЖНОСТЬ */}
                    <div style={{ 
                      fontSize: '14px',
                      color: '#565151ff',
                      marginBottom: '12px',
                      fontWeight: 600,
                    }}>
                      Руководитель отдела веб-разработки, канд. техн. наук, зам. директора
                    </div>
                  </div>
                </Col>
                
                {/* КАРТОЧКА 2 */}
                <Col xs={24} md={12} lg={8}>
                  <div style={{
                    textAlign: 'center',
                    padding: '24px',
                  }}>
                    {/* ФОТОГРАФИЯ */}
                    <div style={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#f5f5f5', // Заглушка для фото
                      margin: '0 auto 20px',
                      overflow: 'hidden',
                    }}>
                       <img 
                        src={p2}
                        alt="Алексей Синица"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                    
                    {/* ИМЯ */}
                    <div style={{ 
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#1d1d1d',
                      marginBottom: '8px',
                    }}>
                      Алексей Синица
                    </div>
                    
                    {/* ДОЛЖНОСТЬ */}
                    <div style={{ 
                      fontSize: '14px',
                      color: '#565151ff',
                      marginBottom: '12px',
                      fontWeight: 600,
                    }}>
                      Руководитель отдела поддержки сайтов
                    </div>
                  </div>
                </Col>
                
                {/* КАРТОЧКА 3 */}
                <Col xs={24} md={12} lg={8}>
                  <div style={{
                    textAlign: 'center',
                    padding: '24px',
                  }}>
                    {/* ФОТОГРАФИЯ */}
                    <div style={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#f5f5f5', // Заглушка для фото
                      margin: '0 auto 20px',
                      overflow: 'hidden',
                    }}>
                       <img 
                        src={p3}
                        alt="Дарья Бочкарёва"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                    
                    {/* ИМЯ */}
                    <div style={{ 
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#1d1d1d',
                      marginBottom: '8px',
                    }}>
                      Дарья Бочкарёва
                    </div>
                    
                    {/* ДОЛЖНОСТЬ */}
                    <div style={{ 
                      fontSize: '14px',
                      color: '#565151ff',
                      marginBottom: '12px',
                      fontWeight: 600,
                    }}>
                      Руководитель отдела продвижения, конт. рекламы и контент-поддержки сайтов
                    </div>
                  </div>
                </Col>
                
                {/* КАРТОЧКА 4 */}
                <Col xs={24} md={12} lg={8}>
                  <div style={{
                    textAlign: 'center',
                    padding: '24px',
                  }}>
                    {/* ФОТОГРАФИЯ */}
                    <div style={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#f5f5f5', // Заглушка для фото
                      margin: '0 auto 20px',
                      overflow: 'hidden',
                    }}>
                       <img 
                        src={p4}
                        alt="Роман Агабеков"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                    
                    {/* ИМЯ */}
                    <div style={{ 
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#1d1d1d',
                      marginBottom: '8px',
                    }}>
                      Роман Агабеков
                    </div>
                    
                    {/* ДОЛЖНОСТЬ */}
                    <div style={{ 
                      fontSize: '14px',
                      color: '#565151ff',
                      marginBottom: '12px',
                      fontWeight: 600,
                    }}>
                      Руководитель отдела DevOPS, директор
                    </div>
                  </div>
                </Col>
                
                {/* КАРТОЧКА 5 */}
                <Col xs={24} md={12} lg={8}>
                  <div style={{
                    textAlign: 'center',
                    padding: '10px',
                  }}>
                    {/* ФОТОГРАФИЯ */}
                    <div style={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#f5f5f5', // Заглушка для фото
                      margin: '0 auto 20px',
                      overflow: 'hidden',
                    }}>
                       <img 
                        src={p5}
                        alt="Ирина Торкунова"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                    
                    {/* ИМЯ */}
                    <div style={{ 
                      fontSize: '20px',
                      fontWeight: 700,
                      color: '#1d1d1d',
                      marginBottom: '8px',
                    }}>
                      Ирина Торкунова
                    </div>
                    
                    {/* ДОЛЖНОСТЬ */}
                    <div style={{ 
                      fontSize: '14px',
                      color: '#565151ff',
                      marginBottom: '12px',
                      fontWeight: 600,
                    }}>
                      Менеджер по работе с клиентами
                    </div>
                  </div>
                </Col>
                
              </Row>
              
              {/* КНОПКА "ВСЯ КОМАНДА" */}
              <div style={{ 
                textAlign: 'center',
                marginTop: '30px',
                
              }}>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    alert('тут ничего нет');
                  }}
                  style={{
                    display: 'inline-block',
                    fontSize: '16px',
                    fontWeight: 600,
                    color: '#4e4a4aff',
                    backgroundColor: 'transparent',
                    textDecoration: 'none',
                    padding: '12px 40px',
                    border: '3px solid #cebabaff',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  ВСЯ КОМАНДА
                </button>
              </div>
      </div>
            
      
              {/*--------------------------------------------------------------------------------------------------------------------*/}
              {/* БЛОК: ПОСЛЕДНИЕ КЕЙСЫ */}
              <div style={{
                padding: '40px 20px', 
                maxWidth: 1200, 
                margin: '0 auto',
                minHeight: '100vh',
                backgroundColor: '#f8f5f5ff', // Светло-серый фон всей страницы
              }}>
                
                {/* ЗАГОЛОВОК БЛОКА */}
                <div style={{ 
                  textAlign: 'center',
                  marginBottom: '48px',
                }}>
                  <div style={{ 
                    fontSize: '32px',
                    fontWeight: 700,
                    color: '#1d1d1d',
                    marginBottom: '3px',
                  }}>
                    Последние кейсы
                  </div>
                </div>
                
                {/* СЕТКА КЕЙСОВ */}
                <Row 
                  gutter={[24, 24]}
                  justify="center"
                >
                  
                  {/* КЕЙС 1 */}
                  <Col xs={24} md={12} lg={8}>
                    <div style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #eee',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      height: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    >
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Кейс 1');
                        }}
                        style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                      >
                        {/* Изображение */}
                        <div style={{
                          height: '200px',
                          backgroundImage: `url(${case1})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }} />
                        
                        {/* Контент */}
                        <div style={{ padding: '24px' }}>
                          <div style={{ 
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#1d1d1d',
                            marginBottom: '12px',
                            lineHeight: 1.4,
                          }}>
                            Настройка кэширования данных.<br />Апгрейд сервера. Ускорение работы сайта в 30 раз!
                          </div>
                          
                          <div style={{ 
                            fontSize: '13px',
                            color: '#4f4141ff',
                            marginBottom: '12px',
                            fontWeight: 500,
                          }}>
                            04.05.2020
                          </div>
                          
                          <div style={{ 
                            fontSize: '14px',
                            color: '#666666',
                            lineHeight: 1.5,
                          }}>
                            Влияние скорости загрузки страниц сайта на отказы и конверсии. Кейс ускорения...
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                  
                  {/* КЕЙС 2 */}
                  <Col xs={24} md={12} lg={8}>
                    <div style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #eee',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      height: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    >
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Кейс 2');
                        }}
                        style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                      >
                        {/* Изображение с текстом */}
                        <div style={{
                          height: '400px',
                          backgroundImage: `url(${case2})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'flex-end',
                        }}>
                          <div style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: '#ffffff',
                            padding: '20px',
                            width: '100%',
                          }}>
                            <div style={{ 
                              fontSize: '18px',
                              fontWeight: 600,
                              lineHeight: 1.4,
                            }}>
                              Использование отчетов Ecommerce в Яндекс.Метрике
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                  
                  {/* КЕЙС 3  */}
                  <Col xs={24} md={12} lg={8}>
                    <div style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #eee',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      height: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    >
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Кейс 3');
                        }}
                        style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                      >
                        {/* Изображение с текстом */}
                        <div style={{
                          height: '400px',
                          backgroundImage: `url(${case3})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'flex-end',
                        }}>
                          <div style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: '#ffffff',
                            padding: '20px',
                            width: '100%',
                          }}>
                            <div style={{ 
                              fontSize: '18px',
                              fontWeight: 600,
                              lineHeight: 1.4,
                            }}>
                              Повышение конверсии страницы с формой заявки с применением AB-тестирования
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                  
                  {/* КЕЙС 4 */}
                  <Col xs={24} md={12} lg={8}>
                    <div style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #eee',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      position: 'relative',
                      height: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    >
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Кейс 4');
                        }}
                        style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                      >
                        {/* Изображение с текстом */}
                        <div style={{
                          height: '400px',
                          backgroundImage: `url(${case4})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          position: 'relative',
                          display: 'flex',
                          alignItems: 'flex-end',
                        }}>
                          <div style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.7)',
                            color: '#ffffff',
                            padding: '20px',
                            width: '100%',
                          }}>
                            <div style={{ 
                              fontSize: '18px',
                              fontWeight: 600,
                              lineHeight: 1.4,
                            }}>
                              Drupal 7: ускорение времени генерации страниц интернет-магазина на 32%
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                  
                  {/* КЕЙС 5 */}
                  <Col xs={24} md={12} lg={8}>
                    <div style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #eee',
                      borderRadius: '8px',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      height: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                    >
                      <a 
                        href="#" 
                        onClick={(e) => {
                          e.preventDefault();
                          alert('Кейс 5');
                        }}
                        style={{ textDecoration: 'none', color: 'inherit', display: 'block', height: '100%' }}
                      >
                        {/* Изображение */}
                        <div style={{
                          height: '200px',
                          backgroundImage: `url(${case5})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                        }} />
                        
                        {/* Контент */}
                        <div style={{ padding: '24px' }}>
                          <div style={{ 
                            fontSize: '18px',
                            fontWeight: 600,
                            color: '#1d1d1d',
                            marginBottom: '12px',
                            lineHeight: 1.4,
                          }}>
                            Обмен товарами и заказами интернет-магазинов на Drupal 7 с 1С: Предприятие, МойСклад, Класс365
                          </div>
                          
                          <div style={{ 
                            fontSize: '13px',
                            color: '#4f4141ff',
                            marginBottom: '12px',
                            fontWeight: 500,
                          }}>
                            22.08.2019
                          </div>
                          
                          <div style={{ 
                            fontSize: '14px',
                            color: '#666666',
                            lineHeight: 1.5,
                          }}>
                            Опубликован{' '}
                            <span style={{ color: '#5b75d4ff', fontWeight: 500 }}>
                              релиз модуля...
                            </span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                  
                </Row>
                
                
              </div>
                    




    </ConfigProvider>
  );
}

export default Sasha;