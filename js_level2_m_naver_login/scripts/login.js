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
console.log(langSelect, langOpen, langKr, langen, langCh1, langCh2);
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
    //langSelect.textContent = langKr.textContent;
    langChange(langKr);
})
langen.addEventListener('click',()=>{
    //langSelect.textContent = langen.textContent;
    langChange(langen);
})
langCh1.addEventListener('click',()=>{
    //langSelect.textContent = langCh1.textContent;
    langChange(langCh1);
})
langCh2.addEventListener('click',()=>{
    //langSelect.textContent = langCh2.textContent;
    langChange(langCh2);
})
function langChange(lang){
    langOpen.style.display = 'none';
    langSelect.textContent = lang.textContent;
    return
}
/* 에러 출력 메세지
조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭 시
조건1 결과) 아이디 또는 전화번호를 입력해 주세요
조건2) 아이디를 입력하고 비밀번호를 입력하지 않고 로그인 클릭 시 
조건2 결과) 비밀번호를 입력해 주세요
조건3) 아이디, 비밀번호를 모두 입력하고 로그인 클릭 시 정보가 틀렸을 때
조건3 결과) 아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요
조건4) 조건3 상황에서 로그인실패가 3회 이상일때
조건4 결과) 영수증 퀴즈와 '아이디(로그인 전화번호, 로그인 전용 아이디), 비밀번호 또는 자동입력 방지 문자를 잘못 입력했습니다. 입력하신 내용을 다시 확인해 주세요' 메세지 출력
조건5) 패스키 로그인 클릭 시
조건5 결과)외부디스크 연결 프로그램 시작되고 외부디스크가 연결된게 없으면 '패스키 로그인에 실패했습니다. 다시 시도해 주세요' 메세지 출력 */
//네이버 회원정보 저장 DB
const naverUserDB = [{
    id:'aaa',
    pw:'a1234',
},{
    id:'bbb',
    pw:'b1234',
}]
console.log(naverUserDB);
// 조건1) 아이디와 비밀번호를 모두 입력하지 않고 로그인 클릭 시
// 조건1 결과) 아이디 또는 전화번호를 입력해 주세요
const userId = document.querySelector('.id_pw_wrap input[name=user_id]');
const userPw = document.querySelector('.id_pw_wrap input[name=user_pw]');
const errorMsg = document.querySelector('.error_msg');
const loginBtn = document.querySelector('#login_btn');
console.log(userId, userPw, errorMsg, loginBtn);
loginBtn.addEventListener('click',()=>{
    if(userId.value==''&&userPw.value==''){
        //조건1) 아이디와 비밀번호를 모두 입력안할 시(참) 실행결과
        errorMsg.textContent = '아이디 또는 전화번호를 입력해 주세요';
    }else if(userPw.value==''){
        //조건2) 조건1이 거짓이고 조건2의 비밀번호를 입력 안했는가(참)
        errorMsg.textContent = '비밀번호를 입력해 주세요';
    }else if(userId.value==''){
        //조건3) 조건1,2가 모두 거짓일때 아이디를 입력안했는가(참)
        errorMsg.textContent = '아이디 또는 전화번호를 입력해 주세요';
    }else if(userId.value==naverUserDB[0].id&&userPw.value==naverUserDB[0].pw){
        //아이디와 비밀번호가 DB서버의 0인덱스값과 모두 일치할 때 네이버 메인페이지로 이동
        window.location.href='https://naver.com';
    }else{
        errorMsg.textContent = '아이디(로그인 전화번호, 로그인 전용 아이디) 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요';
    }
    // 삼함조건 활용 조건1
    // 조건식? 조건식참결과 : 조건식거짓결과
    // 조건결과대입변수 = 조건식? 조건식참결과 : 조건식거짓결과
    //errorMsg.textContent = userId.value==''&&userPw.value==''?'아이디 또는 전화번호를 입력해 주세요':userPw.value==''?'비밀번호를 입력해 주세요':'';
})