const time = document.getElementById('time');
const day = document.getElementById('day');
const midday = document.getElementById('midday');

let clock = setInterval(() => {
	let dateNow = new Date();
	let hr = dateNow.getHours();
	let min = dateNow.getMinutes();
	let sec = dateNow.getSeconds();
    let middayValue = 'AM';
    const days = ['Su','Mo','Tu','We','Th','Fr','Sa'];

	middayValue = (hr >= 12 ) ? 'PM' : 'AM';

	if(hr === 0) {
		hr = 12;
	} else if(hr >12) {
		hr-=12;
	}

	hr = (hr < 10) ? '0' + hr : hr;
	min = (min < 10) ? '0' + min : min;
	sec = (sec < 10) ? '0' + sec : sec;

	time.textContent = hr + ':' + min + ':' + sec;
	midday.textContent = middayValue;
	day.textContent = days[dateNow.getDay()];
}, 1000);