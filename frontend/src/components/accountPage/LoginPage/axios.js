import axios from "axios";

export default axios.create({
  baseURL:"https://2for20.pythonanywhere.com/api/users"
  //"http://localhost:8000/api/users"
  //https://2for20.pythonanywhere.com/api/users/token
})
