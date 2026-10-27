import { useState } from 'react';

export default function PromptCard() {
  const [question, setQuestion] = useState('');
  const [message, setMessage] = useState('Thoughtful answers start with a good question.');

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(
      question.trim()
        ? 'JungleMind is getting ready for your question. Request access to try the full experience.'
        : 'Add a question and we will help you think it through.',
    );
  }

  function handleChange(event) {
    setQuestion(event.target.value);
    setMessage('Thoughtful answers start with a good question.');
  }

  return (
    <form className="prompt rise" style={{ '--i': 14 }} onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="prompt-input">
        Ask JungleMind
      </label>
      <textarea
        id="prompt-input"
        className="prompt__input"
        rows="3"
        maxLength="600"
        placeholder="How do rainforests survive?"
        value={question}
        onChange={handleChange}
      />
      <div className="prompt__bar">
        <button
          className="icon-btn rise"
          style={{ '--i': 16 }}
          type="button"
          aria-label="Add attachment"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
          >
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
        <div className="prompt__right">
          <button
            className="icon-btn icon-btn--bare rise"
            style={{ '--i': 17 }}
            type="button"
            aria-label="Use microphone"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="9" y="2.5" width="6" height="11" rx="3" />
              <path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21" />
            </svg>
          </button>
          <button
            className="icon-btn icon-btn--send rise"
            style={{ '--i': 18 }}
            type="submit"
            aria-label="Send message"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.9"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 12h15M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
      <p className="prompt__note" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
