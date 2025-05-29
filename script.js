const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let currentDate = new Date();

const monthNameElem = document.getElementById("month-name");
const yearSelectElem = document.getElementById("year-select");
const calendarDaysElem = document.getElementById("calendar-days");

const prevMonthBtn = document.getElementById("prev-month");
const nextMonthBtn = document.getElementById("next-month");

// Populate year dropdown
function populateYears(start = 1970, end = 2100) {
  for (let y = start; y <= end; y++) {
    const option = document.createElement("option");
    option.value = y;
    option.textContent = y;
    yearSelectElem.appendChild(option);
  }
}

function updateCalendar() {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  monthNameElem.textContent = monthNames[month];
  yearSelectElem.value = year;

  // Clear old days
  calendarDaysElem.innerHTML = "";

  // Get the first day of the month
  const firstDay = new Date(year, month, 1).getDay();

  // Get total days in this month
  const totalDays = new Date(year, month + 1, 0).getDate();

  // Fill initial empty spaces for alignment
  for (let i = 0; i < firstDay; i++) {
    const empty = document.createElement("span");
    calendarDaysElem.appendChild(empty);
  }

  // Fill the days
  for (let d = 1; d <= totalDays; d++) {
    const dayElem = document.createElement("span");
    dayElem.textContent = d;

    dayElem.onclick = () => {
      alert(`Selected Date: ${d}-${month + 1}-${year}`);
    };

    calendarDaysElem.appendChild(dayElem);
  }
}

// Events for arrows
prevMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalendar();
});

nextMonthBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalendar();
});

// Event for year change
yearSelectElem.addEventListener("change", () => {
  currentDate.setFullYear(parseInt(yearSelectElem.value));
  updateCalendar();
});

populateYears();
updateCalendar();
