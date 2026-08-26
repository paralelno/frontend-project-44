import readlineSync from 'readline-sync';

const ROUNDS_TO_WIN = 3;

const getRandom = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const askName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

const playGame = (description, getRoundData) => {
  console.log('Welcome to the Brain Games!');
  const name = askName();
  console.log(description);

  for (let round = 0; round < ROUNDS_TO_WIN; round += 1) {
    const { question, answer } = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ').trim().toLowerCase();

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export { getRandom, playGame };
