import axios from "axios"

import getParameter from "../utils/getParameters.js";

const baseurl = await getParameter('BACKEND_ENDPOINT_KEVAL');
const instance = axios.create({
	baseURL: baseurl
})
export default instance
