import React from "react";
import p1 from '../../assets/logo_0.png';
import p2 from '../../assets/logo.png';
import p3 from '../../assets/logo3.png';
import p4 from '../../assets/nashagazeta_ch.png';
import p5 from '../../assets/logo-estee.png';
import p6 from '../../assets/logo6.png';
import p7 from '../../assets/logo_2.png';
import p8 from '../../assets/lpcma_rus_v4.jpg';

const logos = [
    p1,
    p2,
    p3,
    p6,
    p7,
    p8,
    p4,
    p5,
];

const Row = ({ reverse = false, speed = 40 }) => (
  <div
    className={`clients-row ${reverse ? "reverse" : ""}`}
    style={{ animationDuration: `${speed}s` }}
  >
    {[...logos, ...logos].map((logo, i) => (
      <div className="logo-wrap" key={i}>
        <img src={logo} alt="" />
      </div>
    ))}
  </div>
);

const Clients = () => {
  return (
    <section className="clients">
      <h2 className="clients-title">С нами работают</h2>
      <p className="clients-subtitle">
        Десятки компаний доверяют нам самое ценное, что у них есть в интернете – свои <br></br>
        сайты. Мы делаем всё, чтобы наше сотрудничество было долгим.
    </p>

      <div className="clients-marquee">
        <Row speed={120} />
        <Row reverse speed={160} />
      </div>
    </section>
  );
};

export default Clients;
