import { Command } from 'commander';
const program = new Command();
import { get } from 'axios';
import { version } from './package.json';
import { key } from './constants.json';

program.version(version)

program
  .arguments('<stock>')
  .description('get stock value')
  .action((stock) => {
    console.log("fetching data...");
    get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${key}`)
        .then(function (response) {
            // handle success
            console.log(`Stock value: ${response.data['Global Quote']['05. price']}`);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
  })

  program.parse(process.argv);