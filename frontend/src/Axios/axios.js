import axios from "axios"
const instance = axios.create({
	baseURL:"http://54.147.19.209:8000/api"
})
export default instance
