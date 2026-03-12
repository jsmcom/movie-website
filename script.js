// Movie data from our SQLite database
const movies = [
    {
        id: 1,
        title: "The Matrix",
        year: 1999,
        rating: "R",
        director: "Lana Wachowski",
        poster_url: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        description: "A computer hacker learns about the true nature of reality.",
        imdb_score: 8.7
    },
    {
        id: 2,
        title: "Inception",
        year: 2010,
        rating: "PG-13",
        director: "Christopher Nolan",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        description: "A thief who steals corporate secrets through dream-sharing technology.",
        imdb_score: 8.8
    },
    {
        id: 3,
        title: "The Dark Knight",
        year: 2008,
        rating: "PG-13",
        director: "Christopher Nolan",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        description: "Batman faces the Joker.",
        imdb_score: 9.0
    },
    {
        id: 4,
        title: "Pulp Fiction",
        year: 1994,
        rating: "R",
        director: "Quentin Tarantino",
        poster_url: "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        description: "Various interconnected stories of crime in Los Angeles.",
        imdb_score: 8.9
    },
    {
        id: 5,
        title: "The Shawshank Redemption",
        year: 1994,
        rating: "R",
        director: "Frank Darabont",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        description: "Two imprisoned men bond over years.",
        imdb_score: 9.3
    }
];

// Display movies when page loads
window.onload = function() {
    displayMovies(movies);
};

function displayMovies(movieArray) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';
    
    movieArray.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => showMovieDetails(movie);
        
        card.innerHTML = `
            <img src="${movie.poster_url}" alt="${movie.title}" class="movie-poster" onerror="this.src='https://via.placeholder.com/300x450?text=No+Poster'">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-year">${movie.year} • ${movie.rating}</div>
                <div class="movie-rating">⭐ ${movie.imdb_score}</div>
                <div class="movie-director">${movie.director}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.director.toLowerCase().includes(searchTerm)
    );
    
    displayMovies(filtered);
}

function filterByRating(minRating) {
    if (minRating === 'all') {
        displayMovies(movies);
        return;
    }
    
    const filtered = movies.filter(movie => movie.imdb_score >= parseFloat(minRating));
    displayMovies(filtered);
}

function showMovieDetails(movie) {
    alert(`🎬 ${movie.title}\n\n📅 Year: ${movie.year}\n🎭 Director: ${movie.director}\n⭐ Rating: ${movie.imdb_score}\n📝 Description: ${movie.description}`);
}{
    id: 11,  // Change to next number
    title: "Your Movie Title", // Translated/English title
    originalTitle: "원제", // Original title in native language
    year: 2024,
    language: "Korean", // Or Japanese, Chinese, French, etc.
    country: "South Korea", // Country of origin
    genres: ["Action", "Drama"], // Choose from existing or add new
    director: "Director Name",
    poster_url: "https://...", // Find poster URL or use placeholder
    description: "Movie description here...",
    imdb_score: 8.5, // Rating out of 10
    translation: "English Subtitles" // Or "English Dubbed" or both
},