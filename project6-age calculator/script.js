let brndate = document.addEventListener('DOMContentLoaded', function() {
    flatpickr("#calendar", {
        dateFormat: "d/m/Y ",
    });
});
document.getElementById('calculate').addEventListener('click', function() {
    let inputDate = document.getElementById('calendar').value;
    if (inputDate) {
        calculateAge(inputDate);
    } else {
        document.querySelector('.age').textContent = "Please select a date!!";
    }
});
function calculateAge(selecteddate) {
    let parts = selecteddate.split('/');
    let day = parseInt(parts[0], 10);
    let month = parseInt(parts[1], 10) - 1;
    let year = parseInt(parts[2], 10);

    let birthday = new Date(year, month, day);
    let nowdate = new Date();

    let age = nowdate.getFullYear() - birthday.getFullYear();
    let monthDifference = nowdate.getMonth() - birthday.getMonth();
    let dayDifference = nowdate.getDate() - birthday.getDate();

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
        monthDifference += 12;
        if (dayDifference < 0){
            dayDifference =   birthday.getDate() - nowdate.getDate();
        }
    }

    document.querySelector('.age').textContent = `You are ${age} years, ${monthDifference} months, and ${dayDifference} days old`;
}