const endDate =  '26 Jan 2024 12:00 AM'

document.getElementById('end-date').innerHTML = endDate
const input = document.querySelectorAll('input')

const clock = () => {
    let now = new Date();
    let end = new Date(endDate);
    const diff = (end - now)/1000;
    if(diff < 0) return;
    input[0].value = Math.floor(diff/3600/24);
    input[1].value = Math.floor((diff/3600) % 24);
    input[2].value = Math.floor((diff/60) % 60)
    input[3].value = Math.floor(diff % 60)
}
clock();