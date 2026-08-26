import { getRandom, playGame } from '../core.js';

const description = 'What number is missing in the progression?';

const PROGRESSION_LENGTH = 10;

const buildProgression = (start, step, length) => {
  const result = [];
  for (let i = 0; i < length; i += 1) {
    result.push(start + i * step);
  }
  return result;
};

const runGame = () => {
  const getRoundData = () => {
    const start = getRandom(1, 20);
    const step = getRandom(1, 10);
    const progression = buildProgression(start, step, PROGRESSION_LENGTH);
    const hiddenIndex = getRandom(0, PROGRESSION_LENGTH - 1);
    const answer = String(progression[hiddenIndex]);
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
    return { question, answer };
  };
  playGame(description, getRoundData);
};

export default runGame;
