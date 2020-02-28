

// const rl = requier('readline').createInterface(process.stdin. process.stdout);

// module.exports = {
//     input(prompt) {
//         const promise = new Promise(()=> {
//         rl.setPrompt(prompt);
//         rl.prompt();
//         rl.on('line', userInput => {
//             input=userInput;
//             resolve(input);
// this.input=userInputj;

//         })
//     }

// }

const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

module.exports = {
    prompt(prompt) {
        rl.setPrompt(prompt);
        rl.prompt();
    },
    in(cb) {
        rl.on('line', data => {
            if(data.trim() == 'exit') {
                rl.close();
            } else {
                cb(data);
            }
        })
    }
}
// solution by Harcourt