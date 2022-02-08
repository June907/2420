import axios from "axios";

export default axios.create({
  baseURL:"https://2for20.pythonanywhere.com/api/users"
})