import axios from "axios"
const instance = axios.create({
	baseURL:"http://54.221.168.184:8000/api"
})
export default instance