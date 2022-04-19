/**
 * Show the complete DASS form
 */

import {Button, Col} from "react-bootstrap";
import Question from "../components/Question";
import data from "../data/questions.json";
import "../css/Question.css";

const Questions = () => {
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
            >
                Realizar predicción
            </Button>
        </div>
    );
};

// Export component
export default Questions;