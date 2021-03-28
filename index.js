#! /usr/bin/env node
const Command = require('commander').Command;
const program = new Command();
const axios = require('axios');
const pckg = require('./package.json')
const constants = require('./constants.json')

program.version(pckg.version)

program
  .arguments('<stock>')
  .description('get stock value')
  .action((stock) => {
    console.log("fetching data...");
    axios.get(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${constants.key}`)
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