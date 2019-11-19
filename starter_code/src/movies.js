/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)


function orderByYear(movieYear) {
    let newArray = movieYear.concat();
    newArray.sort((a, b) => {
        if (a.year > b.year) {
            return 1;
        } else if (a.year < b.year) {
            return -1;
        } else if (a.year === b.year) {
            if (a.title < b.title) {
                return -1;
            } else if (b.title < a.title) {
                return 1;
            } else {
                return 0;
            }
        } else {
            return 0;
        }
    });
    return newArray;
};
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

function howManyMovies(steven) {
    let newList = steven.filter(movies => movies.director === 'Steven Spielberg');
    return newList.filter(movies => movies.genre.includes('Drama')).length;
}

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movieList) {
    let movieTitles = movieList.map((movie) => movie.title);
    let sortedList = movieTitles.sort();
    return sortedList.slice(0, 20);
}

// Iteration 4: All rates average - Get the average of all rates with 2 decimals


/*function ratesAverage(movieList){
    let movieRates = movieList.map(movie => movie.rate);
    return movieRates.reduce(a, b => a += b) / movieRates.length;
}*/

function ratesAverage(avgList) {
    let avgScore = movies.map(movie => movie.rate);
    let totalScore = avgScore.reduce(function (a, b) {
        return (a + b);
    }, 0);

   return totalScore;

}

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
