/**
 * Call prediction endpoint
 */
import axios from "axios";

// URL endpoint
const URL = "http://127.0.0.1:8000/";

// Make the prediction
export const makePrediction = async (body) => {
    try {
        const res = await axios.post(URL, body);
        console.log("Response: ", res);
        return res;
    }
    catch (e) {
        console.error("Error fatal consumiendo el API: ", e.message);
    }
};