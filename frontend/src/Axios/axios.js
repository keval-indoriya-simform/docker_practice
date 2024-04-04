import axios from "axios"
const instance = axios.create({
	baseURL:"http://54.234.157.14:8000/api"
})
export default instance
