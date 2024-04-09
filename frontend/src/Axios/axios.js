import axios from "axios"
const instance = axios.create({
	baseURL:"http://54.224.235.43:8000/api"
})
export default instance
