"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''),
      personalMovieDB = {
          count: numberOfFilms,
          movies: {},
          actors: {},
          genres: [],
          private: false
    };

const movie1 = prompt('Один из последних просмотренных фильмов?', ''),
      rating1 = prompt('Оценка фильма', ''),
      movie2 = prompt('Один из последних просмотренных фильмов?', ''),
      rating2 = prompt('Оценка фильма', '');

personalMovieDB.movies[movie1] = rating1;
personalMovieDB.movies[movie2] = rating2;

console.log(personalMovieDB);