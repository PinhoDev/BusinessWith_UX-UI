export default function QuestionScreen({
  currentQuestion,
  totalQuestions,
  question,
  onAnswer,
  onBack,
  canGoBack,
}) {
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  return (
    <div className="container">
      <div className="question-card">
        <div className="progress-section">
          <div className="progress-text">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        <h2 className="question-text">{question.question}</h2>

        <div className="options-container">
          {question.options.map((option, index) => (
            <button
              key={option.id}
              className="option-btn"
              onClick={() => onAnswer(option.id)}
            >
              <span className="option-number">
                {String.fromCharCode(65 + index)}
              </span>
              <span className="option-text">{option.text}</span>
            </button>
          ))}
        </div>

        {canGoBack && (
          <button className="btn-back" onClick={onBack}>
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}
