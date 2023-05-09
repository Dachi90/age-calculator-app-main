//HTML References
$YearInput = document.querySelector('.input-year');
$MonthInput = document.querySelector('.input-month');
$DayInput = document.querySelector('.input-day');
$Submit = document.querySelector('.submit');
$YearSpan = document.querySelector('.span-year');
$MonthSpan = document.querySelector('.span-month');
$DaySpan = document.querySelector('.span-day');
console.log($YearInput, $MonthInput, $DayInput);

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

$YearInput.setAttribute('max', `${currentYear}`);

$Submit.addEventListener('click', () => {
	const userDate = new Date(`${$YearInput.value}-${$MonthInput.value}-${$DayInput.value}`);
	console.log(userDate);
	const diferencia = currentDate.getTime() - userDate.getTime();
	const milisegundosEnDia = 1000 * 60 * 60 * 24;
	const days = Math.floor(diferencia / milisegundosEnDia);
	const months = Math.floor(days / 30);
	const years = Math.floor(months / 12);
	console.log(years, months % 12, days);
	$YearSpan.innerHTML = years;
	$MonthSpan.innerHTML = months % 12;
	$DaySpan.innerHTML = days % 30;
});
