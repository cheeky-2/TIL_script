const completion = document.querySelector('#completion');
const completionBtn = document.querySelector('#btn');
const day = document.querySelector('.date_c');
const time = document.querySelector('.time_c')
completionBtn.addEventListener('click',whatTime)
function whatTime(){
    const project = new Date(completion.value);
    const fuckingDay = new Date();
    const calculation = project.getTime() - fuckingDay.getTime();
    const dayCalculation = Math.ceil(calculation/(1000*60*60*24));
    const timeCalculation = Math.ceil(calculation/(1000*60*60));
    day.textContent = dayCalculation;
    time.textContent = timeCalculation;
}