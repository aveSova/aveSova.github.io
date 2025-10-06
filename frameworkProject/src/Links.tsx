import React from 'react';
import { Button, Flex, Image } from 'antd';
import './App.css';

const Links: React.FC = () => (
    <>
        <Flex vertical>
            <Button type='text' href='http://kubsu.ru/index.html'>
                абсолютную гиперссылку на главную страницу сайта kubsu.ru
            </Button>
            <Button type='text' href='https://kubsu.ru/index.html'>
                абсолютную гиперссылку на главную страницу сайта kubsu.ru в протоколе https
            </Button>
            <Image src='./src/assets/Prikol.png' preview={false} 
            style={{ cursor: 'pointer' }}
            onClick={() => window.open('/target-page', '_blank')}/>
            <Button type='text' href='https://clck.ru/3PDHiw'>
                сокращенную ссылку на внутреннюю страницу
            </Button>
            <Button type='text' href='https://clck.ru/3PDGyG'>
                сокращенную ссылку на главную страницу
            </Button>
            <Button type='text' href='#meme'>
                ссылку на фрагмент текущей страницы
            </Button>
            <Button type='text' href='https://avesova.github.io/frameworkProject?param1=1&param2=2&param3=3'>
                ссылку с тремя параметрами в URL
            </Button>
            <Button type='text' href='https://avesova.github.io/frameworkProject?param=#meme'>
                ссылку с параметром id в URL
            </Button>
            <Button type='text' href='/index.html'>
                относительную на страницу в текущем каталоге
            </Button>
            <Button type='text' href='/about/task.html'>
                относительную на страницу в каталоге about
            </Button>
            <Button type='text' href='/about/task12/task12.html'>
                здесь 12-й пункт атвичяю
            </Button>
        </Flex>
    </>
)

export default Links;