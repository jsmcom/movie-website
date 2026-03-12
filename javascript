// Movie database - ADD YOUR TRANSLATED MOVIES HERE!
const movies = [
    // 🇰🇷 KOREAN MOVIES
    {
        id: 1,
        title: "Parasite", // English/translated title
        originalTitle: "기생충", // Original title
        year: 2019,
        language: "Korean",
        country: "South Korea",
        genres: ["Thriller", "Drama", "Black Comedy"],
        director: "Bong Joon-ho",
        poster_url: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        imdb_score: 8.6,
        translation: "English Subtitles Available"
    },
    {
        id: 2,
        title: "Train to Busan",
        originalTitle: "부산행",
        year: 2016,
        language: "Korean",
        country: "South Korea",
        genres: ["Horror", "Action", "Thriller"],
        director: "Yeon Sang-ho",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTkwOTQ4OTg0OV5BMl5BanBnXkFtZTgwMzQyOTM0OTE@._V1_SX300.jpg",
        description: "A zombie outbreak spreads like wildfire on a high-speed train heading to Busan.",
        imdb_score: 7.6,
        translation: "English Dubbed + Subtitles"
    },
    {
        id: 3,
        title: "Oldboy",
        originalTitle: "올드보이",
        year: 2003,
        language: "Korean",
        country: "South Korea",
        genres: ["Mystery", "Thriller", "Revenge"],
        director: "Park Chan-wook",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTI3NTQyMzU5M15BMl5BanBnXkFtZTcwMTM2MjgyMQ@@._V1_SX300.jpg",
        description: "After being kidnapped and imprisoned for 15 years, a man is released and seeks revenge.",
        imdb_score: 8.4,
        translation: "English Subtitles"
    },
    
    // 🇯🇵 JAPANESE MOVIES
    {
        id: 4,
        title: "Spirited Away",
        originalTitle: "千と千尋の神隠し",
        year: 2001,
        language: "Japanese",
        country: "Japan",
        genres: ["Animation", "Fantasy", "Adventure"],
        director: "Hayao Miyazaki",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        description: "A young girl enters a world of spirits and gods while trying to save her parents.",
        imdb_score: 8.6,
        translation: "English Dubbed + Subtitles"
    },
    {
        id: 5,
        title: "Shin Godzilla",
        originalTitle: "シン・ゴジラ",
        year: 2016,
        language: "Japanese",
        country: "Japan",
        genres: ["Sci-Fi", "Kaiju", "Action"],
        director: "Hideaki Anno",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjI1ODQ2MDQxMF5BMl5BanBnXkFtZTgwODEzNzQ5OTE@._V1_SX300.jpg",
        description: "Japan is plunged into chaos when a giant monster appears.",
        imdb_score: 6.8,
        translation: "English Subtitles"
    },
    
    // 🇨🇳 CHINESE MOVIES
    {
        id: 6,
        title: "Crouching Tiger, Hidden Dragon",
        originalTitle: "臥虎藏龍",
        year: 2000,
        language: "Mandarin",
        country: "China/Taiwan",
        genres: ["Wuxia", "Action", "Romance"],
        director: "Ang Lee",
        poster_url: "https://m.media-amazon.com/images/M/MV5BNDdhMzMxOTctNDMyNS00NTZmLTljNWEtNTc4MDBmZTIxNzIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        description: "A warrior steals a legendary sword and a martial arts master must retrieve it.",
        imdb_score: 7.9,
        translation: "English Dubbed + Subtitles"
    },
    {
        id: 7,
        title: "The Wandering Earth",
        originalTitle: "流浪地球",
        year: 2019,
        language: "Mandarin",
        country: "China",
        genres: ["Sci-Fi", "Disaster"],
        director: "Frant Gwo",
        poster_url: "https://m.media-amazon.com/images/M/MV5BYzI2YzM4ZjYtNDQ0ZC00MjY2LWFiMTMtYTVkOTU5MTdiMjZhXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
        description: "To escape a dying sun, humanity moves Earth to another solar system.",
        imdb_score: 6.0,
        translation: "English Subtitles"
    },
    
    // 🇫🇷 FRENCH MOVIES
    {
        id: 8,
        title: "The Intouchables",
        originalTitle: "Intouchables",
        year: 2011,
        language: "French",
        country: "France",
        genres: ["Comedy", "Drama"],
        director: "Olivier Nakache",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
        description: "A wealthy quadriplegic hires a young man from the projects as his caregiver.",
        imdb_score: 8.5,
        translation: "English Dubbed + Subtitles"
    },
    
    // 🇪🇸 SPANISH MOVIES
    {
        id: 9,
        title: "The Invisible Guest",
        originalTitle: "Contratiempo",
        year: 2016,
        language: "Spanish",
        country: "Spain",
        genres: ["Mystery", "Thriller"],
        director: "Oriol Paulo",
        poster_url: "https://m.media-amazon.com/images/M/MV5BZjYxNDEwZGQtY2E0YS00YzQ1LWI4YzktY2I0OTVhMjFjNjQ5XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        description: "A businessman meets with a lawyer to prepare his defense for a murder case.",
        imdb_score: 7.9,
        translation: "English Subtitles"
    },
    
    // 🇩🇪 GERMAN MOVIES
    {
        id: 10,
        title: "Run Lola Run",
        originalTitle: "Lola rennt",
        year: 1998,
        language: "German",
        country: "Germany",
        genres: ["Thriller", "Action"],
        director: "Tom Tykwer",
        poster_url: "https://m.media-amazon.com/images/M/MV5BMjA2NjI5Mzc2OV5BMl5BanBnXkFtZTgwMjYzNzIxMTE@._V1_SX300.jpg",
        description: "A woman has 20 minutes to save her boyfriend's life.",
        imdb_score: 7.6,
        translation: "English Dubbed + Subtitles"
    }
];

// Extract unique values for filters
const languages = [...new Set(movies.map(m => m.language))].sort();
const countries = [...new Set(movies.map(m => m.country))].sort();
const genres = [...new Set(movies.flatMap(m => m.genres))].sort();

// Current filters
let currentLanguage = '';
let currentCountry = '';
let currentGenre = '';

// Initialize the page
window.onload = function() {
    createFilterButtons();
    displayMovies(movies);
};

// Create filter buttons dynamically
function createFilterButtons() {
    // Language filters
    const langContainer = document.getElementById('languageFilters');
    langContainer.innerHTML = '';
    languages.forEach(lang => {
        const btn = document.createElement('button');
        btn.textContent = lang;
        btn.onclick = () => filterByLanguage(lang);
        langContainer.appendChild(btn);
    });
    
    // Country filters
    const countryContainer = document.getElementById('countryFilters');
    countryContainer.innerHTML = '';
    countries.forEach(country => {
        const btn = document.createElement('button');
        btn.textContent = country;
        btn.onclick = () => filterByCountry(country);
        countryContainer.appendChild(btn);
    });
    
    // Genre filters
    const genreContainer = document.getElementById('genreFilters');
    genreContainer.innerHTML = '';
    genres.forEach(genre => {
        const btn = document.createElement('button');
        btn.textContent = genre;
        btn.onclick = () => filterByGenre(genre);
        genreContainer.appendChild(btn);
    });
}

// Display movies function
function displayMovies(movieArray) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';
    
    if (movieArray.length === 0) {
        container.innerHTML = '<div class="no-movies">No movies found matching your filters</div>';
        return;
    }
    
    movieArray.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';
        card.onclick = () => showMovieDetails(movie);
        
        // Generate genre tags HTML
        const genreTags = movie.genres.map(genre => 
            `<span class="genre-tag">${genre}</span>`
        ).join('');
        
        card.innerHTML = `
            <img src="${movie.poster_url}" alt="${movie.title}" class="movie-poster" onerror="this.src='https://via.placeholder.com/300x450?text=No+Poster'">
            <span class="translation-badge"><i class="fas fa-language"></i> ${movie.translation.includes('Dubbed') ? '🎤 Dubbed' : '📝 Subtitled'}</span>
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-original-title">${movie.originalTitle}</div>
                <div class="movie-year">${movie.year}</div>
                <span class="movie-lang"><i class="fas fa-language"></i> ${movie.language}</span>
                <span class="movie-country"><i class="fas fa-map-marker-alt"></i> ${movie.country}</span>
                <div class="movie-genres">${genreTags}</div>
                <div class="movie-rating">⭐ ${movie.imdb_score}</div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Filter functions
function filterByLanguage(language) {
    currentLanguage = language;
    applyFilters();
}

function filterByCountry(country) {
    currentCountry = country;
    applyFilters();
}

function filterByGenre(genre) {
    currentGenre = genre;
    applyFilters();
}

function applyFilters() {
    let filtered = movies;
    
    if (currentLanguage) {
        filtered = filtered.filter(m => m.language === currentLanguage);
    }
    
    if (currentCountry) {
        filtered = filtered.filter(m => m.country === currentCountry);
    }
    
    if (currentGenre) {
        filtered = filtered.filter(m => m.genres.includes(currentGenre));
    }
    
    displayMovies(filtered);
    
    // Update active button states
    updateActiveButtons();
}

function resetFilters() {
    currentLanguage = '';
    currentCountry = '';
    currentGenre = '';
    displayMovies(movies);
    updateActiveButtons();
}

function updateActiveButtons() {
    // Remove active class from all filter buttons
    document.querySelectorAll('.filter-buttons button').forEach(btn => {
        btn.classList.remove('active');
    });
}

function searchMovies() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    const filtered = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) ||
        movie.originalTitle.toLowerCase().includes(searchTerm) ||
        movie.director.toLowerCase().includes(searchTerm) ||
        movie.language.toLowerCase().includes(searchTerm) ||
        movie.country.toLowerCase().includes(searchTerm) ||
        movie.genres.some(g => g.toLowerCase().includes(searchTerm))
    );
    
    displayMovies(filtered);
}

// Modal functions
function showMovieDetails(movie) {
    const modal = document.getElementById('movieModal');
    const modalContent = document.getElementById('modalContent');
    
    modalContent.innerHTML = `
        <div class="modal-movie-details">
            <img src="${movie.poster_url}" alt="${movie.title}" class="modal-poster" onerror="this.src='https://via.placeholder.com/300x450?text=No+Poster'">
            <div class="modal-info">
                <h2>${movie.title}</h2>
                <h3>${movie.originalTitle}</h3>
                <p><strong>Year:</strong> ${movie.year}</p>
                <p><strong>Language:</strong> ${movie.language}</p>
                <p><strong>Country:</strong> ${movie.country}</p>
                <p><strong>Director:</strong> ${movie.director}</p>
                <p><strong>Genres:</strong> ${movie.genres.join(', ')}</p>
                <p><strong>IMDB Score:</strong> ⭐ ${movie.imdb_score}</p>
                <p><strong>Translation:</strong> ${movie.translation}</p>
                <p><strong>Description:</strong> ${movie.description}</p>
                <p><em>🎬 Ready to watch with ${movie.translation}</em></p>
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('movieModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('movieModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}