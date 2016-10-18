function setDate(){
	let timeUntil = new Date(2017, 4, 20, 12)
	let timeNow = new Date();
	let time = timeUntil - timeNow;
	let days = time / 24 / 60 / 60 / 1000;
	let hours = (days - Math.floor(days))*24;
	let min = (hours - Math.floor(hours))*60;
	let sec = (min - Math.floor(min))*60;
	
	let showTime = {
		days: Math.floor(days),
		hours: Math.floor(hours),
		min: Math.floor(min),
		sec: Math.floor(sec),
	}
	document.getElementById("days").innerHTML = showTime.days;
	document.getElementById("hours").innerHTML = showTime.hours;
	document.getElementById("minutes").innerHTML = showTime.min ;
	document.getElementById("sec").innerHTML = showTime.sec;
};
setDate();
setInterval(function(){ setDate(); }, 1000);
