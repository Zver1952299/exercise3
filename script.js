"use strict";

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

function detectedPersonalLevel () {
    if (numberOfFilms < 10) {
        console.log('Мало фильмов')
    } else if (numberOfFilms >=10 && numberOfFilms < 30) {
        console.log('Вы любитель')
    } else if (numberOfFilms >= 30) {
        console.log('Вы киноман')
    } else {
        console.log('Ошибка')
    }
}

detectedPersonalLevel();


const personalMoveDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genre = prompt (`Ваш любимый жанр номер ${i}`);
        personalMoveDB.genres[i - 1] = genre;
    }
}

writeYourGenres();

// writeYourGenres();

// const   a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', ''),
//         c = prompt('Один из последних просмотренных фильмов?', ''),
//         d = prompt('На сколько оцените его?', '');

// personalMoveDB.movies[a] = b;
// personalMoveDB.movies[c] = d;

// function rememberMyFilms () {
//     for (let i = 0; i < 2; i++) {
//         const   a = prompt('Один из последних просмотренных фильмов?', ''),
//                 b = prompt('На сколько оцените его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMoveDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
        
//     }
// }

// rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMoveDB);
    }
}

showMyDB(personalMoveDB.privat);


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

// const a = +prompt('Сколько пальцев на руке?', '');

// switch (a) {
//     case 1:
//         console.log('less');
//         break;
//     case 2:
//         console.log('мало');
//         break;
//     case 3:
//         console.log('мало');
//         break;
//     case 4:
//         console.log('мало');
//         break;
//     case 5:
//         console.log('верно');
//         break;
//     default:
//         console.log('много');
//         break;
// }

// while (a <= 100) {
//     console.log(a);
//     a++;
// }

// let a = 40;

// do {
//     console.log(a);
//     a++;
// }
// while (a <= 45);

// let a = 5;

// for (let i = 1; i <= 10; i++) {
//     if (i == 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

