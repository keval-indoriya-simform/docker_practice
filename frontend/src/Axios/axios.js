import axios from "axios"

console.log(`${process.env.API_URL}`)
const instance = axios.create({
	baseURL:`${process.env.API_URL}:8000/api`
})
export default instance
