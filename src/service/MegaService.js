import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost:5245/api/User',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    postCredentials(data) {
        apiClient.post('/Register', data)
    }
}
