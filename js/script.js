'use strict';


// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//   count: +numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false,
// };

// const lastFilms1 = prompt('Один из последних просмотренных фильмов?', '');
// const rating1 = prompt('На сколько вы его оцените?', '');
// const lastFilms2 = prompt('Один из последних просмотренных фильмов?', '');
// const rating2 = prompt('На сколько вы его оцените?', '');


// personalMovieDB.movies[lastFilms1] = rating1;
// personalMovieDB.movies[lastFilms2] = rating2;

// console.log(personalMovieDB);

//))))))))))))))))))))))))))
let num = 30;
switch (num) {
  case 49:
    console.log('нет');
    break;
  case 30:
    console.log('да');
    break;
  default:
    console.log('в другой раз');
    break;
}

let num1 = 50;
while (num1 < 60) {
  console.log(num1);
  num1++;
}

let num2 = 55;
do {
  console.log(num2);
  num2++;
} 
while ( num2 < 60);