# BackBase Task

BaseBase Task - To create a solution that automatically transfers funds from a customers savings account to their current account to minimise overdraft fees

## Getting Started

Please download the files onto your desktop

### Prerequisites

What things you need to install the software and how to install them

```
Command Terminal Instructions:

Whilst inside your project folder 

cd desktop/"file name" 

Install Node, csv-parser and fast-csv

$ npm i node

$ npm install csv-parser 

$ npm i -s fast-csv

```
### Running the tests

## console.log's Testing: 

Once the prerequisits are installed on the package you can use the commented console.log's to test where the data is being saved and if the function works

```
console.log(currentTrans); 

```

This example should bring up the array currentTrans & savingsTrans(yellow):

![Screenshot](/Screenshots/funds.png)

```
//console.table(results);
```

This example brings up the object array created by parsing the csv file:

![Screenshot](/Screenshots/csvArrayObjects.png)

```
// console.log(currentTrans);
// console.log(savingsTrans);
```

This shows the CurrentAccount and SavingsAccounts combined balances array(pink):

![Screenshot](/Screenshots/funds.png)

```
// console.log(currentBalance.toFixed(2));
// console.log(savingBalance.toFixed(2));
```

Functions to withdraw and deposit into accounts have been included, the sum of these arrays were produced and used to create a transfer function. The transactions array will be updated when a transfer is made and then that array is printed onto a csv file.

```
Example 
```
##Testing with CSV Files

You will need to save the test files into the folder "/testData".
Once this has been done you will need to go into the code, locate the createReadStream line :

```
fs.createReadStream(__dirname+'/testData/customer-1234567-ledger.csv').pipe(parser)
```

and change the "/customer-1234567-ledger.csv" to the name of the file you are looking to import.

The code should import the file into an array of objects and array of the transactions of the current and savings accounts.

CSV Import:

![Screenshot](/Screenshots/INPUTCSV.png)

When the functions are completed you can then print out the CSV of the updated Array. 

This should bring up the CSV file of the transaction arrays:

![Screenshot](/Screenshots/OUTCSV.png)



## Version

Version 1.0.0

## Authors

Siân Kearley 2021


## Acknowledgments

* I will be continuing with the project by including a simple UI where the bank can upload their csv files, creating a database to hold the data and, after more research, will refactor my code and look for a more elegant way to meet the aspects of the brief more accurately. 
* Next Task - Creating the automatic transfer




