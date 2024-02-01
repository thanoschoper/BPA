const nameData = localStorage.getItem("name");
const dateData  = localStorage.getItem("ddate");
const numberData = localStorage.getItem("nnumber");
const tableData = localStorage.getItem("table");

function getTime() {
    let amPm = "AM";
    const d = new Date();
    let hours = d.getHours().toString().padStart(2, '0');
    const minutes = d.getMinutes().toString().padStart(2, '0');
    if (hours > 12) {
        hours -= 12;
        amPm = "PM";
    }
    return `${hours}:${minutes}${amPm}`;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

console.log("Name Object:", nameData);  
console.log("Date Object: ", dateData);
console.log("Guests Number object: ", numberData);
console.log("Table Number:  ", getRndInteger(1, 16));
console.log("Time of Booking: ", getTime());

document.getElementById('name').innerText = nameData;
document.getElementById('ddate').innerText = dateData;
document.getElementById('nnumber').innerText = numberData;
document.getElementById('table').innerText = getRndInteger(1, 16);
document.getElementById('time').innerText = getTime();
