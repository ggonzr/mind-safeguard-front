/**
 * Show the complete DASS form
 */

import { Button, Col } from "react-bootstrap";
import Question from "../components/Question";
import data from "../data/questions.json";
import { retrieveQuestions } from "../redux/features/question/questionSlice";
import "../css/Question.css";
import { useSelector } from "react-redux";
import { makePrediction } from "../services/prediction";


const Questions = () => {
    // Store questions
    const questionsData = useSelector(retrieveQuestions);

    // Handle submition
    const handleSubmit = async () => {
        console.log("Preguntas: " , questionsData);
        const res = await makePrediction(questionsData);
        console.log("Response: ", res.data);
    };

    // Render all questions
    const renderQuestions = () => {
        return data.map((el, idx) => {
            const { id, isQType, questionId, questionTitle, questionOptions} = el;
            return <Question
                key={`question-${idx}`}
                id={id}
                isQType={isQType}
                questionId={questionId}
                questionTitle={questionTitle}
                questionOptions={questionOptions}
            />
        });
    };

    // Render component
    return (
        <div className="card">
            <Col>{ data ? renderQuestions() : null }</Col>
            <Button
                className="prediction-button"
                onClick={e => handleSubmit()}
            >
                Realizar predicción
            </Button>
        </div>
    );
};

// Export component
export default Questions;