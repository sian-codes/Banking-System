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

This example should bring up the array currentTrans & savingsTrans:

![Screenshot](/Screenshots/funds.png)

This example

This example brings up the object array created by parsing the csv file:

![alt text](https://app.photobucket.com/u/sian-codes/a/e12cd26f-5231-4ac4-9a34-468bee0b1f20/p/f278417d-b74c-460b-ab3f-eda8eaf51d35)

This shows the CurrentAccount and SavingsAccounts combined balances array:

![alt text](https://app.photobucket.com/u/sian-codes/a/e12cd26f-5231-4ac4-9a34-468bee0b1f20/p/62f6a856-a648-41d6-bf46-01699175322a)


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

![alt text](https://app.photobucket.com/u/sian-codes/a/e12cd26f-5231-4ac4-9a34-468bee0b1f20/p/f39c284c-ae22-400a-a2d3-3c42d990c4fc)

When the functions are completed you can then print out the CSV of the updated Array. 

This should bring up the CSV file of the transaction arrays:

![alt text](https://app.photobucket.com/u/sian-codes/a/e12cd26f-5231-4ac4-9a34-468bee0b1f20/p/8ea55933-9d5a-41da-a696-058056b4c0da)



## Version

Version 1.0.0

## Authors

Siân Kearley 2021


## Acknowledgments

* Thanks to BackBase for giving me the opportunity to attempt this task, it was really fun and taught me where my weakness' are and what I need to work on further. Whilst I was not able to meet all the requirements for the task I will continue to work on it.
* After this has been submitted I will be continuing with the project by including a simple UI where the bank can upload their csv files, creating a database to hold the data and, after more research, will refactor my code and look for a more elegant way to meet the aspects of the brief more accurately. 




