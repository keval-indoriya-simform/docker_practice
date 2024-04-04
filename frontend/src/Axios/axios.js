import axios from "axios"
import getParameter from "../utils/getParameters";

let url;
url = getParameter('BACKEND_ENDPOINT_KEVAL')
console.log(url)
const instance = axios.create({
	baseURL: url
})
export default instance