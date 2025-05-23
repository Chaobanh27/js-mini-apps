const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length");
const lengthDisplay = document.getElementById("length-value");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

const generateButton = document.getElementById("generate-btn");
const copyButton = document.getElementById("copy-btn");
const strengthBar = document.querySelector(".strength-bar");
const strengthText = document.querySelector(".strength-container p");
const strengthLabel = document.getElementById("strength-label");

const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?/";

const upperCaseRegex = /[A-Z]/;
const lowerCaseRegex = /[a-z]/;
const numberRegex = /[0-9]/;
const symbolRegex = /[!@#$%^&*()-_=+[\]{}|;:,.<>?]/;

window.addEventListener("DOMContentLoaded", createPassword);
generateButton.addEventListener("click", createPassword)

lengthSlider.addEventListener("input", () => {
    lengthDisplay.textContent = lengthSlider.value;
});


function createPassword(){
    const length = Number(lengthSlider.value)

    const includeUppercase = uppercaseCheckbox.checked;
    const includeLowercase = lowercaseCheckbox.checked;
    const includeNumbers = numbersCheckbox.checked;
    const includeSymbols = symbolsCheckbox.checked;

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        alert("Please select at least one char type.");
        return;
    }

    const newPassword = createRandomPassword(
        length,
        includeUppercase,
        includeLowercase,
        includeNumbers,
        includeSymbols
    );
    passwordInput.value = newPassword;
    updateStrengthMeter(newPassword);
}

function createRandomPassword(
    length,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols) {

    let allCharacters = ""

    if (includeUppercase) allCharacters += uppercaseLetters;
    if (includeLowercase) allCharacters += lowercaseLetters;
    if (includeNumbers) allCharacters += numberCharacters;
    if (includeSymbols) allCharacters += symbolCharacters;

    let password = "";

    /*
    Lặp length lần (số ký tự người dùng yêu cầu)
    Chọn ký tự ngẫu nhiên trong chuỗi allCharacters
    bắt buộc Math.random() * allCharacters.length bởi vì chỉ lấy từ index 0 đến allCharacters.length
    Lấy ký tự tại vị trí đó và nối vào password
    */

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length);
        password += allCharacters[randomIndex];
    }

    return password;
}

function updateStrengthMeter(password){
    const passwordLength = password.length;
    const hasUppercase = upperCaseRegex.test(password);
    const hasLowercase = lowerCaseRegex.test(password);
    const hasNumbers = numberRegex.test(password);
    const hasSymbols = symbolRegex.test(password);

    let strengthScore = 0;

    //đảm bao điểm cao nhất là 40 kể cả nếu như passwordLength là 30 * 2 = 60 
    strengthScore += Math.min(passwordLength * 2, 40);

    if (hasUppercase) strengthScore += 15;
    if (hasLowercase) strengthScore += 15;
    if (hasNumbers) strengthScore += 15;
    if (hasSymbols) strengthScore += 15;

    // đảm bảo mức điểm tối thiểu vẫn là 40 với password có đủ thành phần nhưng quá ngắn
    if (passwordLength < 8) {
        strengthScore = Math.min(strengthScore, 40);
    }

    // đảm bảo điểm trong khoảng 5% đến 100%
    const safeScore = Math.max(5, Math.min(100, strengthScore));
    strengthBar.style.width = safeScore + "%";

    let strengthLabelText = "";
    let barColor = "";

    if (strengthScore < 40) {
        barColor = "#fc8181";
        strengthLabelText = "Weak";
    } else if (strengthScore < 70) {
        barColor = "#fbd38d";
        strengthLabelText = "Medium";
    } else {
        barColor = "#68d391";
        strengthLabelText = "Strong";
    }

    strengthBar.style.backgroundColor = barColor;
    strengthLabel.textContent = strengthLabelText;

}


copyButton.addEventListener("click", () => {
  if (!passwordInput.value) return;

  navigator.clipboard
    .writeText(passwordInput.value)
    .then(() => showCopySuccess())
    .catch((error) => console.log("Could not copy:", error));
});

function showCopySuccess() {
  copyButton.classList.remove("far", "fa-copy");
  copyButton.classList.add("fas", "fa-check");
  copyButton.style.color = "#48bb78";

  setTimeout(() => {
    copyButton.classList.remove("fas", "fa-check");
    copyButton.classList.add("far", "fa-copy");
    copyButton.style.color = "";
  }, 1500);
}