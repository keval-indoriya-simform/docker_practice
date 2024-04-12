import axios from "axios"

const instance = axios.create({
	baseURL:`${process.env.REACT_APP_API_URL}:8000/api`
})
export default instance
