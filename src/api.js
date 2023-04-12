import axios from "axios";

const api = axios.create({
    baseURL: "https://64371cc13e4d2b4a12e3e5c6.mockapi.io/musicas"

})

export default api;