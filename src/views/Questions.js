/**
 * Show the complete DASS form
 */

import {Button, Col, Row} from "react-bootstrap";
import Question from "../components/Question";
import Result from "../components/Result";
import data from "../data/questions.json";
import request from "../data/request.json";
import { retrieveQuestions } from "../redux/features/question/questionSlice";
import { useSelector, useDispatch } from "react-redux";
import { makePrediction } from "../services/prediction";
import { retrievePrediction, setPrediction } from "../redux/features/prediction/predictionSlice";
import "../css/Question.css";


const Questions = () => {
    // Store questions
    const questionsData = useSelector(retrieveQuestions);
    // Get prediction data
    const prediction = useSelector(retrievePrediction);
    // Dispatch prediction data
    const dispatch = useDispatch();

    // Handle submition
    const handleSubmit = async () => {
        if (Object.keys(request).length === Object.keys(questionsData).length) {
            const res = await makePrediction(questionsData);
            dispatch(setPrediction(res.data));
        }
        else {
            alert("Por favor complete la encuesta")
        }
    };

    // Handle example
    const handleExampleSubmit = async () => {
        const res = await makePrediction(request);
        dispatch(setPrediction(res.data));
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
            <Row className="row-cols-2 prediction-button">
                <Button
                    onClick={e => handleSubmit()}
                >
                    Realizar predicción
                </Button>
                <Button
                    onClick={e => handleExampleSubmit()}
                >
                    Realizar predicción con ejemplo
                </Button>
            </Row>

            {prediction ? <Result/> : null }
        </div>
    );
};

// Export component
export default Questions;