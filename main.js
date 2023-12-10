const emailInput = document.getElementById("email");
const validMessage = document.getElementById('invalid_message');
const signUpcard = document.querySelector('.sign-up-card');
const successMessage = document.querySelector('.success-message');
const btn = document.querySelector('.btn');
const emailAdress = document.getElementById('emailAdress');
const validRegex = /\S+@\S+\.\S+/;

btn.addEventListener('click', (e) => {
    e.preventDefault();
    let email = emailInput.value;
    if (validRegex.test(email)) {
        signUpcard.style.display = 'none';
        successMessage.style.display = 'flex';
    }else {
        validMessage.innerHTML = "Valid email required";
        emailInput.classList.remove("valid_input");
        emailInput.classList.add("invalid_input"); 
    }
    emailAdress.innerText = email;
});






