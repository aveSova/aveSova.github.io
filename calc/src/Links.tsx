import React from 'react';
import { ConfigProvider, Button, Flex, Image, Typography } from 'antd';
import './App.css';

const Links: React.FC = () => (
    <>
        <ConfigProvider
            theme={{
                components: {
                Button: {
                    fontFamily: 'Ubuntu',
                    colorText: 'white',
                    colorTextHeading: 'white',
                    colorBgContainer: '#00296b',
                }
                },
            }}>
        </ConfigProvider>
        <Flex vertical justify='center'>
            <Button type='text' href='http://kubsu.ru/index.html'>
                абсолютную гиперссылку на главную страницу сайта kubsu.ru
            </Button>
            <Button type='text' href='https://kubsu.ru/index.html'>
                абсолютную гиперссылку на главную страницу сайта kubsu.ru в протоколе https
            </Button>
            <Image src='./src/assets/Prikol.png' alt="лого КубГУ (ссылка)" preview={false} 
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
            <Button type='text' href='/about/task12/task12.html'>
                здесь 12-й пункт атвичяю
            </Button>
            <Typography>В этом тексте спрятана <Button type='text' href='https://png.klev.club/uploads/posts/2024-05/png-klev-club-0bci-p-molodets-png-27.png'>ссылка</Button>, найдите её :)</Typography>
            <Button type='text' href='https://skillbox.ru/media/code/teg-a-v-html-kak-delat-ssylki-na-stranicy-fayly-i-razdely/#stk-5'>ссылку на фрагмент страницы стороннего сайта</Button>
            <map name="task15" style={{width: '100%', maxWidth: '300px'}}>
                <img src="./src/assets/ForTask.png" alt="задание 15" style={{width: '100%', maxWidth: '300px'}} />
                <area shape="circle" coords="98,115,50" 
                    href="https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/map#живой_пример" alt="круглый идиот" />
                <area shape="rect" coords="99,245,268,344" 
                    href="https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/map#живой_пример" alt="квадратные глаза" />
            </map>
            <Button type='text' href=''>ссылку с пустым href</Button>
            <Button type='text'>ссылку без href</Button>
            <Button type='text' rel='nofollow' href='https://hub.kodland.org/project/112576'>ссылку, по которой запрещен переход поисковикам</Button>
            <noindex><Button type='text' href='https://hub.kodland.org/project/229679'>запрещенную для индексации поисковиками</Button></noindex>
            <ol> Нумерованный список
                <li><Button type='text' href='https://img.gazeta.ru/files3/686/21345686/1-pic_32ratio_600x400-600x400-58884.jpg'>ссылка 1</Button></li>
                <li><Button type='text' href='https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/'>ссылка 2</Button></li>
                <li><Button type='text' href='https://htmlbook.ru/'>ссылка 3</Button></li>
            </ol>
            <Button type='text' href='ftp://Stanford:AB1C3@GRAVITYFALLS/diaries/3.pdf'>ссылку на файл на сервере FTP с авторизацией</Button>
        </Flex>
    </>
)

export default Links;