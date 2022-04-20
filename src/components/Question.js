/**
 * Card to show a question and retrieve an answer from the user
 */
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { register } from "../redux/features/question/questionSlice";
import Form from "react-bootstrap/Form";
import {Button, Card, Row} from "react-bootstrap";
import "../css/Question.css";

const Question = ({ id, isQType, questionId, questionTitle, questionOptions}) => {
    const dispatch = useDispatch();
    const [questionAnswer, setQuestionAnswer] = useState(null);
    const [questionStartTime, setQuestionStartTime] = useState(null);
    const [isChecked, setChecked] = useState(false);
    const [isRegistered, setRegister] = useState(false);

    // Handle option check
    const handleOptionCheck = (id) => {
        setChecked(!isChecked);
        setQuestionAnswer(id);
        // Set question start time
        handleStartTime();
    };

    // Handle start time
    const handleStartTime = () => {
        if (questionStartTime === null) {
            const time = Date.now();
            setQuestionStartTime(time);
        }
    };

    // Handle answer
    const handleSubmit = () => {
        let result;
        if (isQType) {
            result = {
                [questionId]: {
                    [`${questionId}A`]: questionAnswer,
                    [`${questionId}E`]: (Date.now() - questionStartTime) / 1000
                }
            }
        }
        else {
            result = {
                [questionId]: {
                    [`${questionId}`]: questionAnswer,
                }
            }
        }
        return result;
    };

    // Render all checkboxes options
    const renderOptions = () => {
        return questionOptions.map((el, idx) => {
            // Each element is a list
            // el[0] is the answer id
            // el[1] is the meaning of that id
            const id = el[0];
            const meaning = el[1];
            return <QuestionCheckbox
                key={`question-${id}-option-${idx + 1}`}
                id={id}
                value={meaning}
                globalCheck={isChecked}
                handleGlobalCheck={handleOptionCheck}
            />;
        });
    };

    // Clean form
    /**
    const cleanForm = () => {
        setQuestionStartTime(null);
        setQuestionAnswer(null);
        setChecked(false);
    };
    */

    // Render component
    return (
        <Card>
            <Card.Body>
                <Card.Title
                    className="question-title"
                >
                    {`${id}: ${questionTitle}`}
                </Card.Title>
                <Form>
                    <Form.Group className="mb-3">
                        {renderOptions()}
                    </Form.Group>
                </Form>
                <Row className="row-cols-2">
                    <Button
                        variant="secondary"
                        onClick={e => {
                            dispatch(register(handleSubmit()));
                            setRegister(true);
                        }}
                    >
                        Registrar respuesta
                    </Button>
                    {isRegistered ? <h5>Respuesta registrada</h5> : null}
                </Row>
            </Card.Body>
        </Card>
    );
};

const QuestionCheckbox = ({id, value, globalCheck, handleGlobalCheck}) => {
    const [isChecked, setCheck] = useState(false);

    // Validate enable
    const hasToBeEnable = (current, global) => {
        if (current && global) {
            return true;
        }
        else if (global) {
            return false;
        }
        else if (current === false && global === false) {
            return true;
        }
        else {
            return false;
        }
    };

    // Render checkbox
    return (
        <Form.Check
            type="checkbox"
            id={`option-${id}`}
            label={`${value}`}
            disabled={!hasToBeEnable(isChecked, globalCheck)}
            onChange={e => {
                setCheck(!isChecked)
                handleGlobalCheck(id);
            }}
        />
    )
};

// Export component
export default Question;