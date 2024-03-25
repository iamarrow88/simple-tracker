import createElement from '../helpers/createElement';

export default class MarkupCreator{
  constructor(props) {
  }

  createHeader() {
    const header = document.createElement('header');
    header.classList.add('header');
    const element = createElement('div', 'fff aaa', '', header, [] );
    console.log(header);
    /*
    * <header class="header">
        <div class="name-block">
          <span class="name-block__greet">Hello, </span>
          <span id="name" class="name-block__name">Username</span>
        </div>

        <nav class="nav">
          <ul class="nav__inner">
            <li class="nav__item">
              <a href="#" class="nav__link">Today</a>
            </li>
            <li class="nav__item">
              <a href="#" class="nav__link">Tracks lists</a>
            </li>
          </ul>
        </nav>

        <div class="now-block">
          <div id="date" class="now__date"></div>
          <div id="time" class="now__time"></div>
        </div>
      </header>
  * */
  }

}