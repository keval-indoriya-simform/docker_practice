import axios from "axios"

import getParameter from "../utils/getParameters.js";

const baseurl = await getParameterter('BACKEND_ENDPOINT_KEVAL');
const instance = axios.create({
	baseURL:"http://3.80.104.116:8000/api"
})
export default instance
