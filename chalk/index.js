const chalk = require('chalk');

console.log(chalk.red('哈哈哈哈'));
console.log(chalk.blue.bgRed.bold('Hello world!'));
console.log(`
    CPU: ${chalk.red('90%')}
    RAM: ${chalk.green('40%')}
    DISK: ${chalk.yellow('70%')}
`);