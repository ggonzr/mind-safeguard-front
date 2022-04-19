/**
 * Card to show a question and retrieve an answer from the user
 */
import { useState } from "react";
import Form from "react-bootstrap/Form";
import {Button, Row} from "react-bootstrap";

const Question = ({ id, isQType, questionTitle, questionOptions}) => {
    const [questionAnswer, setQuestionAnswer] = useState(null);
    const [questionStartTime, setQuestionStartTime] = useState(null);
    const [isChecked, setChecked] = useState(false);

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
            console.log("Tiempo de inicio: ", time);
            setQuestionStartTime(time);
        }
    };

    // Handle answer
    const handleSubmit = () => {
        let result;
        if (isQType) {
            result = {
                [questionTitle]: {
                    [`${questionTitle}A`]: questionAnswer,
                    [`${questionTitle}E`]: (Date.now() - questionStartTime) / 1000
                }
            }
        }
        else {
            result = {
                [questionTitle]: {
                    [`${questionTitle}`]: questionAnswer,
                }
            }
        }
        console.log("Result: ", result);
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
    const cleanForm = () => {
        setQuestionStartTime(null);
        setQuestionAnswer(null);
        setChecked(null);
    };

    // Render component
    return (
        <div>
            <h3>{`${id}: ${questionTitle}`}</h3>
            <Row>
                {renderOptions()}
            </Row>
            <Button
                onClick={e => handleSubmit()}
            >
                Registrar respuesta
            </Button>
        </div>
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