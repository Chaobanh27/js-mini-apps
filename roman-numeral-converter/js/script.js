const inputValue = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const message = document.querySelector(".message");
const messageOutput = document.getElementById("output");

const romanObj = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
};
let num = 0;

const converterInput = (val) => {
    num = val;
}

const intToRoman = () => {
    let romanStr = '';
    for (let key in romanObj) {
        while (num >= romanObj[key]) {
            romanStr += key;
            //Khi num = 0 thì việc chuyển đổi đã hoàn tất
            num -= romanObj[key];
        }
    }
    return romanStr;
}

convertBtn.addEventListener("click",() => {
    const inputValueNum = parseInt(inputValue.value);
    converterInput(inputValueNum);
    message.style.display = "block";
    if(num < 1){
        messageOutput.textContent = "Please enter a number greater than or equal to 1";
        message.style.border = "3px solid #FF0000";
        message.style.backgroundColor = "#FF8488";
        message.style.fontSize = "20px";
        return;
    }
    else if(num > 3999){
        messageOutput.textContent = "Please enter a number less than or equal to 3999";
        message.style.border = "3px solid #FF0000";
        message.style.backgroundColor = "#FF8488";
        message.style.fontSize = "20px";
        return;
    }
    else if(isNaN(num)){
        messageOutput.textContent = "Please enter a valid number";
        message.style.border = "3px solid #FF0000";
        message.style.backgroundColor = "#FF8488";
        message.style.fontSize = "20px";
    }
    else{
        messageOutput.textContent =  intToRoman();
        message.style.border = "3px solid #FFFFFF";
        message.style.backgroundColor = "#000000";
        message.style.fontSize = "30px";
    }
})