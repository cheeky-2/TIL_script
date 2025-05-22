// 5/22 DOM 이벤트와 함수
// 함수의 매개변수, 익명함수, 화살표함수
// function 함수명(매개변수, 매개변수){실행}
// const 변수명 = function(매개변수){실행}
// const 변수명 = (매개변수) => {실행}
const bg = document.querySelector('#bg');
const bg1Btn = document.querySelector('#bg1_btn');
const bg2Btn = document.querySelector('#bg2_btn');
console.log(bg, bg1Btn, bg2Btn);
bg.style.height = '100vh'; //스타일을 줄땐 문자값이니까 작은따옴표 꼭 쓰자
bg.style.backgroundColor = 'yellow';
// 버튼에 마우스 올렸을 때 배경색변경제어 알고리즘
bg1Btn.addEventListener('mouseover',bgChangeOver);
bg1Btn.addEventListener('mouseout',bgChangeOut);
/* bg1Btn.addEventListener('mousedown',btnBgChangeDown)
bg1Btn.addEventListener('click',btnBgChangeUp) */  //혼자 놀기
// bg2Btn.addEventListener('mouseover',bgChange('coral'));
// (위 에러 해결법) 객체 이벤트에서 매개변수가 있는 함수를 호출하려면 익명함수 또는 화살표함수로 변경해야 호출이 가능하다.
// (아래 2개의 방법) 객체와 이벤트가 동일시 되었고 이벤트 속성의 함수명에 익명함수 또는 화살표 함수를 넣고 그 함수 값으로 함수를 호출한다.
bg2Btn.addEventListener('mouseover',function(){
    bgChange('coral'); // 익명함수 내 매개변수가 있는 함수 호출
})
bg2Btn.addEventListener('mouseout',()=>bgChange('brown'));
// (위) 화살표 함수 내 매개변수가 있는 함수 호출(한줄이면 중괄호 생략)
// 매개변수 ver함수
function bgChange(color){
    return bg.style.backgroundColor = color;
}
// 함수
function bgChangeOver(){
    return bg.style.backgroundColor = 'aqua';
}
function bgChangeOut(){
    return bg.style.backgroundColor = 'yellow';
}
/* function btnBgChangeDown(){
    return bg1Btn.style.backgroundColor = 'pink';
}
function btnBgChangeUp(){
    return bg1Btn.style.backgroundColor = 'blue';
} */  //혼자 놀기