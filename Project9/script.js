const balacne = document.getElementById('balance');
const moneyCredit = document.getElementById('money-credit');
const moneyDebit = document.getElementById('money-debit');
const list = document.getElementById('list');
const form = document.getElementById('add-form');
const reason = document.getElementById('reason');
const amount = document.getElementById('amount');

const Transactions = [
   {id: 1, reason:'salery', amount:5000},
   {id: 2, reason:'breakfast', amount:-20},
   {id: 3, reason:'shopping', amount:-30},
   {id: 4, reason:'dinner', amount:-60},
];

let transactions = Transactions;



// function to display transaction in DOM
function displayTransaction(transaction){
    // calculate if transaction is credit or debit
    const type = transaction.amount > 0 ? '+' : '-';
    // create a list item for transaction
    const transactionLI = document.createElement('li');
    // Determine class based on transaction type. if positive then credit otherwise debit
    transactionLI.classList.add( transaction.amount > 0 ? 'credit' : 'debit');
    // assign inner HTML
    transactionLI.innerHTML = `
        ${transaction.reason} <span>${transaction.amount}</span>
         <button class="delete" onClick="deleteTransaction(${transaction.id})">x</button>
    `;
    //add the li in the DOM uner the transaction hitory li

    list.appendChild(transactionLI);
};

//funtion to update balance:
function updateBalance(){
    // create a new array with just the amount from the transaction array
    const transactionAmount = transactions.map(transaction => transaction.amount );
    // calculate total balance value:
    const totalBalance = transactionAmount.reduce( (acc,amount) => (acc += amount),0);
    // calculate credit value:
    const creditValue = transactionAmount.filter(amount=> amount > 0).
                                    reduce((acc,amount)=>(acc+=amount),0);
    //calculate debit value                                
 const debitValue = transactionAmount.filter(amount=> amount < 0).
                                    reduce((acc,amount)=>(acc+=amount),0);

    //update balance value
    balacne.innerText=`$${totalBalance}`;
    //update credit value:
    moneyCredit.innerText =`$${creditValue}`;
    //update debit vale:
    moneyDebit.innerText=`$${debitValue}`;

};

//function to create Random id:
function createId(){
    return Math.floor(Math.random() * 10000000);
};

//function to add Transaction from the form:
function addTransaction(e){
    //stop reload page:
    e.preventDefault();
    // check if form has valid data:
    if(reason.value.trim() === '' || amount.value.trim() === ''){
        //display error message:
        alert('Please Provide valid data');
    }
    else{
        //create an object for the transaction containing an id 
        //for transaction, text for reason, and amount for transaction

        const transaction = {
            id: createId(),
            reason: reason.value,
            amount: +amount.value
        }
       // push the new transaction into Transaction Array:
       transactions.push(transaction);
       //Display the new transaction into the DOM:
       displayTransaction(transaction); 
       //Update All Balance:
       updateBalance();
       //clear form fields:
       reason.value = '';
       amount.value = '';
    }
    
};

// function to delete transaction
function deleteTransaction(id){
    transactions = transactions.filter(transaction => transaction.id !== id);
    // intilize the app again to update the DOM
    init();
}
    
//function to Initilaize App
function init(){
    // clear all transaction Hitory    
    list.innerHTML = '';
    //Display all transaction in DB
    transactions.forEach(displayTransaction);
    updateBalance();
};


// Event Listner for form submit:
form.addEventListener('submit',addTransaction);

//initilaize App
init();

