const APIkey = `e552c8258b3f71b20f3fc069ca964a73`;

getbutton.addEventListener("click", async () => {
  let movies = document.getElementById("select");
  let movieSelected = axios.get(`https://api.themoviedb.org/3/movie/${movies.options[movies.selectedIndex].value}?api_key=${APIkey}&language=en-US`, {
    params: {
      api_key: APIkey,
      append_to_response: "videos",
    },
  })
  movieSelected = movieSelected.then(() => {
    console.log(movieSelected);
  })
});