
// function reducer(state, action) {
//   switch (action.type) {
//     case 'GET_QUESTIONS ':
//       return {questions: action.payload}
//     case 'CORRECT':
//       return {numCorrect: state.numCorrect + 1, numAnswered: state.numAnswered + 1}
//     case 'INCORRECT':
//       return {numAnswered: state.numAnswered + 1}
//     default:
//       throw new Error()
//   }
// }

// export default reducer 

import React from "react";
import data from '../Apprentice_TandemFor400_Data.json'

const QuizContext = React.createContext();

function quizReducer(state, action) {
  switch (action.type) {
    case "QUESTIONS_FETCHED":
      return { ...state, questions: action.questions };
    case "ANSWER_SUBMITTED":
      return {
        ...state,
        submittedAnswers: [...state.submittedAnswers, action.submittedAnswer]
      };
    case "NEXT_QUESTION":
      return { ...state, questionIndex: state.questionIndex + 1 };
    default:
      throw new Error(`Unsupported action type: ${action.type}`);
  }
}

const initialState = {
  questionIndex: 0,
  questions: [],
  submittedAnswers: []
};

function QuizProvider(props) {
  const [state, dispatch] = React.useReducer(quizReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);
  return <QuizContext.Provider value={value} {...props} />;
}

function useQuiz() {
  const context = React.useContext(QuizContext);
  if (!context) {
    throw new Error(`useQuiz must be used within a QuizProvider`);
  }
  const [state, dispatch] = context;

  const fetchQuiz = () => {
    // fetch(
    //   "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
    // )
    //   .then(res => res.json())
    //   .then(json => {
    //     console.log("json", json)
    dispatch({
      type: "QUESTIONS_FETCHED",
      questions: data.map(questionObj => {
        console.log(questionObj)
        const allAnswers = [
          questionObj.correct,
          ...questionObj.incorrect
        ];
        questionObj.answers = shuffle(allAnswers);
        console.log("questionObj", questionObj)
        return questionObj;
      })
    });
      // });
  };

  const nextQuestion = () => dispatch({ type: "NEXT_QUESTION" });

  return {
    ...state,
    dispatch,
    fetchQuiz,
    nextQuestion
  };
}

export { QuizProvider, useQuiz };

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
