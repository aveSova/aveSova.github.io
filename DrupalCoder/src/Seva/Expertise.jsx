import dl from '../assets/drupal-logo.svg';
import Achievement_copy from './Mini-components/Achievement_copy';
import './Styles/Seva.css'

const items = [
    {description: 'Только системный подход - контроль версий, резервирование и тестирование!'},
    {description: 'Только Drupal сайты, не берём на поддержку сайты на других CMS!'},
    {description: `Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем ${<div style={{color: '#F14D34'}}>свои модули Drupal</div>}`},
    {description: 'Поддерживаем сайты на Drupal 5, 6, 7 и 8'},
];

const Expertise = () => {
    return (
        <>
            <div className='exp'>
                <h2 className='heading' style={{paddingTop:'38vw', color: 'white'}}>Экспертиза в Drupal, опыт 14 лет!</h2>
                <div className='list'>
                    {items.map(item => (<Achievement_copy description={item.description}/>))}
                </div>
            </div>
        </>
    )
}

export default Expertise;