import { ConfigProvider, Menu } from 'antd';
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

const Header = () => {
    return (
        <>
            <header>
                <ConfigProvider
                    theme={{
                        
                        components: {
                            Menu: {
                                darkItemSelectedColor: '#F14D34',
                                darkItemSelectedBg: 'none',
                                itemBorderRadius: '0',
                                collapsedWidth: '1vw',
                            }
                        }
                    }}>
                    <nav style={{display: 'flex', justifyContent: 'space-between'}}>
                        <a href=''><img src={logo}/></a>
                        <Menu mode='inline' items={items} theme='dark' className='burger'/>
                    </nav>
                    <Achievement heading={'Sosal?'} 
                        description={'Idi nahui pidor bliat aaaaaaaaaaaaaa'} 
                        img={cup}
                    />
                </ConfigProvider>
            </header>
        </>
    )
}

export default Header;