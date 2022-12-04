const countdown=()=> {
    const countDate = new Date('May 17, 2023 00:00:00').getTime();

const now = new Date().getTime();
const gap = countDate-now;


// how does time work?
const second=1000;
const minute =second*60;
const hour= minute*60;
const day=hour*24;


//Calculating the above
const textDay= map.floor(gap/day);
const textHour=map.floor((gap % day)/hour);
const textMinute=map.floor((gap % hour)/minute);
const textSecond=map.floor((gap % minute)/second);


document.querySelector(".day").innerText=textDay;
document.querySelector(".hour").innerText=textHour;
document.querySelector(".minute").innerText=textMinute;
document.querySelector(".second").innerText=textSecond;

}
setInterval(countdown, 1000);


