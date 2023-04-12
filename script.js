const APIkey = `e552c8258b3f71b20f3fc069ca964a73`;

getbutton.addEventListener("click", async () => {
  let movieSelected = document.getElementById("movies");
  let movieValue = movieSelected.options[movieSelected.selectedIndex];
  // await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${APIkey}`);
  console.log(movieValue);
});