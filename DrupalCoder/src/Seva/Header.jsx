import { ConfigProvider, Menu, Button} from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Achievement from './Mini-components/Achievement';
import DropdownWithArrow from './Mini-components/DropDownWithArrow';
import cup from '../assets/cup.png';
import logo from '../assets/logo.svg';
import video from '../assets/video.mp4';
import './Styles/Seva.css';

const menu = [{
    key: 'start',
    icon: <MenuOutlined />,
    children: [
        { key: 'SupDrup', label: 'ПОДДЕРЖКА DRUPAL' },
        { key: 'Admin', label: 'АДМИНИСТРИРОВАНИЕ', 
            children: [
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
            children: [
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
    {key: 1, heading: '#1', description: 'Drupal-разработчиков России по версии Рейтинга Рунета', img: cup, isLarge: true},
    {key: 2, heading: '3+', description: 'Средний опыт специалистов более 3 лет'},
    {key: 3, heading: '14', description: 'лет опыта в сфере Drupal'},
    {key: 4, heading: '50+', description: 'модулей и тем в формате DrupalGive'},
    {key: 5, heading: '90 000+', description: 'часов поддержки сайтов на Drupal'},
    {key: 6, heading: '300+', description: 'Проектов на поддержке'}
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
                        <Menu mode='inline' items={menu} theme='dark' className='burger'/>
                    </nav>
                    <nav className='pcdisplay'>
                        <a href='' style={{display: 'flex', alignItems: 'center'}}><img src={logo}/></a>
                        <div className='navigator'>
                            <a href=''>ПОДДЕРЖКА DRUPAL</a>
                            <DropdownWithArrow items={menu[0].children.find(item => item.key === 'Admin').children} label="АДМИНИСТРИРОВАНИЕ"/>
                            <a href=''>ПРОДВИЖЕНИЕ</a>
                            <a href=''>РЕКЛАМА</a>
                            <DropdownWithArrow items={menu[0].children.find(item => item.key === 'About').children} label="О НАС"/>
                            <a href=''>ПРОЕКТЫ</a>
                            <a href=''>КОНТАКТЫ</a>
                        </div>
                    </nav>
                    <div className='bigscreen'>
                        <div className='lefthalf'>
                            <div>
                                <h1 className='heading'>Поддержка<br/>сайтов на Drupal</h1>
                                <p className='subtext'>Сопровождение и поддержка сайтов<br/>на CMS Drupal любых версий и запущенности</p>
                            </div>
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
                            {Achievements.map(item => (<Achievement key={item.key} heading={item.heading} description={item.description} 
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