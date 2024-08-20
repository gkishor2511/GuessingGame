import React, { useState } from 'react';

const GuessingGame = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
  const [randomNumber] = useState(Math.floor(Math.random() * 10) + 1);

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    if (numGuess < 1 || numGuess > 10) {
      setMessage('Please enter a number between 1 and 10.');
    } else if (numGuess < randomNumber) {
      setMessage('Too Low! Try Again!');
    } else if (numGuess > randomNumber) {
      setMessage('Too High! Try Again!');
    } else {
      setMessage('Congratulations! You guessed the right number!');
    }
  };

  return (
    <div 
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp308AjW7_Vcc-v2ZAUEIr_T-LBUcItFnHcA&s")' }}
    >
      <div className="bg-slate-400 p-6 rounded-lg shadow-lg w-full max-w-xs bg-opacity-80">
        <h1 className="text-2xl font-bold text-center mb-4">Guessing Game</h1>
        <p className="text-center mb-6">Find the right number between 1 and 10</p>
        <input
          type="number"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          className="w-full p-2 mb-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleGuess}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          Check
        </button>
        {message && (
          <p className="mt-4 text-center font-bold text-purple-600">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default GuessingGame;
