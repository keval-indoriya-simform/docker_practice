import axios from "axios"
const instance = axios.create({
	baseURL:"http://54.173.0.168:8000/api"
})
export default instance
