/*  Version 1

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */


/*  Version 2

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';
document.addEventListener('DOMContentLoaded', () => {
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
        btn = document.getElementsByTagName('button'),  
        checkboxMovie = document.querySelector('input[type=checkbox]');
    let sotrMovie;


    promo.forEach(element =>{
    element.remove();
    });

    genre.textContent = "драма";

    filmBg.style.backgroundImage = 'url("img/bg.jpg")';

    btn[0].addEventListener('click', function addMovie(e){
        e.preventDefault();
    const inputMovie = document.querySelector('.adding__input').value;
        if ( inputMovie){
            if (inputMovie.length > 21){
                movieDB.movies[movieDB.movies.length] = inputMovie.substring(0, 22) + "...";
            } 
            else {
                movieDB.movies[movieDB.movies.length] = inputMovie;
            }
            if (checkboxMovie.checked){
                console.log("Добавляем любимый фильм");
            }
            sortListMoviDB(movieDB);
        }
    });
    
    function sorted(list){
        for (let item in list.movies){
            list.movies[item] = list.movies[item].toLowerCase();
        }
        sotrMovie = list.movies.sort();
    }

    function sortListMoviDB() {
        sorted(movieDB);
        newMovie.innerHTML = "";
        for (let i in sotrMovie){
            newMovie.innerHTML += ` <li class="promo__interactive-item"> ${+i+1}. ${sotrMovie[i]}<div class='delete'></div></li></li>`;
        }

        const deletes = document.querySelectorAll(".delete");
        for (let item in deletes){
            deletes[item].addEventListener("click", (e) => {
                let str = e.target.parentElement.textContent.substring(4,);
                for (let i = 0; i <  movieDB.movies.length; i++){
                    if (str ==  movieDB.movies[i]){
                        movieDB.movies[i] = movieDB.movies[sotrMovie.length - 1];
                    }
                }
                movieDB.movies.pop();
                sortListMoviDB();
            });
        }
    }

    sortListMoviDB();



});







