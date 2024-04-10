import axios from "axios"
const instance = axios.create({
	baseURL:"http://54.242.128.54:8000/api"
})
export default instance
