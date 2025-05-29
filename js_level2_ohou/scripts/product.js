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
const sizeSelect = document.querySelector('select[name=size');
console.log(colorSelect, sizeSelect);
sizeSelect.disabled = true; // 사이즈 비활성화 초기값 설정
colorSelect.addEventListener('change',changeFunc)
function changeFunc(){ // 색상이 변경되었을 때 호출하는 함수
    return sizeSelect.disabled = false; // 변경 시 사이즈 재활성화
}