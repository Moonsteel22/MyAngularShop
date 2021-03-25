# MyAngularShop

<h1>Установка</h1>
<ul>
  <li>Установите node.js - https://nodejs.org/en/</li>
  <li>Устанавливаете postgresql https://www.postgresql.org/</li>
  <li>Нужно установить менеджер пакетов pip и python - https://www.python.org/downloads/ , https://pypi.org/project/pip/ </li>
  <li>Устанавливаете виртуальное окружение для Django:
    <ul>
      <li> pip install virtualenv </li>
      <li> virtualenv 'название среды'</li>
    </ul>
  
  </li>
  <li>Запускаем виртуальное окружение:</li>
  <ul>
  <li>
    В папке виртуального окружения переходим в scripts и запускаем activate.bat
  </li>
  </ul>
  
  <li>Устанавливаете Django: pip install django</li>
  <li>Создаем проект Django</li>
  <li>В postgresql создаете базу данных</li>
  <li>Клонируйте себе эту ветку</li>
  <li>В settings.py меняете номер порта с 4200 на свой, везде где есть localhost:4200 </li>
  <li>В settings.py изменяете в DATABASES поле Name на свою базу данных(пустую), которую вы создали, так же изменяете имя пользователя на свой в USER</li>
  <li>Выполняете команду python manage.py makemigrations, после python manage.py migrate </li>
  <li>Запускаете сервер python manage.py runserver</li>
  <li>Запускаете Angular в каталоге FrontEnd - ng serve --open </li>
  <li>Все должно работать, по вопросам пишите в aibulat122@yandex.ru </li>

</ul>
### Данные расположены на postgresql
<ul>
  <li>Компоненты FrontEnd находятся в каталоге FronEnd/src/app</li>
<li>header - отвечает за заголовок сайта, в нем расположены кнопки Входа, Регистрации, ссылка на главную страницу, и кнопка перехода на профиль после входа в аккаунт.</li>
<li>product-list - отвечает за показ массива данных продуктов</li>
<li>productitem - отвечает за показ 1го продукта и представляет собой продукт. Продукт в данном случае - телефон.</li>
<li>User - содержит 3 компоненты и сервис, UserAuthorization - компонента для сбора данных с формы авторизации и отправлении в user.service.ts для выполнения запроса на сервер</li>
<li>после входа получаем доступ к профилю и возможность добавления продукта</li>
  <li>user - регистрация пользователя - логика такая же , как и в UserAuthorization</li>
  <li>userinterface - компонента для профиля.</li>
<li>user.service.ts - сервис для выполнения запросов на сервер</li>
<li>userinterface - класс , содержащий данные о пользователе</li>
</ul>
<h1> Сервер реализован на Django</h1>
<ul>
  <li>Функционал расположен в views.py по каталогу BackEnd/AngularProject/Angular-App/views.py</li>
  <li>В urls.py находится маршрутизация по адресам, каждому из которых соответствует функция в views.py выполняющая определенную роль</li>
 </ul>
 <h2>Установка БД</h2>
<p> Создайте базу данных </p>
<p> Запустите скрипт в BackEnd/Angular-project/Tables.txt в SQL, и получите все таблицы</p>
