//--Retrievieng Html element from the DOM

const form = document.getElementById('form');
const userName = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confrm = document.getElementById('conform');

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



//--Event Listner
form.addEventListener('submit',function(e){
    //stop page from reloading
    e.preventDefault();

    if(userName.value === '')
    {
        showError(userName,'User Name Required');
    }
    else{
        showSucess(userName);
    }
    // for Email
    if(email.value === '')
    {
        showError(email,'Email Name Required');
    }
    else{
        showSucess(email);
    }
    //for Password
    if(password.value === '')
    {
        showError(password,'password Name Required');
    }
    else{
        showSucess(password);
    }

    // for cnfrmation
    if(confrm.value === '')
    {
        showError(confrm,'Conformation Required');
    }
    else{
        showSucess(confrm);
    }

});