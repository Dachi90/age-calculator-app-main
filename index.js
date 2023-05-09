//HTML References
$YearInput = document.querySelector('.input-year');
$MonthInput = document.querySelector('.input-month');
$DayInput = document.querySelector('.input-day');
$Submit = document.querySelector('.submit');
$YearSpan = document.querySelector('.span-year');
$MonthSpan = document.querySelector('.span-month');
$DaySpan = document.querySelector('.span-day');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

$YearInput.setAttribute('max', `${currentYear}`);

const calculateAge = () => {
	const userDate = new Date(`${$YearInput.value}-${$MonthInput.value}-${$DayInput.value}`);
	const ageDate = new Date(currentDate - userDate);
	let yearDiff = currentDate.getFullYear() - userDate.getFullYear();
	if (currentDate >= userDate) {
		yearDiff--;
	}
	const monthDiff = ageDate.getMonth();
	const dayDiff = ageDate.getDate() - 1;

	const $P = document.querySelectorAll('.error');

	if (!$DayInput.value) {
		$P[0].classList.add('visible');
		$DayInput.classList.add('border-error');
		document.querySelector('.span-day-input').classList.add('color-error');
	}
	if (!$MonthInput.value) {
		$P[1].classList.add('visible');
		$MonthInput.classList.add('border-error');
		document.querySelector('.span-month-input').classList.add('color-error');
	}
	if (!$YearInput.value) {
		$P[2].classList.add('visible');
		$YearInput.classList.add('border-error');
		document.querySelector('.span-year-input').classList.add('color-error');
	}

	if ($DayInput.value && $MonthInput.value && $YearInput.value) {
		$P.forEach((p) => {
			p.classList.remove('visible');
		});
		$YearSpan.innerHTML = yearDiff;
		$MonthSpan.innerHTML = monthDiff;
		$DaySpan.innerHTML = dayDiff;
	}
};

$Submit.addEventListener('click', () => {
	calculateAge();
});
