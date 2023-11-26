const timeSession = document.getElementById('time-session')
const timeDate = document.getElementById('time-date')
const timeClock =  document.getElementById("time-clock")
displayTime = () => {
    const now = new Date();
    let hh = now.getHours();
    let mm = now.getMinutes();
    let ss = now.getSeconds();
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    const timeString = [hh,  mm,  ss];

    timeClock.innerHTML = timeString.join(':');
    setTimeout(displayTime,1000);
    if (hh >= 12 ) {
        timeSession.innerHTML = 'PM';
    }
    else {
        timeSession.innerHTML = 'AM';
    }

}
displayTime();



displayDate = () => {
    const date = new Date();
    const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Sarturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    timeDate.innerHTML = day[date.getDay()] + ", "  + months[date.getMonth()] +  " "  +  date.getDate()  + " " +  date.getFullYear();
}
displayDate();