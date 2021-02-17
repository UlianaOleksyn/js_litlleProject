/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promo = document.querySelectorAll(".promo__adv img"),
      genre = document.querySelector(".promo__genre"),
      filmBg = document.querySelector(".promo__bg"),
      oldMovie = document.getElementsByClassName("promo__interactive-item"),
      newMovie = document.querySelector('.promo__interactive-list'),
      sotrMovie = movieDB.movies.sort();

promo.forEach(element =>{
element.remove();
});

genre.textContent = "драма";

filmBg.style.backgroundImage = 'url("img/bg.jpg")';


function sortListMoviDB(list) {
    while (oldMovie.length > 0){
        oldMovie[0].remove();
    }
    for (let i in sotrMovie){
        newMovie.innerHTML += ` <li class="promo__interactive-item"> ${+i+1}. ${sotrMovie[i]} <div class='delete'></div></li>`;
    }
}

sortListMoviDB(movieDB);

