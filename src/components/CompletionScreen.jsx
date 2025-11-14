export default function CompletionScreen({ questions, answers }) {
  const handleClose = () => {
    try {
      window.close();
      // If the tab wasn't opened by script, navigate away as a fallback
      setTimeout(() => {
        if (!document.hidden) {
          window.location.href = "about:blank";
        }
      }, 200);
    } catch {}
  };
  return (
    <div className="container">
      <div className="completion-card">
        <div className="success-icon">✓</div>
        <h2>Thank You!</h2>
        <p className="completion-message">
          Your responses have been recorded. Thank you for helping us improve
          the SystemGuide experience for business owners like you.
        </p>
        <div className="summary">
          <h3>Your Responses Summary:</h3>
          <div className="answer-list">
            {questions.map((q) => {
              const optionId = answers[q.id];
              const found = q.options.find((o) => o.id === optionId);
              return (
                <div key={q.id} className="answer-item">
                  <strong>Q{q.id}:</strong> {q.question}
                  <div className="answer-value">
                    → {found ? found.text : optionId || "(no answer)"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button className="btn-secondary" onClick={handleClose}>
          Close Page
        </button>
        <p className="footer-text">UX Research Study • November 2025</p>
      </div>
    </div>
  );
}
