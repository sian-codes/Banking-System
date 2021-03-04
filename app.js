const fastcsv = require('fast-csv');
var fs = require('fs');
var parse = require('csv-parse');


var transactionValues = []; //Need an array to hold transactions

var currentTrans = [0];
var savingsTrans = [0];

//constuctor for transactions array
function addData (id, accountType, initiatorType, dateTime, transactions) {
  var data = {
    "AccountID" : id,
    "AccountType" : accountType,
    "InitiatorType" : initiatorType,
    "DateTime" : dateTime,
    "TransactionValue" : parseFloat(transactions)
  }
  transactionValues.push(data); //should add a new line
}

function logTrans (accountType, transactions) {
  if (accountType == "CURRENT") {
    var cTrans = parseFloat(transactions);
    currentTrans.push(cTrans);
}
  else {
    var sTrans = parseFloat(transactions);
      savingsTrans.push(sTrans);
    }
  };

  // checks the amount is a number or not
    function checkAmount (amount) {
      if (typeof amount === "number") {
        return true;
      } else {
        return false;
      }
    };

  //the deposit function which adds the deposit to the transaction array
    function deposit(accountType, amount){
      var isValid = checkAmount (amount);
      if (isValid) {
        var deposited = accountType.balance += amount;
        console.log ("You have deposited "+ amount + " into your " + accountType + ". Your balance is now: " + accountType.balance);
        this.transactionValues.push({
          AccountID : id,
          AccountType : accountType,
          InitiatorType : "SYSTEM",
          DateTime : new Date(dateTime),
          TransactionValue : parseFloat(transactions)
        });
        return
      } else {
        console.log ("Amount attempted to deposit is not valid. Please try again");
      }
    };



  //function which adds the withdrawn details to the transaction array
  function withdraw(accountType, amount) {
      var isValid = checkAmount(amount);
      if (isValid) {
          if (amount > accountType.balance){
              console.log("I am sorry, you do not have enough funds");
          } else {
              var withdrawn = accountType.balance -= amount;
              console.log ("You have withdrawn " + amount + " from your " + accountType + ". Your balance is now: " + accountType.balance);
              this.transactionValues.push({
                AccountID : id,
                AccountType : accountType,
                InitiatorType : "SYSTEM",
                DateTime : new Date(dateTime),
                TransactionValue : parseFloat(transactions)
              });
              return
          }
      } else {
          console.log("Please enter a number to deposit");
      }
  };


//parses the csv file, loops each row and adds it to the transactionValue array
var parser = parse({columns: true}, function (err, results) {
//console.table(results);
for (const row of results) {
addData(row.AccountID, row.AccountType, row.InitiatorType, row.DateTime, row.TransactionValue );
logTrans(row.AccountType, row.TransactionValue);
}
// console.log(transactionValues);
// console.log(currentTrans);
// console.log(savingsTrans);

const currentBalance = currentTrans.reduce((sum, x) => sum + x);
const savingBalance = savingsTrans.reduce((sum, x) => sum + x);

// console.log(currentBalance.toFixed(2));
// console.log(savingBalance.toFixed(2));

//Function transfer which will transfer funds from savings to current if current
//account has less that the amount and savings account has more than the amount.

function transfer (amount, transferAccount) {
  var isValid = checkAmount(amount);
  if (isValid) {
      if (currentBalance < amount && savingsBalance > amount){
        transferAccount.currentBalance += amount;
        transferAccount.savingsBalance -= amount;
        this.transactionValues.push({
          AccountID : id,
          AccountType : accountType,
          InitiatorType : "SYSTEM",
          DateTime : new Date(dateTime),
          TransactionValue : parseFloat(transactions)
        })
      console.log("Transfer success");
       }
     else {
       console.log ("You do not have enough funds in savings account to complete transfer");
     }
   }};

// the print out of the transaction values is csv format
const ws = fs.createWriteStream("testOutput/out.csv");
fastcsv
  .write(transactionValues, { headers: true })
  .pipe(ws);
});

fs.createReadStream(__dirname+'/testData/customer-1234567-ledger.csv').pipe(parser)
