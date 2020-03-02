import axios from 'axios';

export default axios.create({
  baseURL: "https://onvural-website-backend.herokuapp.com/",
  responseType: "json"
});
