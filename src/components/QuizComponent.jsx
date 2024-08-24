import React, { useState, useEffect } from 'react';
import './QuizComponent.css';
import bubble_1 from '../assets/airbubble-1.png'
import bubble_2 from '../assets/airbubble-2.png'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';

const QuizComponent = () => {
  // All questions and answers data
  const allQuestions = [
    {
      question: 'What is the largest ocean on Earth?',
      options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      answer: 'Pacific Ocean',
    },
    {
      question: 'What is the largest species of shark?',
      options: ['Great White Shark', 'Tiger Shark', 'Whale Shark', 'Hammerhead Shark'],
      answer: 'Whale Shark',
    },
    {
      question: 'Which sea animal has three hearts?',
      options: ['Octopus', 'Squid', 'Sea Turtle', 'Jellyfish'],
      answer: 'Octopus',
    },
    {
      question: 'What is the primary diet of a sea otter?',
      options: ['Seaweed', 'Crustaceans', 'Fish', 'Plankton'],
      answer: 'Crustaceans',
    },
    {
      question: 'Which marine mammal is known for its long tusks?',
      options: ['Walrus', 'Seal', 'Dolphin', 'Manatee'],
      answer: 'Walrus',
    },
    {
      question: 'What is the name of the process where some sea creatures change color to blend into their surroundings?',
      options: ['Camouflage', 'Photosynthesis', 'Bioluminescence', 'Migration'],
      answer: 'Camouflage',
    },
    {
      question: 'Which of the following is not a type of jellyfish?',
      options: ['Box Jellyfish', 'Moon Jellyfish', 'Lion’s Mane Jellyfish', 'Sea Anemone'],
      answer: 'Sea Anemone',
    },
    {
      question: 'What is the average lifespan of a giant squid?',
      options: ['1-2 years', '5-10 years', '20-30 years', '50-60 years'],
      answer: '5-10 years',
    },
    {
      question: 'Which animal is known for its ability to regenerate lost limbs?',
      options: ['Starfish', 'Sea Cucumber', 'Sea Urchin', 'Sea Horse'],
      answer: 'Starfish',
    },
    {
      question: 'What is the main purpose of a sea turtle’s shell?',
      options: ['Protection', 'Communication', 'Navigation', 'Temperature Regulation'],
      answer: 'Protection',
    },
    {
      question: 'Which sea creature is known for its ink defense mechanism?',
      options: ['Octopus', 'Squid', 'Cuttlefish', 'All of the Above'],
      answer: 'All of the Above',
    },
    {
      question: 'What is the largest species of sea turtle?',
      options: ['Leatherback Turtle', 'Green Turtle', 'Hawksbill Turtle', 'Loggerhead Turtle'],
      answer: 'Leatherback Turtle',
    },
    {
      question: 'Which sea animal can change its sex during its lifetime?',
      options: ['Clownfish', 'Sea Urchin', 'Dolphin', 'Manatee'],
      answer: 'Clownfish',
    },
    {
      question: 'What is the primary diet of a sea anemone?',
      options: ['Plankton', 'Small Fish', 'Seaweed', 'Crustaceans'],
      answer: 'Small Fish',
    },
    {
      question: 'Which marine animal is known for its ability to produce light?',
      options: ['Firefly Squid', 'Anglerfish', 'Deep Sea Jellyfish', 'All of the Above'],
      answer: 'All of the Above',
    },
    {
      question: 'Which of the following is not a sea mammal?',
      options: ['Seals', 'Whales', 'Dolphins', 'Sea Horses'],
      answer: 'Sea Horses',
    },
    {
      question: 'What is the name of the layer of water in the ocean that is below the sunlight zone and above the midnight zone?',
      options: ['Twilight Zone', 'Sunlight Zone', 'Abyssal Zone', 'Hadopelagic Zone'],
      answer: 'Twilight Zone',
    },
    {
      question: 'What do you call a group of jellyfish?',
      options: ['School', 'Pod', 'Bloom', 'Pack'],
      answer: 'Bloom',
    },
    {
      question: 'Which of the following sea creatures is known for its long migration journey?',
      options: ['Sea Turtle', 'Great White Shark', 'Clownfish', 'Manatee'],
      answer: 'Sea Turtle',
    },
    {
      question: 'Which animal is known for its ability to squirt water to knock off prey?',
      options: ['Goby Fish', 'Squid', 'Octopus', 'Starfish'],
      answer: 'Octopus',
    },
    {
      question: 'What is the most common type of coral reef found in the tropics?',
      options: ['Barrier Reef', 'Atoll Reef', 'Fringing Reef', 'Patch Reef'],
      answer: 'Fringing Reef',
    },
  ];

  const getRandomPosition = () => Math.random() * 100; 
  const Bubble = ({ src }) => {
    useEffect(() => {
      document.documentElement.style.setProperty('--random-x', getRandomPosition());
    }, []);
  
    return <img src={src} alt="Bubble" className="img" />;
  };
  // Function to shuffle and select 5 random questions
  const getRandomQuestions = (questions, num = 5) => {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  };

  // State variables
  const [questionsList, setQuestionsList] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    // Initialize quiz with 5 random questions
    setQuestionsList(getRandomQuestions(allQuestions));
  }, []);

  // Handle answer selection
  const handleAnswerClick = (option) => {
    if (option === questionsList[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    // Move to the next question
    if (currentQuestionIndex < questionsList.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowScore(true);
    }
  };

  // Restart the quiz
  const handleRestart = () => {
    setQuestionsList(getRandomQuestions(allQuestions));
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="quizouter">

    <div className="img-container">
        <img src={bubble_1} alt="Jellyfish" className="img1" />
        <img src={bubble_2} alt="Jellyfish" className="img2" />
        <img src={bubble_1} alt="Jellyfish" className="img3" />
        <img src={bubble_2} alt="Jellyfish" className="img4" />
        <img src={bubble_2} alt="Jellyfish" className="img5" />
    </div>

      <div className="quiz-container">
        <div className="score-container">
          {showScore && <span className="score">Score: {score}/{questionsList.length}</span>}
        </div>

        {!showScore ? (
          questionsList.length > 0 && (
            <div className="question-container">
              <h2 className="question"> <QuestionAnswerIcon/> {questionsList[currentQuestionIndex]?.question}</h2>
              <div className="options">
                {questionsList[currentQuestionIndex]?.options.map((option, index) => (
                  <button
                    key={index}
                    className="option-button"
                    onClick={() => handleAnswerClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )
        ) : (
          <div className="result-container">
            <h2 className="result">Quiz Completed!</h2>
            <span className="score">Your Score: {score}/{questionsList.length}</span>
            <button className="restart-button" onClick={handleRestart}>
              Restart Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizComponent;
