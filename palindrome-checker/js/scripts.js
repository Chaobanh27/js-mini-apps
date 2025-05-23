const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");
let strToCheck = "";
const regex = /[^a-zA-Z0-9]/g

const checkInput = (val) => {
    strToCheck = val
}
const isPalindrome = (str) => {
    const reversedStr = str.replace(regex,'').split('').reverse().join('').toLowerCase();
    console.log(reversedStr)
    return str.replace(regex,'').toLowerCase() === reversedStr;
}
checkBtn.addEventListener("click",() => {
    if(strToCheck === ""){
        alert("Please input a value");
    }
    else{
        if (isPalindrome(strToCheck)) {
            result.textContent = strToCheck + " is a palindrome"
        } else {
            result.textContent = strToCheck + " is not a palindrome"
        }
    }
})

