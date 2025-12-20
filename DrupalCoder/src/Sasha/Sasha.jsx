import logoF from '../assets/D.svg';
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
  START: '#cb8c8cff', // Темно-зеленый
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
    alert(`Это демо-версия. В реальном приложении здесь будет переход к ${method}`);
  };

  return (
    <ConfigProvider theme={customTheme}>
      <div style={{ 
        padding: '40px 20px', 
        maxWidth: 1200, 
        margin: '0 auto',
        minHeight: '100vh',
       backgroundColor: '#FAFAFA', // Светло-серый фон всей страницы
       //backgroundImage: URL("")/////////////////-------------------------------------------///////////////////////////////
        
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
    </ConfigProvider>
  );
}

export default Sasha;