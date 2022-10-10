"use strict";

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        private: false,
        start: function() {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
            }
        },
        rememberMyFilms: function() {
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
        },
        writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
                personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр №${i}`,'');
                if (personalMovieDB.genres[i-1] == '' || personalMovieDB.genres[i-1] == null) {
                    i--;
                }
            }
            personalMovieDB.genres.forEach(function(item, i) {
                console.log(`Любимый жанр №${i+1} - это ${item}`);
            });
        },
        detectedPersonalLevel: function() {
            if (personalMovieDB.count < 10) {
                console.log('Вы новичек');
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log('Классический уровень');
            } else if (personalMovieDB.count >= 30) {
                console.log('You are monster!');
            } else {
                console.log('error');
            }
        },
        showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
        toggleVisibleMyDB: function() {
            if (personalMovieDB.private) {
                personalMovieDB.private = false;
            } else {
                personalMovieDB.private = true;
            }
        }
};

