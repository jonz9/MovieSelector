const APIkey = `e552c8258b3f71b20f3fc069ca964a73`;

getbutton.addEventListener("click", async () => {
  let movies = document.getElementById("select");
  let movieSelected = axios.get(`https://api.themoviedb.org/3/movie/${movies.options[movies.selectedIndex].value}?api_key=${APIkey}&language=en-US`, {
    params: {
      api_key: APIkey,
      append_to_response: "videos",
    },
  })
  .then((movieSelected) => {
    const title = document.getElementById("title");
    const poster = document.getElementById("poster");
    const genres = document.getElementById("genres");
    const popularity = document.getElementById("popularity");
    const releaseDate = document.getElementById("release-date");
    const averageScore = document.getElementById("average-score");
    const overview = document.getElementById("overview");
    const trailers = 
    console.log(movieSelected);
    
  })
  .catch(() => {
    console.log("error");
  })
});