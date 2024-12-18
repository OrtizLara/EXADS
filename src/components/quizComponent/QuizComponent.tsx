import React, { useState } from "react";
import "./QuizComponent.css";
import WatchNow from "../watchNow/WatchNow";
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

const imdbLinks: { [key: string]: string } = {
  "The Gray Man": "https://www.imdb.com/title/tt1649418/",
  Blonde: "https://www.imdb.com/title/tt17126756/",
  Minions: "https://www.imdb.com/title/tt5113044/",
  "Top Gun": "https://www.imdb.com/title/tt1745960/",
  "The Adam Project": "https://www.imdb.com/title/tt2463208/",
  Thor: "https://www.imdb.com/title/tt10648342/",
  "The Batman": "https://www.imdb.com/title/tt1877830/",
  "Spider-man": "https://www.imdb.com/title/tt10872600/",
  "The Flash": "https://www.imdb.com/title/tt0439572/",
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
  const [currentMovieIndex, setCurrentMovieIndex] = useState<number>(0);
  const [lastMovieSelected, setLastMovieSelected] = useState<Movie | null>(null);
  const [showFinalScreen, setShowFinalScreen] = useState<boolean>(false);

  const movies = questions[currentQuestion].movies;

  const handleMovieClick = (movie: Movie) => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentMovieIndex(0);
    } else {
      setLastMovieSelected(movie);
      setShowFinalScreen(true);
    }
  };

  const nextMovie = () => {
    setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };

  const prevMovie = () => {
    setCurrentMovieIndex((prevIndex) =>
      prevIndex === 0 ? movies.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="quiz-container">
      {showFinalScreen ? (
        <WatchNow onRedirect={() => window.location.href = imdbLinks[lastMovieSelected?.title || ""]} />
      ) : (
        <>
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

          <div className="movies-container">
            <button className="nav-button left" onClick={prevMovie}>
              &#8249;
            </button>

            <div className="movies">
              {movies.map((movie, index) => (
                <div
                  key={movie.id}
                  className={`movie-card ${
                    index === currentMovieIndex ? "active" : ""
                  }`}
                  onClick={() => handleMovieClick(movie)}
                >
                  <img src={movie.image} alt={movie.title} className="movie-image" />
                </div>
              ))}
            </div>

            <button className="nav-button right" onClick={nextMovie}>
              &#8250;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComponent;
