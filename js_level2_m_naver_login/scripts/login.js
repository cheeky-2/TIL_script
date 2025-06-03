// main .lang_group 기준
// 초기설정 : .lang_open 한국어~중국어 옵션 숨기기
// #lang_select 클릭 시 .lang_open 보이기
// .lang_open이 보이는 상태라면 #lang_select 클릭 시 .lang_open 숨기기
// 변수생성 -> 이벤트 제작 -> 이벤트 만족 시 실행함수 (중간중간 콘솔 자주체크)
const langSelect = document.querySelector('#lang_select');
const langOpen = document.querySelector('.lang_open');
const langKr = document.querySelector('.kr');
const langen = document.querySelector('.en');
const langCh1 = document.querySelector('.ch1');
const langCh2 = document.querySelector('.ch2');
langOpen.style.display = 'none'; //초기 숨기기
//참(보이기), 거짓(숨기기) 상태
let openif = false;
langSelect.addEventListener('click',()=>{
    //langOpen 숨겨진 상태면 보이기
    /* if(openif==false){
        langOpen.style.display = 'flex';
        openif=true;//상태값 변경
    }else if(openif==true){
        langOpen.style.display = 'none';
        openif = false;
    } */
    //langOpen 보이는 상태면 숨기기
    /* switch(langOpen.style.display){
        case 'none':langOpen.style.display='flex'; break;
        default:langOpen.style.display='none';
    } */
    langOpen.style.display=='none'?langOpen.style.display='flex':langOpen.style.display='none';
})
langKr.addEventListener('click',()=>{
    langSelect.textContent = langKr.textContent;
    langOpen.style.display = 'none';
})
langen.addEventListener('click',()=>{
    langSelect.textContent = langen.textContent;
    langOpen.style.display = 'none';
})
langCh1.addEventListener('click',()=>{
    langSelect.textContent = langCh1.textContent;
    langOpen.style.display = 'none';
})
langCh2.addEventListener('click',()=>{
    langSelect.textContent = langCh2.textContent;
    langOpen.style.display = 'none';
})