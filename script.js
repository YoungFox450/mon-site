const monthYearElement = document.getElementById('monthYear');
const datesElement = document.getElementById('dates');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentDate = new Date();

const updateCalandrier = () => {
  const currentYear = currentDate.getFullYear();
  const currentMoth = currentDate.getMonth();

  const firstDay = new Date(currentYear, currentMoth, 0);
  const lastDay = new Date(currentYear, currentMoth +1, 0);
  const totalDays = lastDay.getDate();
  const firstDayIndex = firstDay.getDay();
  const lastDayIndex = lastDay.getDay();

  const monthYearString = currentDate.toLocaleString('default', {month: 'long', year: 'numeric'});
  monthYearElement.textContent = monthYearString;

  let datesHTML = '';

  for(let i = firstDayIndex; i > 0; i--) {
    const prevDate = new Date(currentYear, currentMoth, 0 - i + 1);
    datesHTML += `<div class="date inactive>${prevDate.getDate()}</div>`;
  }

  for(let i = 1; i <= totalDays; i++) {
    const date = new Date(currentYear, currentMoth, i);
    const activeClass = date.toDateString() === new Date().toDateString() ? 'active' : '';
    datesHTML += `<div class="date ${activeClass}">${i}</div>`;
  }

  for(let i = 1; i <= 7 - lastDayIndex; i++) {
    const nextDate = new Date(currentYear, currentMoth + 1, i);
    datesHTML += `<div class="date inactive">${nextDate.getDate()}</div>`
  }

  datesElement.innerHTML = datesHTML;
}

prevBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  updateCalandrier();
})

nextBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  updateCalandrier();
})

updateCalandrier();