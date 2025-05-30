// 좌측정렬된 사진에 마우스 올리면 큰 사진이 바뀜
// 찜버튼 누르면 로그인페이지로 넘어감
// 공유하면 어떻게 공유할건지 팝업창이 뜸
// 리뷰를 누르면 리뷰페이지로 이동함(스크롤이동(a href="#id"))
// del 가격 오른쪽 도움말누르면 할인가격의 규정을 알려주는 팝업이 뜸
// 배송의 오늘출발에 오른쪽 도움말을 누르면 오늘출발이 뭔지 어떻게 해야되는건지 설명 팝업이 뜸
// 배송예정 날짜목록을 누르면 얼제 올지 목록이 펼쳐지며 나옴
// 울리 브랜드 그림 3개모두 클릭하면 울리브랜드페이지로 이동함
// 브랜드 옆에 있는 찜 버튼을 누르면 로그인페이지로 넘어감
// 색상을 누르면 목록이 펼쳐지면서 선택할 수 있는데 품절인 상품은 선택자제가 불가능함
// 색상을 선택하지 않으면 사이즈메뉴가 열려도 사이즈 하나밖에 안열림(목록이 전체가 안뜸)
// 색상 선택하니까 사이즈 목록이 여러 개 뜸
// 주문 일시 정지라서 비활성화됨
// 11. 상품 옵션 선택 시 색상 선택 후(클릭(x) 변경(o)) 사이즈 선택 가능, 색상 미선택 시 사이즈 선택 불가
// 색상, 사이즈 select태그 변수 선언
const colorSelect = document.querySelector('select[name=color]');
const sizeSelect = document.querySelector('select[name=size]');
const orderColor = document.querySelector('.order_select .color');
const orderSize = document.querySelector('.order_select .size');
console.log(colorSelect, sizeSelect, orderColor, orderSize);
sizeSelect.disabled = true; // 사이즈 비활성화 초기값 설정
// 색상 select를 변경했을 때 이벤트 생성
/* colorSelect.addEventListener('change',changeFunc)
function changeFunc(){ // 색상이 변경되었을 때 호출하는 함수
    return sizeSelect.disabled = false; // 변경 시 사이즈 재활성화
} */
console.log('----------------12번 product.js---------------')
// 12. 색상->사이즈 선택 시 선택한 정보가 아래 새로운 요소에 수량, 가격과 함께 출력
// 12-1. 위 (12)번 진행 전 새로운 요소(.order_select) 숨기기
const orderSelect = document.querySelector('.order_select');
console.log(orderSelect);
orderSelect.style.display = 'none';
// 12-2. 위 (12)번 색상->사이즈 선택 시 새로운 요소(.order_select) 보이기
// 색상->사이즈 선택 시 이벤트와 함수 생성
colorSelect.addEventListener('change',orderFunc)
sizeSelect.addEventListener('change',orderFunc)
function orderFunc(){
    //console.log(0); // 정상확인
    //console.log(colorSelect.value); // 선택한 색상 값 확인
    //console.log(sizeSelect.value); // 선택한 사이즈 값 확인
    sizeSelect.disabled = false; // 사이즈 활성화
    // 특정 상황에서 아래 orderSelect 출력되고 싶다면? 상황을 조건문으로 작성해야한다!
    // orderSelect 출력 조건 -> color의 value값이 존재하는 option 선택 후 size의 value값이 존재하는 option을 추가로 선택했을 경우
    // orderSelect.style.display = 'block';
    // 조건문 연습
    // if(조건식){조건식이 참일 경우 실행되는 명령}
    // if('블랙'){console.log('조건실행테스트')}
    console.log(Boolean(colorSelect.value))
    // 사용자가 선택한 color, size의 값(value)이 모두 참일 때 조건 실행(value="" 빈문자열이면 거짓)
    if(colorSelect.value && sizeSelect.value){
        orderSelect.style.display = 'block';
        //order_select의 color안에 선택한 colorSelect 값 대입하기
        orderColor.textContent = colorSelect.value
        //order_select의 size안에 선택한 sizeSelect 값 대입하기
        orderSize.textContent = sizeSelect.value
    } else{
        orderSelect.style.display = 'none';
        /* sizeSelect.disabled = true; */
    }
}
// 13. 수량 조정 시 1~9999개까지 선택 가능 기능
// 13-1. `-` 버튼 클릭 시 수량값이 1보다 작으면 1~9999개까지 선택가능합니다 메세지 출력
// 13-2. `+` 버튼 클릭 시 수량값이 1보다 크면 1~9999개까지 선택가능합니다 메세지 출력
// 13-3. `-`,`+` 버튼 클릭 시 수량이 범위값 안에서 1씩 감소 또는 증가
const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const orderNum = document.querySelector('.order_num input[name$=num]');
const totalPrice = document.querySelector('.order_select .price em');
let num = 1; //초기수량
let price = 39900; //초기 가격
let total = 0; //수량에 따라 가격 계산하는 최종 변수
console.log(minusBtn, plusBtn, orderNum, totalPrice);
//초기 설정
orderNum.value = num;
// 증가 +버튼 클릭 시 수량이 1씩 증가되서 orderNum 출력
plusBtn.addEventListener('click',()=>{
    num++;
    if(num > 9999){
        window.alert('1~9999개까지 선택가능합니다');
    }
    if(num >= 1 && num <= 9999){
        total = num * price;
    orderNum.value = num;
    totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})
minusBtn.addEventListener('click',()=>{
    num--;
    if(num < 1){
        window.alert('1~9999개까지 선택가능합니다');
        /* orderNum.value = 1;
        totalPrice.textContent = price.toLocaleString('ko-kr'); */
    }
    if(num >= 1){
        total = num * price;
    orderNum.value = num;
    totalPrice.textContent = total.toLocaleString('ko-kr');
    }
})
// 15. 위 (12)번에서 나온 박스의 x 클릭 시 주문 정보 모두 삭제
const closeBtn = document.querySelector('.order_select .close');
closeBtn.addEventListener('click',(c)=>{
    orderSelect.style.display = 'none';
    c.preventDefault();
})
// 장바구니 클릭 시 '장바구니 담겼습니다' 메세지 출력 alert()
const cartBtn = document.querySelector('#cart_btn');
const buyBtn = document.querySelector('#buy_btn');
/* cartBtn.addEventListener('click',()=>{
    alert('장바구니에 담겼습니다.')
}); */
// 바로구매 클릭 시 '로그인이 필요합니다' 메세지 출력
/* buyBtn.addEventListener('click',()=>{
    alert('로그인이 필요합니다.')
}) */
/* cartBtn.addEventListener('click',function(){
    alert('장바구니에 담겼습니다.')
})
buyBtn.addEventListener('click',function(){
    alert('로그인이 필요합니다.')
}) */
cartBtn.addEventListener('click',cartFunc);
function cartFunc(){
    alert('장바구니에 담겼습니다.');
}
cartBtn.addEventListener('click',buyFunc);
function buyFunc(){
    alert('로그인이 필요합니다.');
}