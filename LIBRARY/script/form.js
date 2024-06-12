function validateUsername() {
    const username = document.getElementById('username').value;
    const usernameError = document.getElementById('username-error');
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;

    if (!usernameRegex.test(username)) {
        usernameError.textContent = 'Username must be 3-15 characters long and contain only letters and numbers.';
        usernameError.style.color = 'red';
        return false;
    } else {
        usernameError.textContent = 'Username is valid.';
        usernameError.style.color = 'green';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.color = 'red';
        return false;
    } else {
        emailError.textContent = 'Email is valid.';
        emailError.style.color = 'green';
        return true;
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordError = document.getElementById('password-error');
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (!passwordRegex.test(password)) {
        passwordError.textContent = 'Password must be at least 8 characters long and contain at least one letter and one number.';
        passwordError.style.color = 'red';
        return false;
    } else {
        passwordError.textContent = 'Password is valid.';
        passwordError.style.color = 'green';
        return true;
    }
}

function validatePasswordMatch() {
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    const password2Error = document.getElementById('password2-error');

    if (password !== password2) {
        password2Error.textContent = 'Passwords do not match.';
        password2Error.style.color = 'red';
        return false;
    } else {
        password2Error.textContent = 'Passwords match.';
        password2Error.style.color = 'green';
        return true;
    }
}

function validateForm() {
    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPasswordMatchValid = validatePasswordMatch();

    const isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isPasswordMatchValid;
    document.getElementById('signup-submit').disabled = !isFormValid;
    return isFormValid;
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault();
        alert('Please fill out all fields correctly.');
    }
});
