import React from "react";
import SingleQuestion from "./SingleQuestion";

const Questions = ({ questions }) => {
  return (
    <div className="faq-area">
      <div className="faq-items">
        {questions.map((question) => (
          <SingleQuestion key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
