// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
const movies = require("./data.js");
function getAllDirectors(moviesArray) {
  // return moviesArray.map((element) => element.director);

  const allDirectors = moviesArray.map((element) => {
    return element.director;
  });
  return allDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const stevenDrama = moviesArray.filter((element) => {
    if (element.director !== "Steven Spielberg") {
      return 0;
    } else {
      return element.genre.includes("Drama");
    }
  });
  return stevenDrama.length;
   howManyMovies(movies);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  return moviesArray.reduce((element) => element.score);
  const media = 0;
  for (let i = 0; i < element.score.length; i++) {
    media += element.score[i] / element.score[i].length;
  }
  return media[2];
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
