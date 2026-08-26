import { getRandom, playGame } from '../core.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const runGame = () => {
  const getRoundData = () => {
    const question = getRandom(1, 100);
    const answer = isEven(question) ? 'yes' : 'no';
    return { question, answer };
  };
  playGame(description, getRoundData);
};

export default runGame;
