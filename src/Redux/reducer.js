import React from "react";
import data from '../Apprentice_TandemFor400_Data.json'

const QuizContext = React.createContext();

function quizReducer(state, action) {
  console.log("state", state)
  switch (action.type) {
    case "QUESTIONS_FETCHED":
      return { ...state, questions: shuffle(action.questions).slice(0,10) };
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
  submittedAnswers: [],
  numCorrect: 0
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
    dispatch({
      type: "QUESTIONS_FETCHED",
      questions: data.map(questionObj => {
        const allAnswers = [
          questionObj.correct,
          ...questionObj.incorrect
        ];
        questionObj.answers = shuffle(allAnswers);
        return questionObj;
      })
    });
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
