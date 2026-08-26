import { getRandom, playGame } from '../core.js';

const description = 'What is the result of the expression?';

const OPERATORS = ['+', '-', '*'];

const calc = (a, b, op) => {
  switch (op) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${op}`);
  }
};

const runGame = () => {
  const getRoundData = () => {
    const a = getRandom(1, 50);
    const b = getRandom(1, 50);
    const op = OPERATORS[getRandom(0, OPERATORS.length - 1)];
    const question = `${a} ${op} ${b}`;
    const answer = String(calc(a, b, op));
    return { question, answer };
  };
  playGame(description, getRoundData);
};

export default runGame;
