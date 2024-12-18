
let movies = [ 
    { title: "Intersteller", genre: "Sci-Fi", rating: 8.8, releaseYear: 2010 }, 
    { title: "Avengers", genre: "Action", rating: 9.0, releaseYear: 2017 }, 
    { title: "transformers", genre: "Action", rating: 8.6, releaseYear: 2014 } 
]; 


const addMovie = (collection, movie) => { 
 
    if (!movie.title || !movie.genre || !movie.rating || !movie.releaseYear) {
        alert("Please fill in all movie details");
        return;
    }

    if (movie.rating < 0 || movie.rating > 10) {
        alert("Rating must be between 0 and 10");
        return;
    }

    if (movie.releaseYear < 1900 || movie.releaseYear > 2100) {
        alert("Please enter a valid release year");
        return;
    }

    collection.push(movie); 
    
    renderMovies();


    document.getElementById('titleInput').value = '';
    document.getElementById('genreInput').value = '';
    document.getElementById('ratingInput').value = '';
    document.getElementById('yearInput').value = '';
}; 


function renderMovies() {
    const movieList = document.getElementById('movieList');
    
    
    movieList.innerHTML = '';

    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        
        movieItem.innerHTML = `
            <div>
                <strong>${movie.title}</strong> (${movie.releaseYear})
            </div>
            <div>
                Genre: ${movie.genre} | Rating: ${movie.rating}
            </div>
        `;

        movieList.appendChild(movieItem);
    });
}
let listMoviesByGenre = (collection, genre) => { 
    red(collection.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase()) );
}; 
function red(collection1) {
    const movieList = document.getElementById('movieList');
    
    movieList.innerHTML = '';

    collection1.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        
        movieItem.innerHTML = `
            <div>
                <strong>${movie.title}</strong> (${movie.releaseYear})
            </div>
            <div>
                Genre: ${movie.genre} | Rating: ${movie.rating}
            </div>
        `;

        movieList.appendChild(movieItem);
    });
}
function red2(temp){
    const movieList = document.getElementById('movieList');
    
    movieList.innerHTML = '';
    const movieItem = document.createElement('div');
        movieItem.classList.add('movie-item');
        
        movieItem.innerHTML = `
            <div>
                <strong>${temp.title}</strong> (${temp.releaseYear})
            </div>
            <div>
                Genre: ${temp.genre} | Rating: ${temp.rating}
            </div>
        `;

        movieList.appendChild(movieItem);
}

const findHighestRatedMovie = collection => { 
    let temp = collection.reduce((highest, movie) => 
        movie.rating > highest.rating ? movie : highest
    ); 
    red2(temp);
}; 

const moviesAfterYear = (collection, year) => { 
    red(collection.filter(movie => movie.releaseYear > year)); 
}; 

function filterMovies() {
    const genreFilter = document.getElementById('genreFilterInput').value.trim();
    const minRatingFilter = parseFloat(document.getElementById('minRatingFilterInput').value) || 0;
    const maxRatingFilter = parseFloat(document.getElementById('maxRatingFilterInput').value) || 10;

    const filteredMovies = movies.filter(movie => 
        (genreFilter === '' || movie.genre.toLowerCase().includes(genreFilter.toLowerCase())) &&
        movie.rating >= minRatingFilter &&
        movie.rating <= maxRatingFilter
    );

   
    movies = filteredMovies;
    renderMovies();
}

document.addEventListener('DOMContentLoaded', () => {
    renderMovies();

    movies.forEach(movie => { 
        console.log(`${movie.title} (${movie.releaseYear}) is a ${movie.genre} movie with a rating of ${movie.rating}.`); 
    });
});