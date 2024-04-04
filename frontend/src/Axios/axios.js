import axios from "axios"
import getParameter from "../utils/getParameters";

async function getURI() {
 try {
	let url = await getParameter('BACKEND_ENDPOINT_KEVAL')
	return url
 } catch (err) {
	console.error(err)
 }
} 

const instance = axios.create({
	baseURL: getURI()
})
export default instance