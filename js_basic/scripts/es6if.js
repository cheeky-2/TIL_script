// 삼항조건연산자기본문법
// 조건 ? 조건이참일때결과 : 조건이거짓일떄결과;
let x = 5;
let y = x+10;
// 삼항조건의 참or거짓 결과가 콘솔로그에 출력되는 형태
console.log(y==15?'o':'x');
let total = x>10?'0':'x';
console.log(total);

//연습2. 성인/미성년자 구분하기
// 18살 이상이면 '성인입니다' 아니면 '미성년자입니다'
/* const userAge=prompt('당신의 나이는?');
total = userAge>=18?'성인입니다':'미성년자입니다';
console.log(total); */
// 봄 500점, 여름 600점
const gameScore = [{
    name:'봄',
    score:500,
},{
    name:'여름',
    score:600,
}]
console.log(gameScore);
// 오늘의 1등은 OO이고 점수는 OOO입니다!
// 조건 예시) 봄이가 여름보다 점수가 큰가?
// 크면 봄이가 1등
// 작으면 여름이가 1등
total = gameScore[0].score>gameScore[1].score?gameScore[0]:gameScore[1];
console.log(`오늘의 1등은 ${total.name}이고 점수는 ${total.score}입니다!`);
// -----------------------------삼항조건 + 리뷰 JS
const re = document.querySelector('textarea[name=re]');
const reBtn = document.querySelector('#re_btn');
const move = document.querySelector('body');
let controlX = 0;
let controlY = 0;
console.log(re, reBtn);
reBtn.addEventListener('click',()=>{
    // 콘솔테스트 : 리뷰내용 출력
    console.log(re.value);
    // 콘솔테스트 : 리뷰글자 수 출력
    console.log(re.value.length);
    //result = 조건 ? 참 : 거짓;
    alert(re.value.length>=100?'등록완료':'100자 이상 입력하세요');
})
move.addEventListener('keydown',function(k){
    console.log(k);
    switch(k.code){
        case 'ArrowUp':controlY-=70; moveFunc(); break;
        case 'ArrowDown':controlY+=70; moveFunc(); break;
        case 'ArrowRight':controlX+=70; moveFunc(); break;
        case 'ArrowLeft':controlX-=70; moveFunc(); break;
        default:controlX=0; controlY=0;
    }
})
function moveFunc(){
    reBtn.style.transform = `translate(${controlX}px, ${controlY}px)`
}
// 쇼핑 수량과 가격 알고리즘
// 1개 가격 기준 12500원
// 쇼핑몰 상품 데이터베이스
const productDB = [{
    name:'떡닭도리탕', //productDB[0].name
    price:12500, //productDB[0].price
    stock:10, //재고수량(최대구매개수) //productDB[0].stock
},{
    name:'꼬막비빔장', // productDB[1].name
    price:5800, //productDB[1].price
    stock:20, //productDB[1].stock
}]
//DOM 변수
const numInput = document.querySelector('input[name=num]');
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const priceP = document.querySelector('.price');
let num = 1; //주문수량
let result = '';
console.log(numInput, minusBtn, plusBtn, priceP);
//초기 주문수량 표시
numInput.value = num;
// 증가 버튼 클릭 시 재고수량만큼 증가하고 재고수량 오버 시 '최대구매수량입니다' 경고창 출력
plusBtn.addEventListener('click',()=>{
    // 조건 : 현재 수량이 상품수량보다 크거나 같은가?
    // 참이면 '최대구매수량입니다'
    // 거짓이면 '수량증가'
    result = num>=productDB[0].stock?'최대구매수량입니다':++num
    numoperatorFunc(0);
})
// 감소버튼 클릭 시 현재 수량이 1보다 작거나 같으면 '최소구매수량입니다' 아니면 수량감소
minusBtn.addEventListener('click',()=>{
    result = num<=1?'최소구매수량입니다':--num
    numoperatorFunc(0);
})
function numoperatorFunc(index){
    numInput.value = num;
    priceP.textContent = (num*productDB[index].price).toLocaleString('ko-kr')+'원';
    console.log(result);
}