const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const cPassword = document.getElementById("confirm-password");
const submit = document.getElementById("btn");


form.addEventListener('submit', (e) => {
    e.preventDefault();


    validateInputs();
})

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const cPasswordValue = cPassword.value.trim();


    if (usernameValue === '') {
        setError(username, 'Username is required');
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, 'Email is Required')
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid Email address ')
    } else {
        setSuccess(email);
    }


    if (passwordValue === '') {
        setError(password, 'password is required');

    } else if (passwordValue.length < 8) {
        setError(password, 'password should be at least 8 characters')

    } else {
        setSuccess(password)
    }


    if (cPasswordValue === '') {
        setError(cPassword, 'Please confirm your password')
    } else if (cPassword !== passwordValue) {
        setError(password, "Password does not match")
    } else {
        setSuccess(cPassword);
    }
}


const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')
    errorDisplay.innertext = message;

    inputControl.classList.add('error')
    inputControl.classList.remove('success')

}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error')

    errorDisplay.innertext = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');

}