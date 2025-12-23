import './Styles/Seva.css';
import c1 from '../assets/competency-1.svg';
import c2 from '../assets/competency-2.svg';
import c3 from '../assets/competency-3.svg';
import c4 from '../assets/competency-4.svg';
import c5 from '../assets/competency-5.svg';
import c6 from '../assets/competency-6.svg';
import c7 from '../assets/competency-7.svg';
import c8 from '../assets/competency-8.svg';
import Service from './Mini-components/Service.jsx';

const items = [
    {
        key: 1,
        img: c1, 
        description: 'Добавление информации на сайт, создание новых разделов'
    },
    {
        key: 2,
        img: c2, 
        description: 'Разработка и оптимизация модулей сайта'
    },
    {
        key: 3,
        img: c3, 
        description: 'Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами'
    },
    {
        key: 4,
        img: c4, 
        description: 'Любые доработки функционала и дизайна'
    },
    {
        key: 5,
        img: c5, 
        description: 'Аудит и мониторинг безопасности Drupal сайтов'
    },
    {
        key: 6,
        img: c6, 
        description: 'Миграция, импорт контента и апгрейд Drupal'
    },
    {
        key: 7,
        img: c7, 
        description: 'Оптимизация и ускорение Drupal-сайтов'
    },
    {
        key: 8,
        img: c8,
        description: 'Веб-маркетинг, консультации и работы по SEO'
    }
]

const Services = () => {
    return (
        <>
            <div className='bigger'>
                <div style={{maxWidth: '50%'}}>
                    <h2 className='heading'>13 лет совершенствуем компетенции в Drupal поддержке!</h2>
                    <p className='subtext'>Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн</p>
                </div>

                <div className='list'>
                    {items.map(item => (<Service key={item.key} img={item.img} description={item.description} />))}
                </div>
            </div>
        </>
    )
}

export default Services;