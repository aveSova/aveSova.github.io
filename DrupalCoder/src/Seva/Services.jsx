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
        img: c1, 
        description: 'Добавление информации на сайт, создание новых разделов'
    },
    {
        img: c2, 
        description: 'Разработка и оптимизация модулей сайта'
    },
    {
        img: c3, 
        description: 'Интеграция с CRM, 1C, платежными системами, любыми веб-сервисами'
    },
    {
        img: c4, 
        description: 'Любые доработки функционала и дизайна'
    },
    {
        img: c5, 
        description: 'Аудит и мониторинг безопасности Drupal сайтов'
    },
    {
        img: c6, 
        description: 'Миграция, импорт контента и апгрейд Drupal'
    },
    {
        img: c7, 
        description: 'Оптимизация и ускорение Drupal-сайтов'
    },
    {
        img: c8,
        description: 'Веб-маркетинг, консультации и работы по SEO'
    }
]

const Services = () => {
    return (
        <>
            <div className='bigger'>
                <h2 className='heading'>13  лет совершенствуем<br/>компетенции в Drupal<br/>поддержке!</h2>
                <p className='subtext'>Разрабатываем и оптимизируем модули, расширяем функциональность сайтов, обновляем дизайн</p>

                <div className='list'>
                    {items.map(item => (<Service img={item.img} description={item.description} />))}
                </div>
            </div>
        </>
    )
}

export default Services;