const currencyOne = document.getElementById('currencyOne');
const amountOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currencyTwo');
const amountTwo = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');


function calculate() {
        const currencyOneCode = currencyOne.value;
        const currenctTwoCode = currencyTwo.value;
        fetch(` https://v6.exchangerate-api.com/v6/76a3f2afcb44bb253bf9cbd4/pair/${currencyOneCode}/${currenctTwoCode}`)
             .then(res=> res.json())
             .then(data => {
                        const conversionRate = data.conversion_rate;
                        rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currenctTwoCode}`;
                        });
};

// Event Listners:
// 1:
currencyOne.addEventListener('change',calculate);
amountOne.addEventListener('input',calculate);
currencyTwo.addEventListener('change',calculate);
amountTwo.addEventListener('input',calculate);
swap.addEventListener('click',() =>{
        const tem = currencyOne.value;
        currencyOne.value = currencyTwo.value;
        currencyTwo.value = tem;
        calculate();
        
})

calculate();