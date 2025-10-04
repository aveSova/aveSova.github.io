import './App.css';
import { Space, Table, Tag, type CheckboxRef } from "antd";

const { Column, ColumnGroup } = Table;

interface DataType {
  num: React.Key;
  type: string;
  size: string;
  reference: string;
  paycheck: number;
  deadline: string;
  hurry: string;
  status: string;
}

const data: DataType[] = [
  {
    num: '1',
    type: 'UE project',
    size: 'ОГРОМНЫЙ',
    reference: 'нет',
    paycheck: 888,
    deadline: 'завтра',
    hurry: 'нет',
    status: 'отменён',
  },
  {
    num: '2',
    type: 'Unity project',
    size: 'средний',
    reference: 'да',
    paycheck: 0,
    deadline: 'вчера',
    hurry: 'да',
    status: 'не начат',
  },
  {
    num: '3',
    type: 'HTML/CSS',
    size: '-',
    reference: '-',
    paycheck: -1,
    deadline: '-',
    hurry: 'нет',
    status: 'обсуждается',
  },
  {
    num: '4',
    type: 'HTML/CSS',
    size: 'Маленький',
    reference: 'да',
    paycheck: 0,
    deadline: '05.10.2025',
    hurry: 'нет',
    status: 'выполнен',
  }
]

function App() {
  return (
    <>
      <header id="start">
          <img src="./src/assets/Logo.png" alt="logo" />
            <h1>Сайт<br/>"ЭЭЭЭЭЭКСПЕРИМЕНТЫ"</h1>
          <nav>
              <h4>Навигация по странице</h4>
              <ul>
                <li><a href="#links">Ссылки</a></li>
                <li><a href="#tab">Таблица</a></li>
                <li><a href="#form">Форма</a></li>
              </ul>
          </nav>
      </header>
      <main>
          <div id="links">
            <ol>
              <li><a href="http://kubsu.ru/index.html">абсолютную гиперссылку на главную страницу сайта kubsu.ru</a></li>
              <li><a href="https://kubsu.ru/index.html">абсолютную на главную сайта kubsu.ru в протоколе https</a></li>
              <li style={{height: 'auto', maxHeight: '940px'}}><a href="//kubsu.ru/index.html" style={{height: 'auto'}}><img src="./src/assets/Prikol.png" 
                style={{width: '100vw', maxWidth: '441px'}} alt="Лого кубГУ" /></a></li>
              <li><a href="https://clck.ru/3PDHiw">сокращенную ссылку на внутреннюю страницу</a></li>
              <li><a href="https://clck.ru/3PDGyG">сокращенную ссылку на главную страницу</a></li>
              <li><a href="#meme">ссылку на фрагмент текущей страницы</a></li>
              <li><a href="https://avesova.github.io/frameworkProject?param1=1&param2=2&param3=3">ссылку с тремя параметрами в URL</a></li>
              <li><a href="https://avesova.github.io/frameworkProject?param=#meme">ссылку с параметром id в URL</a></li>
              <li><a href="/index.html">относительную на страницу в текущем каталоге</a></li>
              <li><a href="/about/task.html">относительную на страницу в каталоге about</a></li>
              <li><a href="/about/task12/task12.html">здесь 12-й пункт атвичяю</a></li>
              <li><p>В этом тексте спрятана <a href="https://png.klev.club/uploads/posts/2024-05/png-klev-club-0bci-p-molodets-png-27.png" 
                style={{display: 'inline-flex', width: 'auto', height: 'auto'}}>ссылка</a>, найдите её :)</p></li>
              <li><a href="https://skillbox.ru/media/code/teg-a-v-html-kak-delat-ssylki-na-stranicy-fayly-i-razdely/#stk-5">
                ссылку на фрагмент страницы стороннего сайта</a></li>
              <li style={{height: 'auto'}}>
                <map name="task15" style={{width: '100%', maxWidth: '300px'}}>
                  <img src="./src/assets/ForTask.png" alt="задание 15" style={{width: '100%', maxWidth: '300px'}} />
                  <area shape="circle" coords="98,115,50" 
                    href="https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/map#живой_пример" alt="круглый идиот" />
                  <area shape="rect" coords="99,245,268,344" 
                    href="https://developer.mozilla.org/ru/docs/Web/HTML/Reference/Elements/map#живой_пример" alt="квадратные глаза" />
                </map>
              </li>
              <li><a href="">ссылку с пустым href</a></li>
              <li><a>ссылку без href</a></li>
              <li><a rel="nofollow" href="https://hub.kodland.org/project/112576">ссылку, по которой запрещен переход поисковикам</a></li>
              <li><noindex><a href="https://hub.kodland.org/project/229679">запрещенную для индексации поисковиками</a></noindex></li>
              <li style={{height: 'auto'}}> нумерованный список ссылок с подписями title
                <ol>
                  <li style={{height: '3wv'}}><a style={{height: 'inherit'}} href="https://img.gazeta.ru/files3/686/21345686/1-pic_32ratio_600x400-600x400-58884.jpg" 
                    title="умный человек в очках скачать обои">ссылка 1</a></li>
                  <li style={{height: '3wv'}}><a style={{height: 'inherit'}} href="https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/" 
                    title="самая ожидаемая игра года">ссылка 2</a></li>
                  <li style={{height: '3wv'}}><a style={{height: 'inherit'}} href="https://htmlbook.ru/" title="чё-то умное">ссылка 3</a></li>
                </ol>
              </li>
              <li><a href="ftp://Stanford:AB1C3@GRAVITYFALLS/diaries/3.pdf">ссылку на файл на сервере FTP с авторизацией</a></li>
            </ol>
          </div>
          
          <div id="tab">
            <Table<DataType> dataSource={data}>
              <ColumnGroup title="Основное по заказу">
                <Column title="Тип" dataIndex="type" key="type" />
                <Column title="Размер (по наитию)" dataIndex="size" key="size" />
                <Column title="Наличие Референса" dataIndex="reference" key="reference" />
              </ColumnGroup>
              <Column title="Оплата (в $)" dataIndex="paycheck" key="paycheck"/>
              <Column title="Дедлайн" dataIndex="deadline" key="deadline"/>
              <Column title="Торопят?" dataIndex="hurry" key="hurry"/>
              <Column title="Статус" dataIndex="status" key="status"/>
            </Table>
          </div>

          <div id="mobtab">
            <table>
              <caption>Таблица несуществующих заказов</caption>
              <tr>
                <th>№</th>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <th>Основное по заказу</th>
                <th>Тип</th>
                <td>UE project</td>
                <td>Unity project</td>
                <td>HTML/CSS page</td>
                <td>HTML/CSS page</td>
              </tr>
              <tr>
                <th>Наличие референса<br/></th>
                <td>Нет</td>
                <td>Да</td>
                <td>-</td>
                <td>да</td>
              </tr>
              <tr>
                <th>Размер (по наитию)<br/></th>
                <td>ОГРОМНЫЙ</td>
                <td>Средний</td>
                <td>-</td>
                <td>Маленький</td>
              </tr>
              <tr>
                <th>Оплата (в $)</th>
                <td>888</td>
                <td>0</td>
                <td>-</td>
                <td>0</td>
              </tr>
              <tr>
                <th>Дедлайн</th>
                <td>Завтра</td>
                <td>Вчера</td>
                <td>-</td>
                <td>28.09.2025</td>
              </tr>
              <tr>
                <th>Торопят?</th>
                <td>Нет</td>
                <td>Да</td>
                <td>-</td>
                <td>нет</td>
              </tr>
              <tr>
                <th >Статус</th>
                <td>Отменён</td>
                <td>не начат</td>
                <td>обсуждается</td>
                <td>Выполнен</td>
              </tr>
            </table>
          </div>

          <div id="form">
            <ol>
              <li style={{height: 'auto'}}> Дата рождения:<br/> <input type="date"/></li>
              <li><input type="text" placeholder="ФИО" /></li>
              <li><input type="email" placeholder="почта" /></li>
              <li><p>М<input type="radio" name="gender" />Ж<input type="radio" name="gender" /></p></li>
              <li><input type="tel" placeholder="телефон" /></li>
              <li><textarea placeholder="О себе"></textarea></li>
              <li style={{height: 'auto'}}> Любимый ЯП:
                <select multiple>
                  <option value="Pascal">Pascal</option>
                  <option value="C">C</option>
                  <option value="C++">C++</option>
                  <option value="JS">JS</option>
                  <option value="PHP">PHP</option>
                  <option value="Python">Python</option>
                  <option value="Java">Java</option>
                  <option value="Haskel">Haskel</option>
                  <option value="Clojure">Clojure</option>
                  <option value="Prolog">Prolog</option>
                  <option value="Scala">Scala</option>
                </select>
              </li>
              <li><p>С контрактом на продажу души ознакомлен(а)<input type="checkbox" /></p></li>
              <li style={{height: 'auto'}}><button type="button">Сохранить и отправить</button></li>
            </ol>
          </div>

          <img id="meme" src="./src/assets/i.jpeg" style={{width: '100vw', height: 'auto', maxWidth: '500px'}} />
        </main>
        <footer>
          <div style={{display: 'block', textAlign: 'left', marginLeft: '2vw', marginTop: '1vw', marginBottom: '1vw'}}>
            <p>Контакты:</p>
            <ul>
              <li><p>+79184592099</p></li>
              <li><a href="https://t.me/aveSova">Telegram</a></li>
              <li><a href="https://vk.com/sova_seva">ВКонтакте</a></li>
            </ul>
          </div>
          <a style={{border: '2px solid white', alignContent: 'center'}} href="#start">Вернуться в начало</a>
          <h6>(с) Гончар Всеволод Денисович 2025</h6>
        </footer>
    </>
  )
}

export default App
