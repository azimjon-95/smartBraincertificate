import axios from "axios";
const mainUrl = axios.create({
  baseURL: "http://localhost:5001/"
});
export default mainUrl;