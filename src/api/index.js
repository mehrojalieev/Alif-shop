import axios from "axios";

const ApiInstance = axios.create({
    baseURL: 'http://localhost:4040/api',
    headers:{
        'Content-type': 'application/json'
    }
})

export default ApiInstance