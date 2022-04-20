/**
 * Card to show prediction results
 */
import { Card } from "react-bootstrap";
import "../css/Result.css";
import { useSelector } from "react-redux";
import { retrievePrediction } from "../redux/features/prediction/predictionSlice";

const Result = () => {
    const prediction = useSelector(retrievePrediction);
    // Render list items
    const renderItems = () => {
        return Object.keys(prediction.probabilities).map((el, idx) => {
            const value = prediction.probabilities[el];
            return <li key={`proba-${idx}`}>{`${el}: ${value}`}</li>
        });
    };
    return (
        <Card className="card">
            <Card.Title className="result-title">Resultados</Card.Title>
            <Card.Body>
                <h3>Estado: {prediction.meaning}</h3>
                <h3>Probabilidades por estado</h3>
                <ul>
                    { renderItems() }
                </ul>
            </Card.Body>
        </Card>
    );
};

// Export component
export default Result;