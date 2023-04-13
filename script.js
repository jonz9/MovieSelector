const APIkey = `e552c8258b3f71b20f3fc069ca964a73`;
const getTMDBData = async (url) => {
  return (await axios.get(url)).data;
}

getbutton.addEventListener("click", async () => {
  let movies = document.getElementById("select");
  let movieSelected = await getTMDBData(`https://api.themoviedb.org/3/movie/${movies.options[movies.selectedIndex].value}?api_key=${APIkey}&language=en-US`)
  .then(async (movieSelected) => {
    
    console.log(movieSelected)
    let movieSection = document.getElementById("movie-section");
    let container = document.getElementById("container")
    document.body.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${movieSelected.backdrop_path})`
    document.body.style.backgroundRepeat = `no-repeat`;
    document.body.style.backgroundSize = `cover`;
    movieSection.style.backgroundColor = `black`;

    document.getElementById("title").innerHTML = movieSelected.title;
    document.getElementById("poster").src = `https://image.tmdb.org/t/p/w500${movieSelected.poster_path}`;
    document.getElementById("average-score").innerHTML = `Average Score: ${movieSelected.vote_average}`;
    document.getElementById("popularity").innerHTML = `Popularity: ${movieSelected.vote_count}`;
    document.getElementById("runtime").innerHTML = `Runtime: ${movieSelected.runtime}`;
    document.getElementById("release-date").innerHTML = `Release Date: ${movieSelected.release_date}`;
    document.getElementById("genres").innerHTML = `Genre: ${movieSelected.genres[0].name}`;
    document.getElementById("overview").innerHTML = `Synopsis: ${movieSelected.overview}`;

    const trailer = await getTMDBData(`https://api.themoviedb.org/3//movie/${movieSelected.value}/videos?api_key=${APIkey}&language=en-US&adult=false`).results.filter((trailer) => trailer.type === "Trailer");
    document.getElementById("trailer").src = `https://www.youtube.com/watch?v=${trailer.at(0).key}`;
  });
});