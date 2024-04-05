import axios from "axios"
const instance = axios.create({
	baseURL:"http://18.234.194.65:8000/api"
})
export default instance