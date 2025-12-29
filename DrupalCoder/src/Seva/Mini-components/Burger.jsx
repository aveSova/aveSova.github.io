import { MenuOutlined, CloseOutlined, CaretDownOutlined } from '@ant-design/icons';
import { useState, useEffect } from 'react';
import '../Styles/Burger.css';

const Burger = ({ menuData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция для рекурсивного обхода меню и получения всех подпунктов с уровнями вложенности
  const getAllMenuItems = (items, level = 0) => {
    let allItems = [];
    
    items.forEach(item => {
      // Добавляем основной пункт с информацией о уровне вложенности
      const mainItem = { 
        ...item, 
        level,
        hasChildren: item.children && item.children.length > 0
      };
      allItems.push(mainItem);
      
      // Если есть дети, добавляем их с увеличенным уровнем вложенности
      if (item.children && item.children.length > 0) {
        const childItems = getAllMenuItems(item.children, level + 1);
        allItems = [...allItems, ...childItems];
      }
    });
    
    return allItems;
  };

  // Получаем все пункты меню с уровнями вложенности
  const mobileMenuItems = getAllMenuItems(menuData);

  // Блокируем прокрутку при открытом меню
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Закрытие меню при нажатии Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isMenuOpen]);

  const handleMenuItemClick = (itemKey) => {
    
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="burger-container">
      {/* Кнопка для открытия/закрытия меню */}
      <button 
        className="burger-button"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        type="button"
      >
        <MenuOutlined className="burger-icon" />
      </button>
      
      {/* Меню с абсолютным позиционированием */}
      <div 
        className={`burger-overlay ${isMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMenuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Мобильное меню"
        style={{
          bottom: '60px', // Высота навигации
        }}
      >
        {/* Пункты меню */}
        <div className="burger-content">
          {mobileMenuItems.map((item) => (
            <button
              key={`${item.key}-${item.level}`}
              className={`burger-item ${item.level > 0 ? 'nested' : ''}`}
              onClick={() => handleMenuItemClick(item.key)}
              tabIndex={isMenuOpen ? 0 : -1}
              type="button"
              style={{
                paddingLeft: `${16 + (item.level * 16)}px`,
              }}
            >
              <span className="burger-item-text">{item.label}</span>
              {item.hasChildren && item.level === 0 && (
                <CaretDownOutlined className="burger-arrow" />
              )}
            </button>
          ))}
        </div>
      </div>
      
      {/* Затемнение фона */}
      <div 
        className={`burger-backdrop ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        role="presentation"
        aria-hidden="true"
      />
    </div>
  );
};

export default Burger;