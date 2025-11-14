export default function WelcomeScreen({ onStart }) {
  return (
    <div className="container">
      <div className="welcome-card">
        <div className="kicker">UX RESEARCH SURVEY</div>
        <h1>SystemGuide Questionnaire</h1>
        <p className="subtitle">
          Help us improve the BusinessWith SystemGuide experience. This brief
          survey takes only <strong>3-5 minutes</strong> and will help us
          understand what business owners need when choosing a management
          system.
        </p>

        <div
          className="callout-important"
          style={{
            background: "#e3f2fd",
            border: "1px solid #2196f3",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "20px",
          }}
        >
          <h3 style={{ marginTop: 0, color: "#0d47a1", fontSize: "16px" }}>
            ⚠️ Before Starting This Questionnaire
          </h3>
          <p style={{ margin: "8px 0", fontSize: "14px", color: "#1565c0" }}>
            Please first try the <strong>SystemGuide</strong> at:{" "}
            <a
              href="https://stage.businesswith.se/systemguiden/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0d47a1", textDecoration: "underline" }}
            >
              https://stage.businesswith.se/systemguiden/
            </a>
          </p>
          <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#1565c0" }}>
            <strong>Note:</strong> At the end of the SystemGuide, you don't need
            to provide your personal data. Just explore the experience, then
            return here to complete this questionnaire.
          </p>
        </div>

        <div className="info-box">
          <div className="info-item">
            <span className="icon">⏱️</span>
            <span>3-5 minutes</span>
          </div>
          <div className="info-item">
            <span className="icon">📝</span>
            <span>6 simple questions</span>
          </div>
          <div className="info-item">
            <span className="icon">🔒</span>
            <span>100% anonymous</span>
          </div>
        </div>
        <button className="btn-primary" onClick={onStart}>
          Start Questionnaire
        </button>
        <p className="disclaimer">
          Your responses help us create better tools for SME owners with limited
          technical knowledge.
        </p>
      </div>
    </div>
  );
}
