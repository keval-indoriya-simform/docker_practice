import axios from "axios"
const instance = axios.create({
	baseURL:"http://3.82.65.45:8000/api"
})
export default instance
