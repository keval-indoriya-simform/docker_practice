import axios from "axios"

const instance = axios.create({
	baseURL:`${process.env.API_URL}:8000/api`
})
export default instance
