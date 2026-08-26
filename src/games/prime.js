import { getRandom, playGame } from '../core.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

const runGame = () => {
  const getRoundData = () => {
    const question = getRandom(1, 100);
    const answer = isPrime(question) ? 'yes' : 'no';
    return { question, answer };
  };
  playGame(description, getRoundData);
};

export default runGame;
