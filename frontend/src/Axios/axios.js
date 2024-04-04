import axios from "axios"
import getParameter from "../utils/getParameters";

let url;
(async ()=>{
    try{
        url = await getParameter('BACKEND_ENDPOINT_KEVAL');
    }
    catch (err){
        console.log("Error occured: ", err);
    }
})();
const instance = axios.create({
	baseURL: url
})
export default instance
