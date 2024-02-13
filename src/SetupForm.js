import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, error, handleChange, handleSubmit } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <div className="form-control">
            <h2>setup quiz</h2>
            {/* amount */}
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              onChange={handleChange}
              className="form-input"
              min={1}
              max={25}
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="category">category</label>
            <select
              name="category"
              id="category"
              className="form-input"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="history">history</option>
              <option value="sports">sports</option>
              <option value="politics">politics</option>
              <option value="computer">computer</option>
              <option value="animals">animals</option>
              <option value="mythology">mythology</option>
              <option value="geography">geography</option>
              <option value="games">games</option>
              <option value="mathematics">mathematics</option>
              <option value="celebreties">celebreties</option>
              <option value="anime">anime</option>
              <option value="general">general</option>
              <option value="books">books</option>
              <option value="film">film</option>
            </select>
          </div>
          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="form-input"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate questions, please try different options
            </p>
          )}
          <button type="submit" onClick={handleSubmit} className="submit-btn">
            start
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
