import axios from "axios";
const mainUrl = axios.create({
  // baseURL: "http://localhost:5001/"
  baseURL: "https://smartback-rose.vercel.app/"
});
export default mainUrl;