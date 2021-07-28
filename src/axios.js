import axios from "axios";

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

// instane.get('/user') like this axios.get('https://api.themoviedb.org/3/user')

export default instance;