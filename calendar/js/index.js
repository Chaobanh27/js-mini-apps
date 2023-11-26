const monthEle = document.querySelector(".month")
const yearEle = document.querySelector(".year")
const dateEle = document.querySelector('.date-container')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')

let currentMonth = new Date().getMonth()
let currentYear = new Date().getFullYear()


//hiển thị tháng và năm hiện tại
function displayInfo() {
    let currentMonthName = new Date(currentYear,currentMonth).toLocaleString("en-us",{month: "long"})
    //console.log(currentMonthName)
    monthEle.innerHTML = currentMonthName
    yearEle.innerHTML = currentYear
    renderDate()
}


//hiển thị số ngày trong tháng
function getDaysInMonth(){
    return new Date(currentYear,currentMonth + 1, 0).getDate()
}
//hiển thị ngày đầu tiên của tháng vào thứ mấy
function getStartDayInMonth(){
    return new Date(currentYear, currentMonth, 1).getDay()
}

function activeCurrentDay(day){
    let day1 = new Date().toDateString()
    let day2 = new Date(currentYear, currentMonth, day).toDateString();
    return day1 == day2 ? 'active' : ''
}


function renderDate(){
    let daysInMonth = getDaysInMonth()
    let startDay = getStartDayInMonth()
    console.log(startDay)

    dateEle.innerHTML = ''

    for (let i = 0; i < startDay; i++) {
        dateEle.innerHTML += `<div class="day"></div>`
    }

    for (let i = 1; i <= daysInMonth; i++) {
        dateEle.innerHTML += `<div class="day ${activeCurrentDay(i)}">${i}</div>`
    }
}


btnNext.addEventListener("click",() => {
    if(currentMonth === 11){
        currentMonth = 0
        currentYear++
    }
    else{
        currentMonth++
    }
    displayInfo()
})

btnPrev.addEventListener("click",() => {
    if(currentMonth === 0){
        currentMonth = 11
        currentYear--
    }
    else{
        currentMonth--
    }
    displayInfo()
})

window.onload = displayInfo
