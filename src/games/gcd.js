import { getRandom, playGame } from '../core.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const t = y;
    y = x % y;
    x = t;
  }
  return x;
};

const runGame = () => {
  const getRoundData = () => {
    const a = getRandom(1, 100);
    const b = getRandom(1, 100);
    const question = `${a} ${b}`;
    const answer = String(gcd(a, b));
    return { question, answer };
  };
  playGame(description, getRoundData);
};

export default runGame;
