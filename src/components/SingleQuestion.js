import React, { useState } from "react";
import { ArrowCircleDown, ArrowCircleUp } from "phosphor-react";

const SingleQuestion = ({ question }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div
      className="single-question-area"
    >
      <div className="single-question-heading">
        <h2 className="single-question-title">{question.title}</h2>
        {!showAnswer ? (
          <ArrowCircleDown className="single-question-icon" size={32} color="#304b4b" onClick={() => setShowAnswer(!showAnswer)} />
        ) : (
          <ArrowCircleUp className="single-question-icon" size={32} color="#304b4b" onClick={() => setShowAnswer(!showAnswer)}/>
        )}
      </div>
      {showAnswer && <p className="single-question-body">{question.body}</p>}
    </div>
  );
};

export default SingleQuestion;
