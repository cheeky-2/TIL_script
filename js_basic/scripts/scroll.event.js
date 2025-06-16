// 스크롤 이벤트 문법
// window.addEventListener('scroll',()=>{실행결과})
const topBtn = document.querySelector('#top');
topBtn.style.display='none';
topBtn.addEventListener('click',(e)=>{
    console.log(e);
    e.preventDefault();
    window.scrollTo({left:0,top:0,behavior:'smooth',})
})
// 검색 폼 복제 변수
const searchClone = document.querySelector('header form').cloneNode(true);
let isSearchClone=false; // 안보이면 false 보이면 true
window.addEventListener('scroll',()=>{
    // 1. 스크롤 이벤트에 따라 헤더 디자인 변경
    const headerBtm = document.querySelector('.bottom');
    if(window.scrollY > 100){// 스크롤 위치가 100보다 크면
        headerBtm.classList.add('active');
        headerBtm.appendChild(searchClone);
        isSearchClone = true;
    }else{// 위 조건이 아니면(100보다 작으면)
        if(isSearchClone){// (위)else 100보다 작으면 바로 실행하지 않고 이중검사 후 실행
            headerBtm.classList.remove('active')
            headerBtm.removeChild(searchClone);
            isSearchClone=false;
        }
    }
    // 2. 스크롤 이벤트에 따라 맨위로 디자인 변경
    // 맨 위로 숨기기
    // 스크롤 위치가 500보다 크면 맨 위로 보이기(반대면 숨기기)
    // 맨 위로 클릭하면 스크롤 y 0 위치로 올리기
    if(window.scrollY>500){topBtn.style.display='block';}else{topBtn.style.display='none';}})// 스크롤 이벤트 종료