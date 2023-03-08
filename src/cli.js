import readlineSync from 'readline-sync';

const askName = () => {
    return readlineSync.question('May I have your name? ');
};

const start = () => {
    console.log('Welcome to the Brain Games!');

    const name = askName(); 

    console.log(`Hello, ${name}!`);
}

export {start};