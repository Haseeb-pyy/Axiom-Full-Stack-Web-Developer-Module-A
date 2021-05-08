//--Retrievieng Html element from the DOM

const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('conform');

// function for show error
function showError(input , message){
    //first we need parent element
    const formControl = input.parentElement;
    // then we add error class
    formControl.className = 'form-control error'
    // then we need to show error message
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// function to show Sucess class
function showSucess(input){
    const formContol = input.parentElement;
    formContol.className = 'form-control sucess'
}
// function to check if required field have data or not
function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value === '')
        {
            showError(input,`${getFieldId(input)} is Required`);
        }
        else {
            showSucess(input);
        }
    });
}

// function to get the id of the input field 

function getFieldId(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// function to show is Email valid

function checkEmail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim()))
    {
        showSucess(input);
    }
    else {
        showError(input,`this is not a valid Email`);
    }

}

// function to match password and password2

function checkPassword(input1,input2)
{
    if(input1.value !== input2.value)
    {
        showError(input2,`Password is not the same`);
    }
    else{
        showSucess(input);
    }
}


// function to check character at least 3,10 (in user name) and 6 to 30 at (password)
function checkLength(input,min,max)
{
    if (input.value.length < min)
    {
        showError(input,`${getFieldId(input)} is more than ${min}`)
    }
    else if (input.value.length > max)
    {
        showError(input,`${getFieldId(input)} is less than ${max}`)
    }
    else{
        showSucess(input);
    }
}

//--Event Listner
form.addEventListener('submit',function(e){
    //stop page from reloading
    e.preventDefault();

    checkRequired([userName,email,password,password2]);
    checkLength(userName,3,10);
    checkLength(password,6,20);
    checkEmail(email);
    checkPassword(password,password2);
});


let numberCount = 0;
let counter = setInterval(() => {
    if(numberCount < 101){
        const number = document.querySelector('.number');
        const barline = document.querySelector('.barline');
        number.textContent = `${numberCount}%`
        barline.style.width = `${numberCount}%`; 
        numberCount++;
    }
    else{
        clearInterval(counter);
        const loading = document.querySelector('.loading');
        loading.classList.add('bhaag');
    }
     //niche jo 40 likha hai uska mtlb 5 seconds hai wahan time barha sakte hein
}, 40)

