import './Styles/Seva.css';

import s1 from '../assets/support1.svg';
import s2 from '../assets/support2.svg';
import s3 from '../assets/support3.svg';
import s4 from '../assets/support4.svg';
import s5 from '../assets/support5.svg';
import s6 from '../assets/support6.svg';
import s7 from '../assets/support7.svg';
import s8 from '../assets/support8.svg';

import Advantage from './Mini-components/Advantage.jsx';

const items = [
    {
        key: 1,
        index: '01',
        heading: 'Постановка задачи по Email',
        description: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда не теряются.',
        background: s1
    },
    {
        key: 2,
        index: '02',
        heading: 'Система Helpdesk – отчетность, прозрачность',
        description: 'Возможность посмотреть все заявки в работе и отработанные часы в личном кабинете через браузер.',
        background: s2
    },
    {
        key: 3,
        index: '03',
        heading: 'Расширенная техническая поддержка',
        description: 'Возможность организации расширенной техподдержки с 6:00 до 22:00 без выходных.',
        background: s3
    },
    {
        key: 4,
        index: '04',
        heading: 'Персональный менеджер проекта',
        description: 'Ваш менеджер проекта  всегда в курсе текущего состояния проекта и в любой момент готов ответить на любые вопросы.',
        background: s4
    }
]

const items2 = [
        {
            key: 5,
            index: '05',
            heading: 'Удобные способы оплаты',
            description: 'Безналичный расчет по договору или электронные деньги: WebMoney, Яндекс.Деньги, Paypal.',
            background: s5
        },
        {
            key: 6,
            index: '06',
            heading: 'Работаем с SLA и NDA',
            description: 'Работа в рамках соглашений о конфиденциальности и об уровне качетсва работ.',
            background: s6
        },
        {
            key: 7,
            index: '07',
            heading: 'Штатные специалисты',
            description: 'Надежные штатные специалисты, никаких фрилансеров.',
            background: s7
        },
        {
            key: 8,
            index: '08',
            heading: 'Удобные каналы связи',
            description: 'Консультации по телефону, скайпу, в месенджерах.',
            background: s8
        },
]

const Support = () => {
    return (
        <>
            <h2 className="heading" style={{textAlign: 'center'}}>
                Поддержка<br/>от Drupal-coder
            </h2>
            <div className='layer'>
                <div className='list'>
                    {items.map(item => (<Advantage key={item.key} index={item.index} heading={item.heading} description={item.description} background={item.background} />))}
                </div>
                <div className='list'>
                    {items2.map(item => (<Advantage key={item.key} index={item.index} heading={item.heading} description={item.description} background={item.background} />))}
                </div>
            </div>
        </>
    )
}

export default Support;