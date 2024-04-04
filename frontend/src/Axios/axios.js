import axios from "axios"
const instance = axios.create({
	baseURL:"http://3.80.104.116:8000/api"
})
export default instance
