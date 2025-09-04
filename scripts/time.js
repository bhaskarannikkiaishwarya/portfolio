/* Time function */

let timeCheckEnabled = true;

function updateTimeBasedTheme() {
	if (!timeCheckEnabled) {
		return;
	}
	const currentTime = new Date();
	const hour = currentTime.getHours();
	const body = document.querySelector('body');

	if (hour >= 6 && hour < 18) {
		body.classList.add('day');
		body.classList.remove('night');
	} else {
		body.classList.add('night');
		body.classList.remove('day');
	}
}

function toggleTheme() {
	const body = document.querySelector('body');
	body.classList.toggle('day');
	body.classList.toggle('night');
	updateIcon();
}

function updateIcon() {
	const body = document.querySelector('body');
	const icon = document.getElementById('icon');
	const isNight = body.classList.contains('night');
	icon.innerHTML = isNight ? `
		<!-- Replace the content and styles with your own night SVG -->
		<span class="material-symbols-outlined">
		dark_mode
		</span>
	` : `
		<!-- Replace the content and styles with your own day SVG -->
		<span class="material-symbols-outlined">
		light_mode
		</span>
	`;
}

function disableTimeCheck() {
	timeCheckEnabled = false;
}

updateTimeBasedTheme();
updateIcon();

setInterval(() => {
	updateTimeBasedTheme();
	updateIcon();
}, 60 * 1000);

