# BackBase Submission

BaseBase Task - To create a solution that automatically transfers funds from a customers savings account to their current account to minimise overdraft fees

## Getting Started

Please download the files onto your desktop

### Prerequisites

What things you need to install the software and how to install them

```
Command Terminal Instructions:

Whilst inside your project folder 

cd desktop/"file name" 

Install Node and csv-parser

$ npm i node

$ npm install csv-parser 
```

### Installing

Once the prerequisits are installed on the package you can use the commented console.log's to test where the data is being saved and their types

```
console.log(currentTrans); 

```

This example should bring up the array currentTrans

## Running the tests

You will need to save the test files into the folder testData.
Once this has been done you will need to go into the code, locate the createReadStream line :

```
fs.createReadStream(__dirname+'/testData/customer-1234567-ledger.csv').pipe(parser)
```

and change the "/customer-1234567-ledger.csv" to the name of the file you are looking to import

The code should import the file into an array of objects and array of the transactions of the current and savings accounts.

functions to withdraw and deposit into accounts have been included but at this point in time I was unable to sum the values of the account arrays, I used the following snippits but for some reason my code would not compile as expected.

```
Example 
```

## Version

Version 1.0.0

## Authors

Siân Kearley 2021


## Acknowledgments

* Thanks to BackBase for giving me the opportunity to attempt this task, it was really fun and taught me where my weakness' are and what I need to work on further. Whilst I was not able to meet all the requirements for the task I will continue to work on it.
* After this has been submitted I will be conitnuing with the project by including a simple UI where the bank can upload their csv files, creating a database to hold the data and, after more research, complete the main objectives of the task which I unfortunately didn't succeed with




