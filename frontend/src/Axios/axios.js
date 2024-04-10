import axios from "axios"
const instance = axios.create({
	baseURL:"http://http://to-do-backend-536036014.us-east-1.elb.amazonaws.com/:8000/api"
})
export default instance
