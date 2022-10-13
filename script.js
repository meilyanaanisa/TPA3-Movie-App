const KEY = '5d9b2bc413a6a19fd56b277573b6096a';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${KEY}&page=1&sort_by=popularity.desc`;
const search_URL = `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&page=1&sort_by=popularity.desc`;

const container = document.getElementsByClassName('container')
const form = document.getElementById('form')
const search = document.getElementById('search')

getMovies(API_URL)

function getMovies (url) {
    fetch (url)
    .then(res => res.json())
    .then(data => {
     showMovies(data)
     console.log(data)
    })
}

function showMovies(data){
    document.querySelector('.container').innerHTML = ""
    data.results.forEach(movie =>{
        const movie1 = document.createElement('div')
        movie1.classList.add('movie')
        movie1.innerHTML =`
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="Poster Movie" />
        <div class="info_movie">
          <h3>${movie.title}</h3>
          <span class="${getColor(movie.vote_average)}">${movie.vote_average}</span>
        </div>
        <p>${movie.release_date}</p>
        `
        document.querySelector('.container').appendChild (movie1)
  })
}

function getColor(vote){
    if(vote >= 8){
        return 'green'
    }else if(vote >= 5){
       return 'orange'
    }else{
        return 'red'
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault ()

    const searchTerm = search.value;

    if(searchTerm){
        getMovies(search_URL+'&query='+searchTerm)
    }

})

