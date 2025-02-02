let dayContainer = document.querySelector(".day");
let dateContainer = document.querySelector(".date");
let monthContainer = document.querySelector(".month");
let hoursContainer = document.querySelector(".hours");
let minutesContainer = document.querySelector(".minutes");
let secondsContainer = document.querySelector(".seconds");

const weekdays = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
];

const monthNames = [
    "January", "February", "March", "April", "May", "June", "July", "August", 
    "September", "October", "November", "December"
];

function formatTime(time) {
    return time < 10 ? "0" + time : time; // 0 : 45 : 10 -> 00 : 45 : 10
}

function updateClock() {
    const today = new Date();
    let day = weekdays[today.getDay()];
    let date = today.getDate();
    let month = monthNames[today.getMonth()];
    
    let hours = formatTime(today.getHours());
    let minutes = formatTime(today.getMinutes());
    let seconds = formatTime(today.getSeconds());
    
    dayContainer.textContent = day;
    dateContainer.textContent = date;
    monthContainer.textContent = month;

    hoursContainer.textContent = hours + ":";
    minutesContainer.textContent = minutes + ":";
    secondsContainer.textContent = seconds;
}

setInterval(updateClock, 1000);
