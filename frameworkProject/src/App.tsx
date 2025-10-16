
import './App.css';
import TableOfOrder from './assets/Table';
import Links from './assets/Links';

function App() {
  return (
    <>
      <header id="start">
<<<<<<< HEAD
          <img src="/public/Logo.png" alt="logo" />
=======
          <img src="/public/L0go.png" alt="logo" />
>>>>>>> f3f9a0bab3a722c1dc89dd2be523bd944d912a6b
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
            <Links />
            
          </div>
          
          <div id="tab">
            <TableOfOrder />
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

          <img id="meme" src="/public/i.jpeg" style={{width: '100vw', height: 'auto', maxWidth: '500px'}} />
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
