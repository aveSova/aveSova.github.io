import { ConfigProvider, Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Achievement from './Mini-components/Achievement';
import cup from '../assets/cup.png';
import logo from '../assets/logo.svg';
import './Styles/Seva.css';

const items = [{
    key: 'start',
    icon: <MenuOutlined />,
    children: [
        { key: 'SupDrup', label: 'ПОДДЕРЖКА DRUPAL' },
        { key: 'Admin', label: 'АДМИНИСТРИРОВАНИЕ', 
            type: 'submenu', children: [
                { key: 'Migr', label: 'МИГРАЦИЯ' },
                { key: 'BackUp', label: 'БЭКАПЫ' },
                { key: 'Audit', label: 'АУДИТ БЕЗОПАСНОСТИ' },
                { key: 'Optim', label: 'ОПТИМИЗАЦИЯ СКОРОСТИ' },
                { key: 'HTTPS', label: 'ПЕРЕЕЗД НА HTTPS' }
            ] 
        },
        { key: 'Promo', label: 'ПРОДВИЖЕНИЕ' },
        { key: 'Adv', label: 'Реклама' },
        { key: 'About', label: 'О НАС',
            type: 'submenu', children: [
                { key: 'Team', label: 'КОМАНДА' },
                { key: 'Give', label: 'DRUPALGIVE' },
                { key: 'Blog', label: 'БЛОГ' },
                { key: 'Courses', label: 'КУРСЫ DRUPAL' }
            ],
        },
        { key: 'Proj', label: 'ПРОЕКТЫ' },
        { key: 'Cont', label: 'КОНТАКТЫ' }
    ]
}]

const Achievements = [
    {heading: '#1', description: 'Drupal-разработчиков России по версии Рейтинга Рунета', img: cup, isLarge: true},
    {heading: '3+', description: 'Средний опыт специалистов более 3 лет'},
    {heading: '14', description: 'лет опыта в сфере Drupal'},
    {heading: '50+', description: 'модулей и тем в формате DrupalGive'},
    {heading: '90 000+', description: 'часов поддержки сайтов на Drupal'},
    {heading: '300+', description: 'Проектов на поддержке'}
]

const Header = () => {
    return (
        <>
            <header>
                <ConfigProvider
                    theme={{
                        
                        components: {
                            Menu: {
                                darkItemBg: 'black',
                                darkSubMenuItemBg: 'black',
                                darkItemSelectedColor: '#F14D34',
                                darkItemSelectedBg: 'none',
                                itemBorderRadius: '0',
                            },
                            Button: {
                                colorText: 'white',
                                colorBorder: '#F14D34',
                                borderRadius: '5',
                            }
                        }
                    }}>
                    <nav style={{display: 'flex', justifyContent: 'space-between'}}>
                        <a href=''><img src={logo}/></a>
                        <Menu mode='inline' items={items} theme='dark' className='burger'/>
                    </nav>
                    <h1 className='heading'>Поддержка сайтов<br/>на Drupal</h1>
                    <p className='subtext'>Сопровождение и поддержка сайтов<br/>на CMS Drupal любых версий и запущенности</p>
                    <Button style={{
                        backgroundColor: 'transparent',
                        color: '#FFFFFF',
                        border: '2px solid #F14D34',
                        borderRadius: '5px',
                        borderColor: '#F14D34',
                        margin: '60px',
                        marginTop: '45px',
                        width: '50%',
                        height: '12vw',
                        fontSize: '12px'
                    }}>
                    Тарифы
                    </Button>
                    <div className='list'>
                        {Achievements.map(item => (<Achievement heading={item.heading} description={item.description} 
                            img={item.img} isLarge={item.isLarge}/>)
                        )}
                    </div>
                </ConfigProvider>
            </header>
        </>
    )
}

export default Header;