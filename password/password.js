
function passwordMaker() {
    let length = 6;
    let password = "";
    let character = '0123456789';
    for (let i = 1; i <= length; i++) {
        password += character.charAt(Math.floor(Math.random()* character.length));

    }

    document.getElementById("password").innerHTML = password;
}