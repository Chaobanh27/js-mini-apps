const formSignUp = document.getElementById("form-sign-up")
const formLogin = document.getElementById("form-login")
const firstName = document.getElementById("first-name")
const lastName = document.getElementById("last-name")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const reEnterPass = document.getElementById("re-enter-pass")
const loginUsername = document.getElementById("login-username")
const loginPassword = document.getElementById("login-password")

//sign up submit
formSignUp.addEventListener("submit",(e) => {
    e.preventDefault();
    validateSignUp();
})

//login submit
formLogin.addEventListener("submit",(e) => {
    e.preventDefault();
    validateLogin()
})


const setError = (element,message) => {
    const formOutline = element.parentElement
    const errorDisplay = formOutline.querySelector(".error")
    errorDisplay.innerHTML = message
    formOutline.classList.add("error")
    formOutline.classList.remove("success")
}
const setSuccess = (element) => {
    const formOutline = element.parentElement
    const errorDisplay = formOutline.querySelector(".error")
    errorDisplay.innerHTML = ""
    formOutline.classList.add("success")
    formOutline.classList.remove("error")
}

//validate login inputs
const validateLogin = () => {
    const usernameValue = loginUsername.value;
    const passwordValue = loginPassword.value;

    // username
    if(usernameValue === ""){
        setError(loginUsername,"Username is required !")
    }
    else{
        setSuccess(loginUsername)
    }

    // password
    if(passwordValue === ""){
        setError(loginPassword,"Password is required !")
    }
    else{
        setSuccess(loginPassword)
    }
}

//validate sign up inputs
const validateSignUp = () => {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const reEnterPassValue = reEnterPass.value;

    let usernameRegWS = /^(?=.*\s)/ //whitespace
    let usernameRegFirstLetter =  /^[A-Z]/  //first letter uppercase
    let usernameRegNum = /^(?=.*[0-9])/  //number
    let usernameRegSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/ // special symbol

    let emailRegex = /^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/
    let passRegWS = /^(?=.*\s)/     //whitespace
    let passRegUpper = /^(?=.*[A-Z])/ //uppercase
    let passRegLower = /^(?=.*[a-z])/ //lowercase
    let passRegNum = /^(?=.*[0-9])/ //number
    let passRegSymbol = /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])/ //special symbol

    // firstName
    if(firstNameValue === ""){
        setError(firstName,"Firstname is required !")
    }
    else{
        setSuccess(firstName)
    }

    // lastName
    if(lastNameValue === ""){
        setError(lastName,"Lastname is required !")
    }
    else{
        setSuccess(lastName)
    }

    // username
    if(usernameValue === ""){
        setError(username,"Username is required !")
    }
    else if(usernameValue.length < 6 || usernameValue.length > 30){
        setError(username,"Username must be between 6 and 30 characters long")
    }
    else if(usernameValue.match(usernameRegWS)){
        setError(username,"Username must not contain whitespace")
    }
    else if(!usernameValue.match(usernameRegFirstLetter)){
        setError(username,"The first letter must be uppercase")
    }
    else if(!usernameValue.match(usernameRegNum)){
        setError(username,"Password must contain at least one Digit")
    }
    else if(usernameValue.match(usernameRegSymbol)){
        setError(username,"Password must not contain special symbol ")
    }
    else{
        setSuccess(username)
    }

    // email
    if(emailValue === ""){
        setError(email,"Email is required !")
    }
    else if(!emailRegex.test(emailValue)){
        setError(email,"The email domain must be gmail.com")
    }
    else{
        setSuccess(email)
    }

    //password
    if(passwordValue === ""){
        setError(password,"Password is required !")
    }
    else if(passwordValue.length < 8 || passwordValue.length > 50){
        setError(password,"password must be between 8 and 50 characters long")
    }
    else if(passwordValue.match(passRegWS)){
        setError(password,"Password must not contain Whitespaces")
    }
    else if(!passwordValue.match(passRegUpper)){
        setError(password,"Password must have at least one Uppercase Character")
    }
    else if(!passwordValue.match(passRegLower)){
        setError(password,"Password must have at least one Lowercase Character")
    }
    else if(!passwordValue.match(passRegNum)){
        setError(password,"Password must contain at least one Digit")
    }
    else if(!passwordValue.match(passRegSymbol)){
        setError(password,"Password must contain at least one special symbol")
    }
    else{
        setSuccess(password)
    }

    //reEnterPass
    if(reEnterPassValue === ""){
        setError(reEnterPass,"Re-enter password is required !")
    }
    else if(reEnterPassValue !== passwordValue){
        setError(reEnterPass,"Passwords do not match")
    }
    else{
        setSuccess(reEnterPass)
    }
}