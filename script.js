let timer;
let minutes = 0;
let seconds = 0;
let running = false;

function Start()
{
    timer = setInterval(updateTime,1000);
}
function stop()
        {
            clearInterval(timer);
        }
function updateTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes++;

        }
    }
    Display();
}
function Reset()
{
    setInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    Display();
}
function Display()
{
    const time = document.getElementById('show');
    time.textContent = `${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')}`;
}
document.getElementById('stop').addEventListener("click",stop);
document.getElementById("start").addEventListener("click",Start);
document.getElementById('reset').addEventListener("click",Reset);