import React, { useState } from 'react';

export default function Home() {
  const questions = [
    {
      questionText: 'Which is the largest country in the world by population?',
      answerOptions: [
        { answerText: 'India', isCorrect: false },
        { answerText: 'China', isCorrect: true },
        { answerText: 'USA', isCorrect: false },
        { answerText: 'Russia', isCorrect: false },
      ],
    },
    {
      questionText: 'When did the second world war end?',
      answerOptions: [
        { answerText: '1945', isCorrect: true },
        { answerText: '1939', isCorrect: false },
        { answerText: '1944', isCorrect: false },
        { answerText: '1942', isCorrect: false },
      ],
    },
    {
      questionText: 'Which was the first country to issue paper currency?',
      answerOptions: [
        { answerText: 'USA', isCorrect: false },
        { answerText: 'France', isCorrect: false },
        { answerText: 'Italy', isCorrect: false },
        { answerText: 'China', isCorrect: true },
      ],
    },
    {
      questionText: 'Which city hosted the 1996 Summer Olympics?',
      answerOptions: [
        { answerText: 'Atlanta', isCorrect: true },
        { answerText: 'Sydney', isCorrect: false },
        { answerText: 'Athens', isCorrect: false },
        { answerText: 'Beijing', isCorrect: false },
      ],
    },
    {
      questionText: 'Who invented the telephone?',
      answerOptions: [
        { answerText: 'Albert Einstein', isCorrect: false },
        { answerText: 'Alexander Graham Bell', isCorrect: true },
        { answerText: 'Isaac Newton', isCorrect: false },
        { answerText: 'Marie Curie', isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nexQuestion = currentQuestion + 1;
    if (nexQuestion < questions.length) {
      setCurrentQuestion(nexQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='scoring'>You scored 1 out of {questions.length}</div>
      ) : (
        <div className='question-section'>
          <div className='question-count'>
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className='question-text'>
            {questions[currentQuestion].questionText}
          </div>
          <div className='asnwer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
