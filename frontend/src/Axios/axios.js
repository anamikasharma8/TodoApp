import axios from "axios";

const instance = axios.create({
    baseURL: "https://todoapp-kyts.onrender.com/api",
});

export default instance;
