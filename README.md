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

Install Node, csv-parser and csv-writer

$ npm i node

$ npm install csv-parser 

npm i -s csv-writer
```

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

Functions to withdraw and deposit into accounts have been included, the sum of these arrays were produced and used to create a transfer function. The transactions array will be updated when a transfer is made and then that array is printed onto a csv file.

```
Example 
```

## Version

Version 1.0.0

## Authors

Siân Kearley 2021


## Acknowledgments

* Thanks to BackBase for giving me the opportunity to attempt this task, it was really fun and taught me where my weakness' are and what I need to work on further. Whilst I was not able to meet all the requirements for the task I will continue to work on it.
* After this has been submitted I will be continuing with the project by including a simple UI where the bank can upload their csv files, creating a database to hold the data and, after more research, will refactor my code and look for a more elegant way to meet the aspects of the brief more accurately. 




