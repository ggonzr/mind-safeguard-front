/**
 * Call prediction endpoint
 */
import axios from "axios";
import request from "../data/request.json";

// URL endpoint
const URL = "http://127.0.0.1:8000/";

// Make the prediction
export const makePrediction = async (body) => {
    try {
        const res = await axios.post(URL, request);
        return res;
    }
    catch (e) {
        console.error("Error fatal consumiendo el API: ", e.message);
    }
};