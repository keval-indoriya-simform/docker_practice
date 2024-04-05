import axios from "axios"
const instance = axios.create({
	baseURL:"http://54.84.205.58:8000/api"
})
export default instance