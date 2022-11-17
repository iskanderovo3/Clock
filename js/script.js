const sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    hour = document.querySelector('.h'),
    hoursNum = document.querySelector('.hours'),
    minutesHours = document.querySelector('.minutes');

function clock(){
    let time = new Date();
    let second = time.getSeconds() * 6;
    let minutes = time.getMinutes() * 6;
    let hours = time.getHours() * 30;

    sec.style = `transform: rotate(${second}deg)`;
    min.style = `transform: rotate(${minutes}deg)`;
    hour.style = `transform: rotate(${hours}deg)`;

    hoursNum.innerHTML = time.getHours();
    minutesHours.innerHTML = time.getMinutes();

    setTimeout(()=> clock(), Infinity)

}
clock();
