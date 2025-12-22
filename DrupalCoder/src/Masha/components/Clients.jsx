import React from "react";

const logos = [
    "/src/assets/logo_0.png",
    "/src/assets/logo.pn",
    "/src/assets/logo3.png",
    "/src/assets/logo6.png",
    "/src/assets/logo_2.png",
    "/src/assets/lpcma_rus_v4.jpg",
    "/src/assets/nashagazeta_ch.png",
    "/src/assets/logo-estee.png",
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
