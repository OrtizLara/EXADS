import React, { useState } from "react";
import "./QuizComponent.css";

import theGrayMan from "../../assets/theGrayMan.png";
import blondie from "../../assets/blondie.png";
import minions from "../../assets/minions.png";
import topgun from "../../assets/topgun.png";
import bullettrain from "../../assets/bullettrain.png";
import thor from "../../assets/thor.png";
import batman from "../../assets/batman.png";
import spiderman from "../../assets/spiderman.png";
import flash from "../../assets/flash.png";

type Movie = {
  id: number;
  title: string;
  image: string;
};

const questions = [
  {
    id: 1,
    text: "Choose one of the three movies",
    movies: [
      { id: 1, title: "The Gray Man", image: theGrayMan },
      { id: 2, title: "Blonde", image: blondie },
      { id: 3, title: "Minions", image: minions },
    ],
  },
  {
    id: 2,
    text: "Which one do you like the most?",
    movies: [
      { id: 4, title: "Top Gun", image: topgun },
      { id: 5, title: "The Adam Project", image: bullettrain },
      { id: 6, title: "Thor", image: thor },
    ],
  },
  {
    id: 3,
    text: "Which one do you want to watch now?",
    movies: [
      { id: 7, title: "The Batman", image: batman },
      { id: 8, title: "Spider-man", image: spiderman },
      { id: 9, title: "The Flash", image: flash },
    ],
  },
];

const QuizComponent: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [selectedMovies, setSelectedMovies] = useState<Movie[]>([]);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovies([...selectedMovies, movie]);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        <h3>
          QUESTION {currentQuestion + 1} OF {questions.length}
        </h3>
        <div className="progress-dots">
          {questions.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentQuestion ? "active" : ""}`}
            ></span>
          ))}
        </div>
      </div>

      <h2 className="question">{questions[currentQuestion].text}</h2>

      <div className="movies">
        {questions[currentQuestion].movies.map((movie) => (
          <div
            key={movie.id}
            className="movie-card"
            onClick={() => handleMovieClick(movie)}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="movie-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizComponent;
