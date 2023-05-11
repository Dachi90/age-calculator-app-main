//HTML References
const $YearInput = document.querySelector('.input-year');
const $MonthInput = document.querySelector('.input-month');
const $DayInput = document.querySelector('.input-day');
const $Submit = document.querySelector('.submit');
const $YearSpan = document.querySelector('.span-year');
const $MonthSpan = document.querySelector('.span-month');
const $DaySpan = document.querySelector('.span-day');
const $P = document.querySelectorAll('.error');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const daysMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

$YearInput.setAttribute('max', `${currentYear}`);

const addClass = (element, index, className) => {
	$P[index].classList.add('visible');
	element.classList.add('border-error');
	document.querySelector(`.span-${className}-input`).classList.add('color-error');
};

const removeClass = (element, index, className) => {
	$P[index].classList.remove('visible');
	element.classList.remove('border-error');
	document.querySelector(`.span-${className}-input`).classList.remove('color-error');
};

const emptyInputs = () => {
	if (!$DayInput.value) {
		addClass($DayInput, 0, 'day');
	} else {
		removeClass($DayInput, 0, 'day');
	}
	if (!$MonthInput.value) {
		addClass($MonthInput, 1, 'month');
	} else {
		removeClass($MonthInput, 1, 'month');
	}
	if (!$YearInput.value) {
		addClass($YearInput, 2, 'year');
	} else {
		removeClass($YearInput, 2, 'year');
	}

	if ($DayInput.value && $MonthInput.value && $YearInput.value) {
		$P.forEach((p) => {
			p.classList.remove('visible');
		});
		return true;
	} else {
		return false;
	}
};

const maxDayInput = () => {
	if (!$DayInput.value) return;
	if (Number($DayInput.value) > daysMonth[$MonthInput.value - 1]) {
		$P[0].textContent = 'Must be a valid day';
		addClass($DayInput, 0, 'day');
		return false;
	} else {
		removeClass($DayInput, 0, 'day');
		return true;
	}
};

const maxMonthInput = () => {
	if (!$MonthInput.value) return;
	if (Number($MonthInput.value) > 12) {
		$P[1].textContent = 'Must be a valid month';
		console.log('antes');
		addClass($MonthInput, 1, 'month');
		console.log('despuees');
		return false;
	} else {
		removeClass($MonthInput, 1, 'month');
		return true;
	}
};

const maxYearInput = () => {
	if (!$YearInput.value) return;
	if (Number($YearInput.value) > currentYear) {
		$P[2].textContent = 'Must be in the past';
		addClass($YearInput, 2, 'year');
		return false;
	} else {
		removeClass($YearInput, 2, 'year');
		return true;
	}
};

const calculateAge = () => {
	const userDate = new Date(`${$YearInput.value}-${$MonthInput.value}-${$DayInput.value}`);
	const ageDate = new Date(currentDate - userDate);
	let yearDiff = currentDate.getFullYear() - userDate.getFullYear();
	if (currentDate >= userDate) {
		yearDiff--;
	}
	const monthDiff = ageDate.getMonth();
	const dayDiff = ageDate.getDate() - 1;

	$YearSpan.innerHTML = yearDiff;
	$MonthSpan.innerHTML = monthDiff;
	$DaySpan.innerHTML = dayDiff;
};

$Submit.addEventListener('click', () => {
	if (emptyInputs() && maxDayInput() && maxMonthInput() && maxYearInput()) {
		calculateAge();
	}
});
