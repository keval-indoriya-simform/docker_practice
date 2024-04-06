import axios from "axios"
const instance = axios.create({
	baseURL:"http://3.95.211.94:8000/api"
})
export default instance