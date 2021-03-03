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


//parses the csv file, loops each row and adds it to the transactionValue array
var parser = parse({columns: true}, function (err, results) {
console.table(results);
for (const row of results) {
addData(row.AccountID, row.AccountType, row.InitiatorType, row.DateTime, row.TransactionValue );
logTrans(row.AccountType, row.TransactionValue);
}
console.log(transactionValues);
console.log(currentTrans);
console.log(savingsTrans);
});

fs.createReadStream(__dirname+'/testData/customer-1234567-ledger.csv').pipe(parser)


// checks the amount is a number or not
  function checkAmount (amount) {
    if (typeof amount === "number") {
      return true;
    } else {
      return false;
    }
  };

//the deposit function
  function deposit(accountType, amount){
    var isValid = checkAmount (amount);
    if (isValid) {
      var deposited = accountType.balance += amount;
      console.log ("You have deposited "+ amount + " into your " + accountType + ". Your balance is now: " + accountType.balance);
      return
    } else {
      console.log ("Amount attempted to deposit is not valid. Please try again");
    }
  };



//withdraw function
function withdraw(accountType, amount) {
    var isValid = checkAmount(amount);
    if (isValid) {
        if (amount > accountType.balance){
            console.log("I am sorry, you do not have enough funds");
        } else {
            var withdrawn = accountType.balance -= amount;
            console.log ("You have withdrawn " + amount + " from your " + accountType + ". Your balance is now: " + accountType.balance);
            return
        }
    } else {
        console.log("Please enter a number to deposit");
    }
};



currentTrans.reduce((a,b) => a+b);
console.log(currentTrans);


// this does create a csv file called Out.csv but it's blank
// data = fs.createWriteStream("out.csv");
// fastcsv
//   .write(data, { headers: true })
//   .pipe(data);
