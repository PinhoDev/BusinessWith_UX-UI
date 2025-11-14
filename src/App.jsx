import { useState } from "react";
import "./App.css";
import { questions } from "./data/questions";
import WelcomeScreen from "./components/WelcomeScreen";
import QuestionScreen from "./components/QuestionScreen";
import CompletionScreen from "./components/CompletionScreen";
import { saveResponse } from "./services/FirebaseServices";

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);
  const [started, setStarted] = useState(false);
  const [sessionId] = useState(() =>
    typeof self !== "undefined" &&
    self.crypto &&
    typeof self.crypto.randomUUID === "function"
      ? self.crypto.randomUUID()
      : Math.random().toString(36).slice(2)
  );

  const handleAnswer = async (answer) => {
    const newAnswers = {
      ...answers,
      [questions[currentQuestion].id]: answer,
    };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      try {
        await saveResponse(sessionId, newAnswers);
      } catch (e) {
        console.error(
          "Error saving response document to Firestore (Questions)",
          e
        );
      } finally {
        setCompleted(true);
      }
    }
  };

  const handleStart = () => {
    setStarted(true);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setCompleted(false);
    setStarted(false);
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      setStarted(false);
    }
  };

  if (completed) {
    return (
      <CompletionScreen
        questions={questions}
        answers={answers}
        onRestart={handleRestart}
      />
    );
  }

  if (started) {
    return (
      <QuestionScreen
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        question={questions[currentQuestion]}
        onAnswer={handleAnswer}
        onBack={handleBack}
        canGoBack={true}
      />
    );
  }

  return <WelcomeScreen onStart={handleStart} />;
}

export default App;
