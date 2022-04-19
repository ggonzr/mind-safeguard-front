// Simple component with tree boxes to check redux store
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from "../redux/features/question/questionSlice";
import { Row } from "react-bootstrap";

const ReduxChecker = () => {
    const dispatch = useDispatch();
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionAnswer, setQuestionAnswer] = useState(0);
    const [questionStartTime, setQuestionStartTime] = useState(null);

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
        const result = {
            [questionTitle]: {
                [`${questionTitle}A`]: questionAnswer,
                [`${questionTitle}E`]: (Date.now() - questionStartTime) / 1000
            }
        }
        console.log("Result: ", result);
        return result;
    };

    // Clean form
    const cleanForm = () => {
        setQuestionStartTime(null);
        setQuestionTitle("");
        setQuestionAnswer(0);
    };

    return (
        <Row>
            <input
                aria-label="Question title"
                value={questionTitle}
                onChange={e => {
                    handleStartTime();
                    setQuestionTitle(e.target.value);
                }}
            />
            <input
                aria-label="Question answer"
                value={questionAnswer}
                type="number"
                onChange={e => {
                    handleStartTime();
                    setQuestionAnswer(e.target.value)
                }}
            />
            <button
                onClick={e => {
                    const answer = handleSubmit();
                    dispatch(register(answer));
                    cleanForm();
                }}
            >
                Add
            </button>
        </Row>
    );
};

// Export component as default
export default ReduxChecker;