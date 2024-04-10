import axios from "axios"
const instance = axios.create({
	baseURL:"http://d09ac68f73a7494ca886ae25a61206b7.backend.to_do_namespace:8000/api"
})
export default instance
