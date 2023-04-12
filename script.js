const APIkey = `e552c8258b3f71b20f3fc069ca964a73`;

getbutton.addEventListener("getMovie", async () => {
  let movieValue = movies.children("option:selected").val();
  await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${APIkey}`);
  console.log(movieValue);
});