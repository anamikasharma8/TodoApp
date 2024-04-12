import axios from "axios"
const instance = axios.create({
    baseURL:"https://todoapp-1-civn.onrender.com/"
})
export default instance