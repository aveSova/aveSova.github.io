import { useEffect, useState } from "react";
import g1 from '../../assets/D-flying.svg';
import g2 from '../../assets/D2.svg';
import g3 from '../../assets/icon1.png';
import g4 from '../../assets/icon2.png';
import g5 from '../../assets/icon5.png';
import g6 from '../../assets/icon4.png';
export default function SupportForm() {
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

  // ===== ВОССТАНОВЛЕНИЕ ИЗ LOCALSTORAGE =====
  useEffect(() => {
    const saved = localStorage.getItem("supportForm");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // ===== СОХРАНЕНИЕ В LOCALSTORAGE =====
  useEffect(() => {
    localStorage.setItem("supportForm", JSON.stringify(formData));
  }, [formData]);

  // ===== ЧТЕНИЕ ?sent=true ИЗ URL =====
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("sent") === "true") {
      setSent(true);
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ===== ВАЛИДАЦИЯ =====
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

  // ===== ОТПРАВКА ФОРМЫ =====
  const handleSubmit = async () => {
    setError("");
    setSent(false);

    if (!validateForm()) return;

    setLoading(true);

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка сервера");
      }

      await response.json();

      setSent(true);

      const url = new URL(window.location);
      url.searchParams.set("sent", "true");
      window.history.pushState({}, "", url);

      setFormData({
        name: "",
        phone: "",
        email: "",
        comment: "",
      });

      setAgreed(false);
      localStorage.removeItem("supportForm");
    } catch (err) {
      setError("Ошибка отправки. Пожалуйста, попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="support">
      <div className="support__decor">
      <img src={g1} alt="" className="support_image1" />
      <img src={g2} alt="" className="support_image2" />
      </div>
      <div className="support__wrapper">
        {/* Левая колонка */}
        <div className="support__content">
          <h1 className="support__title">
            Оставить заявку на поддержку сайта
          </h1>

          <p className="support__text">
            Срочно нужна поддержка сайта? Ваша команда не успевает справиться
            самостоятельно или предыдущий подрядчик не справился с работой?
            Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами
            свяжется!
          </p>

          <div className="support__contacts">
            <div className="support__phone">8 800 222-26-73</div>
            <div className="support__email">info@drupal-coder.ru</div>
          </div>
        </div>

        {/* Правая колонка */}
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
            <span>
              Отправляя заявку, я даю согласие на{" "}
              <a
                href="#"
                style={{ color: "#a00505ff", textDecoration: "underline" }}
              >
                обработку своих персональных данных
              </a>
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
      </div>

      <div className="support__divider"></div>

      <div className="support__bottom">
        <div className="support__socials">
          <img src={g3} alt="" className="support__icon" />
          <img src={g4} alt="" className="support__icon" />
          <img src={g5} alt="" className="support__icon" />
          <img src={g6} alt="" className="support__icon" />
        </div>

        <footer className="support__footer">
          Проект ООО «Инитлаб», Краснодар, Россия.
          <br />
          Drupal является зарегистрированной торговой маркой Dries Buytaert.
        </footer>
      </div>
    </section>
  );
}
