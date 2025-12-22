import { ConfigProvider, Menu, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Achievement from './Mini-components/Achievement';
import cup from '../assets/cup.png';
import logo from '../assets/logo.svg';
import video from '../assets/video.mp4'
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
                <div className="video-background">
                    <video autoPlay muted loop playsInline>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="video-overlay"></div>
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
                        }
                    }}>
                    <nav className='mobdisplay'>
                        <a href=''><img src={logo}/></a>
                        <Menu mode='inline' items={items} theme='dark' className='burger'/>
                    </nav>
                    <nav className='pcdisplay'>
                        <a href=''><img src={logo}/></a>
                        <div className='navigator'>
                            <a href=''>ПОДДЕРЖКА DRUPAL</a>
                            <Menu mode='inline'/>
                        </div>
                    </nav>
                    <div className='bigscreen'>
                        <div className='lefthalf'>
                            <h1 className='heading'>Поддержка сайтов<br/>на Drupal</h1>
                            <p className='subtext'>Сопровождение и поддержка сайтов<br/>на CMS Drupal любых версий и запущенности</p>
                            <Button className='but' style={{
                                backgroundColor: 'transparent',
                                color: '#FFFFFF',
                                border: '2px solid #F14D34',
                                borderRadius: '5px',
                                borderColor: '#F14D34',
                            }}>
                            Тарифы
                            </Button>
                        </div>
                        <div className='list'>
                            {Achievements.map(item => (<Achievement heading={item.heading} description={item.description} 
                                img={item.img} isLarge={item.isLarge}/>)
                            )}
                        </div>
                    </div>
                </ConfigProvider>
            </header>
        </>
    )
}

export default Header;