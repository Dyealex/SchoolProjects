

const rl = requier('readline').createInterface(process.stdin. process.stdout);

module.exports = {
    input(prompt) {
        const promise = new Promise(()=> {
        rl.setPrompt(prompt);
        rl.prompt();
        rl.on('line', userInput => {
            input=userInput;
            resolve(input);
this.input=userInputj;

        })
    }

}