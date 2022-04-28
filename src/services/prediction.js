/**
 * Call prediction endpoint
 */
import axios from "axios";
import request from "../data/request.json";

// URL endpoint
const URL = "https://prediction-ywhsiiswia-uc.a.run.app/";

// Make the prediction
export const makePrediction = async (body) => {
    try {
        const res = await axios.post(URL, body);
        return res;
    }
    catch (e) {
        console.error("Error fatal consumiendo el API: ", e.message);
    }
};