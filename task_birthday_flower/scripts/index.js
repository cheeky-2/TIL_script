const userMonth = document.querySelector('input[name=month]');
const resultBtn = document.querySelector('#output_btn');
const outputMsg = document.querySelector('#wrap p');
console.log(userMonth, resultBtn, birthday_flower);
outputMsg.style.display = 'none';
resultBtn.addEventListener('click',function(){
    /* if(userMonth.value >= 1 && userMonth.value <= 12){outputMsg.textContent = `${birthday_flower[userMonth.value-1].month}월의 탄색화는 ${birthday_flower[userMonth.value-1].flower}, 꽃말은 ${birthday_flower[userMonth.value-1].content}`입니다.;} */
    if(userMonth.value == 1||2||3||4||5||6||7||8||9||10||11||12){outputMsg.textContent = `${birthday_flower[userMonth.value-1].month}월의 탄색화는 ${birthday_flower[userMonth.value-1].flower}, 꽃말은 ${birthday_flower[userMonth.value-1].content}입니다.`; outputMsg.style.display = 'block';}
    /* if(userMonth.value == 1){outputMsg.textContent = `${birthday_flower[userMonth.value-1].month}월의 탄색화는 ${birthday_flower[userMonth.value-1].flower}, 꽃말은 ${birthday_flower[userMonth.value-1].content}입니다.`;} */})