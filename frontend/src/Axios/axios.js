import axios from "axios"
const instance = axios.create({
	baseURL:"http://54.205.122.155:8000/api"
})
export default instance
