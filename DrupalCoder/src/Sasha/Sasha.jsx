import React, { useState } from 'react';
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import './style.css';
import '../Masha/Masha.css';

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
  Tag,
  Grid,
  Modal
} from 'antd';
import {
  CheckOutlined,
  MessageOutlined,
  PhoneOutlined,
  MailOutlined,
  CloseOutlined
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const COLORS = {
  ORANGE: '#F14D34',
  BORDER: '#E6E6E6',
  TEXT: '#333333',
  TEXT_SECONDARY: 'rgba(255, 255, 255, 0.8)',
  BACKGROUND: '#FFFFFF',
  BUTTON_TEXT: '#F14D34',
};

const customTheme = {
  token: {
    colorPrimary: COLORS.ORANGE,
    borderRadius: 5,
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
    },
    Modal: {
      contentBg: 'black',
      titleColor: 'white',
    }
  },
};

const tariffs = [
  {
    id: 1,
    name: 'Стартовый',
    color: '#F69C8F',
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
    color: '#F69C8F',
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
    color: '#F69C8F',
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
  {/*Форма*/}
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [agreed, setAgreed] = useState(false);

  // Восстановление из localStorage
  useEffect(() => {
    const saved = localStorage.getItem("supportForm");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Сохранение в localStorage
  useEffect(() => {
    localStorage.setItem("supportForm", JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      setError("Пожалуйста, заполните все обязательные поля");
      return false;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Введите корректный email");
      return false;
    }

    if (formData.phone.replace(/\D/g, "").length < 10) {
      setError("Введите корректный номер телефона");
      return false;
    }

    if (!agreed) {
      setError("Необходимо согласиться на обработку персональных данных");
      return false;
    }

    return true;
  };

  const handleSubmit = async () => {
    setError("");
    setSent(false);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        fd.append(key, value);
      });

      await fetch("https://formcarry.com/s/49Y0gT8YujF", {
        method: "POST",
        body: fd,
      });

      setSent(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        comment: "",
      });
      setAgreed(false);
      localStorage.removeItem("supportForm");
      navigate("?sent=true", { replace: true });

    } catch (err) {
      setError("Ошибка отправки. Пожалуйста, попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("sent") === "true") {
      setSent(true);
    }
  }, [location.search]);
  {/*=================================================================================================================*/}

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTariff, setSelectedTariff] = useState(null);

  const handleTariffClick = (tariff) => (e) => {
    e.preventDefault();
    setSelectedTariff(tariff);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setSelectedTariff(null);
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
      <Modal
        title={
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: '20px', fontWeight: 'bold' }}>
              {selectedTariff ? `Свяжитесь с нами по тарифу "${selectedTariff.name}"` : 'Свяжитесь с нами'}
            </div>
            <Button 
              type="text" 
              icon={<CloseOutlined />} 
              onClick={handleCloseModal}
              style={{ marginLeft: 'auto', color: 'white' }}
            />
          </div>
        }
        open={modalVisible}
        onCancel={handleCloseModal}
        footer={null}
        width={600}
        centered
        styles={{
          body: { padding: '24px' },
          header: { borderBottom: '1px solid #f0f0f0', padding: '16px 24px', marginBottom: 0 },
        }}
      >
        <form className="support__form">
          <input
            className="support__input"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            className="support__input"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            className="support__input"
            name="email"
            placeholder="E-mail"
            value={formData.email}
            onChange={handleChange}
          />

          <textarea
            className="support__textarea"
            name="comment"
            placeholder="Ваш комментарий"
            value={formData.comment}
            onChange={handleChange}
          />

          <label className="support__agree">
            <input
              type="checkbox"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className="support__agree-text">
              Отправляя заявку, я даю согласие на{" "}
              <a href="#">обработку своих персональных данных</a>
            </span>
          </label>
          
          {error && <div className="support__error">{error}</div>}

          <button
            type="button"
            className="support__button"
            disabled={loading}
            onClick={handleSubmit}
          >
            {loading ? "Отправка..." : "Связаться с нами!"}
          </button>

          {sent && (
            <div className="support__success">
              Заявка успешно отправлена.
            </div>
          )}
        </form>
      </Modal>

      <div
        className='repeater'
        style={{
          padding: '40px 20px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundImage: `url(${logoF})`,
          backgroundPosition: 'right top',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 30 }}>
          <Title
            level={1}
            style={{
              color: 'rgba(0, 0, 0, 1)',
              fontSize: '42px',
              marginBottom: 4,
              fontWeight: 700,
              letterSpacing: '0.5px',
            }}
          >
            Тарифы
          </Title>
          <div
            style={{
              width: '0px',
              height: '0px',
              backgroundColor: COLORS.ORANGE,
              margin: '0 auto 24px',
            }}
          />
        </div>

        <Row
          gutter={[8, 8]}
          justify="center"
          style={{ marginBottom: 80 }}
        >
          {tariffs.map((tariff) => (
            <Col
              key={tariff.id}
              xs={24}
              md={7}
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Card
                bordered
                hoverable={false}
                style={{
                  width: '350px',
                  border: `2px solid ${COLORS.BORDER}`,
                  borderRadius: 10,
                  boxShadow: 'none',
                  padding: 0,
                  backgroundColor: COLORS.BACKGROUND,
                  transition: 'all 0.3s ease',
                  transform: 'scale(1)',
                }}
                bodyStyle={{
                  padding: '0',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '520px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.zIndex = '10';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.zIndex = '1';
                }}
              >
                <div
                  style={{
                    padding: '28px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    textAlign: 'left',
                    position: 'relative',
                  }}
                >
                  <Title
                    level={2}
                    style={{
                      margin: 0,
                      color: COLORS.BUTTON_TEXT,
                      fontSize: '22px',
                      fontWeight: 600,
                      letterSpacing: '0.3px',
                    }}
                  >
                    {tariff.name}
                  </Title>
                  <Divider style={{ width: '5px', margin: '12px 0' }} />
                </div>

                <div style={{ padding: '20px', flex: 1 }}>
                  <List
                    dataSource={tariff.features}
                    renderItem={(item, index) => (
                      <List.Item
                        style={{
                          padding: '10px 0',
                          border: 'none',
                          borderBottom: index < tariff.features.length - 1 ? `0px solid ${COLORS.BORDER}40` : 'none',
                        }}
                      >
                        <Space align="start" style={{ width: '100%' }}>
                          <CheckOutlined
                            style={{
                              color: '#F69C8F',
                              fontSize: '15px',
                              marginTop: '2px',
                              flexShrink: 0,
                            }}
                          />
                          <Text
                            style={{
                              fontSize: '13px',
                              color: '#505571',
                              lineHeight: 1.4,
                              letterSpacing: '0.1px',
                            }}
                          >
                            {item}
                          </Text>
                        </Space>
                      </List.Item>
                    )}
                    style={{ margin: 0 }}
                  />
                </div>

                <div
                  style={{
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: '#ffffffff',
                  }}
                >
                  <Button
                    type="primary"
                    block
                    size="large"
                    onClick={handleTariffClick(tariff)}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      borderColor: '#F14D34',
                      color: '#F14D34',
                      borderRadius: 5,
                      height: '48px',
                      fontSize: '15px',
                      fontWeight: 600,
                      letterSpacing: '0.5px',
                      textTransform: 'uppercase',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#F14D34';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 1)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(241, 77, 52, 0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 1)';
                      e.currentTarget.style.color = '#F14D34';
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

        <div style={{ margin: '40px 0', textAlign: 'center' }}>
          <div
            style={{
              fontSize: '15px',
              fontWeight: 400,
              color: 'rgba(145, 133, 149, 1)',
              marginBottom: '12px',
            }}
          >
            Вам не подходят наши тарифы? Оставьте заявку и мы <br />предложим вам индивидуальные условия!
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
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F14D34';
              e.currentTarget.style.borderBottomColor = '#F14D34';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = COLORS.TEXT;
              e.currentTarget.style.borderBottomColor = COLORS.TEXT;
            }}
          >
            получить индивидуальный тариф
          </a>
        </div>
      </div>

      <div
        style={{
          padding: '40px 20px',
          maxWidth: 1200,
          margin: '0 auto',
          minHeight: '20vw',
          backgroundColor: '#ffffffff',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              fontSize: '28px',
              fontWeight: 600,
              color: '#1d1d1d',
              marginBottom: '16px',
              lineHeight: 1.3,
            }}
          >
            Наши профессиональные разработчики быстро выполняют любые задачи!
          </div>
        </div>

        <Row gutter={[32, 15]} justify="center">
          <Col xs={24} md={8}>
            <div
              style={{
                borderRadius: '8px',
                padding: '32px 24px',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffffff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                }}
              >
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

              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#000000ff',
                  marginBottom: '8px',
                }}
              >
                от 1ч
              </div>

              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#6f6e6eff',
                  lineHeight: 1.4,
                  minHeight: '50px',
                }}
              >
                Настройка события GA в интернет-магазине
              </div>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div
              style={{
                borderRadius: '8px',
                padding: '32px 24px',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffffff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                }}
              >
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

              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#000000ff',
                  marginBottom: '8px',
                }}
              >
                от 20ч
              </div>

              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#6f6e6eff',
                  lineHeight: 1.4,
                  minHeight: '50px',
                }}
              >
                Разработка мобильной версии сайта
              </div>
            </div>
          </Col>

          <Col xs={24} md={8}>
            <div
              style={{
                borderRadius: '8px',
                padding: '32px 24px',
                textAlign: 'center',
                height: '100%',
                transition: 'all 0.3s ease',
                backgroundColor: '#ffffffff',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '64px',
                  height: '64px',
                  borderRadius: '12px',
                  margin: '0 auto 20px',
                  fontSize: '28px',
                }}
              >
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

              <div
                style={{
                  fontSize: '32px',
                  fontWeight: 700,
                  color: '#000000ff',
                  marginBottom: '8px',
                }}
              >
                от 8ч
              </div>

              <div
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#6f6e6eff',
                  lineHeight: 1.4,
                  minHeight: '50px',
                }}
              >
                Интеграция модуля оплаты
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div
        style={{
          padding: '40px 20px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: '#ffffffff',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px', width: '100%' }}>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1d1d1d',
              marginBottom: '16px',
            }}
          >
            Команда
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Row
            gutter={[32, 32]}
            justify="start"
            style={{ maxWidth: '1200px' }}
          >
            <Col xs={24} md={12} lg={8} xl={6}>
              <div
                style={{
                  textAlign: 'left',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '250px',
                  justifySelf: 'center',
                }}
              >
                <div
                  style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: '#ffffffff',
                    margin: '0 auto 20px',
                    overflow: 'hidden',
                  }}
                >
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

                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#1d1d1d',
                    marginBottom: '8px',
                    textAlign: 'left',
                  }}
                >
                  Сергей Синица
                </div>

                <div
                  style={{
                    fontSize: '14px',
                    color: '#565151ff',
                    marginBottom: '12px',
                    fontWeight: 600,
                    maxWidth: '300px',
                    lineHeight: '1.4',
                  }}
                >
                  Руководитель отдела веб-разработки, канд. техн. наук, зам. директора
                </div>
              </div>
            </Col>

            <Col xs={24} md={12} lg={8} xl={6}>
              <div
                style={{
                  textAlign: 'left',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '250px',
                  justifySelf: 'center',
                }}
              >
                <div
                  style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: '#ffffffff',
                    margin: '0 auto 20px',
                    overflow: 'hidden',
                  }}
                >
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

                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#1d1d1d',
                    marginBottom: '8px',
                    textAlign: 'left',
                  }}
                >
                  Алексей Синица
                </div>

                <div
                  style={{
                    fontSize: '14px',
                    color: '#565151ff',
                    marginBottom: '12px',
                    fontWeight: 600,
                    maxWidth: '300px',
                    lineHeight: '1.4',
                  }}
                >
                  Руководитель отдела поддержки сайтов
                </div>
              </div>
            </Col>

            <Col xs={24} md={12} lg={8} xl={6}>
              <div
                style={{
                  textAlign: 'left',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '250px',
                  justifySelf: 'center',
                }}
              >
                <div
                  style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: '#ffffffff',
                    margin: '0 auto 20px',
                    overflow: 'hidden',
                  }}
                >
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

                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#1d1d1d',
                    marginBottom: '8px',
                  }}
                >
                  Дарья Бочкарёва
                </div>

                <div
                  style={{
                    fontSize: '14px',
                    color: '#565151ff',
                    marginBottom: '12px',
                    fontWeight: 600,
                    maxWidth: '300px',
                    lineHeight: '1.4',
                  }}
                >
                  Руководитель отдела продвижения, конт. рекламы и контент-поддержки сайтов
                </div>
              </div>
            </Col>

            <Col xs={24} md={12} lg={8} xl={6}>
              <div
                style={{
                  textAlign: 'left',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '250px',
                  justifySelf: 'center',
                }}
              >
                <div
                  style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: '#ffffffff',
                    margin: '0 auto 20px',
                    overflow: 'hidden',
                  }}
                >
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

                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#1d1d1d',
                    marginBottom: '8px',
                  }}
                >
                  Роман Агабеков
                </div>

                <div
                  style={{
                    fontSize: '14px',
                    color: '#565151ff',
                    marginBottom: '12px',
                    fontWeight: 600,
                    maxWidth: '300px',
                    lineHeight: '1.4',
                  }}
                >
                  Руководитель отдела DevOPS, директор
                </div>
              </div>
            </Col>

            <Col xs={24} md={12} lg={8} xl={6}>
              <div
                style={{
                  textAlign: 'left',
                  padding: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  maxWidth: '250px',
                  justifySelf: 'center',
                }}
              >
                <div
                  style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: '#ffffffff',
                    margin: '0 auto 20px',
                    overflow: 'hidden',
                  }}
                >
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

                <div
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: '#1d1d1d',
                    marginBottom: '8px',
                  }}
                >
                  Ирина Торкунова
                </div>

                <div
                  style={{
                    fontSize: '14px',
                    color: '#565151ff',
                    marginBottom: '12px',
                    fontWeight: 600,
                    maxWidth: '300px',
                    lineHeight: '1.4',
                  }}
                >
                  Менеджер по работе с клиентами
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div style={{ textAlign: 'center', marginTop: '60px', width: '100%' }}>
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
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#f5f5f5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            ВСЯ КОМАНДА
          </button>
        </div>
      </div>

      <div
        style={{
          padding: '40px 20px',
          margin: '0 auto',
          minHeight: '100vh',
          backgroundColor: '#ffffffff',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: '#1d1d1d',
              marginBottom: '3px',
            }}
          >
            Последние кейсы
          </div>
        </div>

        <div className="cases-container">
          <div className="case-1"
            onMouseEnter={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                alert('Кейс 1');
              }}
              style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
              }}
            >
              <div style={{
                height: '200px',
                backgroundImage: `url(${case1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                flexShrink: 0,
              }} />
              
              <div style={{ 
                padding: '24px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}>
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
                  flex: 1,
                }}>
                  Влияние скорости загрузки страниц сайта на конверсии...
                </div>
              </div>
            </a>
          </div>

          <div className="case-2"
            onMouseEnter={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                alert('Кейс 2');
              }}
              style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                display: 'block', 
                height: '100%',
              }}
            >
              <div style={{
                height: '100%',
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
                  padding: '30px',
                  width: '100%',
                }}>
                  <div style={{ 
                    fontSize: '24px',
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}>
                    Использование отчетов Ecommerce в Яндекс.Метрике
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="case-3"
            onMouseEnter={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                alert('Кейс 3');
              }}
              style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                display: 'block', 
                height: '100%',
              }}
            >
              <div style={{
                height: '100%',
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

          <div className="case-4"
            onMouseEnter={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                alert('Кейс 4');
              }}
              style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                display: 'block', 
                height: '100%',
              }}
            >
              <div style={{
                height: '100%',
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

          <div className="case-5"
            onMouseEnter={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.1)';
              }
            }}
            onMouseLeave={(e) => {
              if (window.innerWidth > 768) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                alert('Кейс 5');
              }}
              style={{ 
                textDecoration: 'none', 
                color: 'inherit', 
                display: 'flex', 
                flexDirection: 'column', 
                height: '100%',
              }}
            >
              <div style={{
                height: '200px',
                backgroundImage: `url(${case5})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                flexShrink: 0,
              }} />
              
              <div style={{ 
                padding: '24px',
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
              }}>
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
                  flex: 1,
                }}>
                  Опубликован{' '}
                  <span style={{ color: '#5b75d4ff', fontWeight: 500 }}>
                    релиз модуля...
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default Sasha;