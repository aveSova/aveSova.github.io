import laptop from '../assets/laptop.png'
import Achievement_copy from './Mini-components/Achievement_copy';
import './Styles/Seva.css'

const items = [
    {key: 1, description: 'Только системный подход - контроль версий, резервирование и тестирование!'},
    {key: 2, description: 'Только Drupal сайты, не берём на поддержку сайты на других CMS!'},
    {key: 3, description: 'Участвуем в разработке ядра Drupal и модулей на Drupal.org, разрабатываем ', isRed: 'свои модули Drupal'},
    {key: 4, description: 'Поддерживаем сайты на Drupal 5, 6, 7 и 8'},
];

const Expertise = () => {
    return (
        <>
            <div className='exp'>
                <img src={laptop} className='laptop'/>
                <div className='wall'>
                    <h2 className='heading' style={{color: 'white'}}>Экспертиза в Drupal,<br/>опыт 14 лет!</h2>
                    <div className='list'>
                        {items.map(item => (<Achievement_copy key={item.key} description={item.description} isRed={item.isRed}/>))}
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Expertise;