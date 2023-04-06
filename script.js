import axios from "axios";

const keyAPI = 'e552c8258b3f71b20f3fc069ca964a73';
const URL = 'https://api.themoviedb.org/3/movie/76341?api_key=${keyAPI}';
const data = axios.get(URL);

