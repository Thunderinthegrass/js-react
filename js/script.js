'use strict';


const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: +numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const lastFilms1 = prompt('Один из последних просмотренных фильмов?', '');
const rating1 = prompt('На сколько вы его оцените?', '');
const lastFilms2 = prompt('Один из последних просмотренных фильмов?', '');
const rating2 = prompt('На сколько вы его оцените?', '');


personalMovieDB.movies[lastFilms1] = rating1;
personalMovieDB.movies[lastFilms2] = rating2;

console.log(personalMovieDB);

