"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
          count: numberOfFilms,
          movies: {},
          actors: {},
          genres: [],
          private: false
    };

function rememberMyFilms() {
    let a,
        b;

    for (let i = 1; i <= 2; i++) {
        a = prompt('Один из последних просмотренных фильмов?', '');
        b = prompt('Оценка фильма', '');

        if (a !== '' && b !== '' && a !== null && b !== null && a.length < 20 && b.length < 20) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр №${i}`,'');
    }
}

writeYourGenres();

function detectedPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы новичек');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Классический уровень');
    } else if (personalMovieDB.count >= 30) {
        console.log('You are monster!');
    } else {
        console.log('error');
    }    
}

detectedPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);
