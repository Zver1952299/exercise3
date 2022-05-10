"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMoveDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const   a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', ''),
//         c = prompt('Один из последних просмотренных фильмов?', ''),
//         d = prompt('На сколько оцените его?', '');

// personalMoveDB.movies[a] = b;
// personalMoveDB.movies[c] = d;

// console.log(personalMoveDB);

// const a = prompt('Ваш возраст?', '');

// if (a < 18) {
//     console.log('Bad');
// } else if (a > 27) {
//     console.log('More');
// } else {
//     console.log('OK');
// } 

// const num = 12;

// (num < 20) ? console.log('Error') : console.log('ok');

const a = +prompt('Сколько пальцев на руке?', '');

switch (a) {
    case 1:
        console.log('less');
        break;
    case 2:
        console.log('мало');
        break;
    case 3:
        console.log('мало');
        break;
    case 4:
        console.log('мало');
        break;
    case 5:
        console.log('верно');
        break;
    default:
        console.log('много');
        break;
}