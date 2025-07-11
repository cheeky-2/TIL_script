//for(변수초기값; 조건식; 증감식){조건이 참일때 반복구문} 반복종료(조건거짓)
for(let i=0; i<5; i++){console.log(i+1)}
const li = document.querySelectorAll('ul li');
console.log(li);
for(let i=1; i<=2; i++){
    li[i].classList.add('list_active');
    //li[i].style.backgroundColor = 'yellow';
    //li[i].style.textAlign = 'center';
}
// 태그 2개 이상 다수를 변수로 대입할 때 querySelectorAll 선언 후 사용 시 변수[index] 활용하기 (주로 for 반복문과 함께 활용)
//----------------------JS DOM 복제붙여넣기(데스크탑 내비와 모바일 내비에 주로 활용)
// 붙여넣기 위치 DOM, 복제 DOM 변수 만들기!
const section = document.querySelector('section');
const ul = document.querySelector('ul');// ul DOM 선택(원본)
const ulClone = ul.cloneNode(true);// ul 자식,자손포함 복제(Ctrl+C)
console.log(section, ul, ulClone);
//복제한 요소 붙여넣기(대상요소의 마지막자식 위치로 붙여넣기)
section.appendChild(ulClone);// section의 마지막자식위치에 복제대상 붙여넣기(Ctrl+V)
//-------------------------------
//while 반복문 - 조건이 참일 경우 무한 반복
//while(조건){괄호 안 조건이 참일 경우 실행문}
//let htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요');
//console.log(htmlQ);//확인(true) 취소(false)
// 위 문제를 푸는 학생이 문제를 틀리면 무한반복질문\
// 문제를 맞추면 -> alert('정답입니다!')
/* while(htmlQ!=false){
    htmlQ = confirm('a태그는 alt속성이 있다. 맞으면 확인, 틀리면 취소를 누르세요');
}alert('정답입니다!');
let cssQ = confirm('text-align:cneter;은 모든 자식, 자손을 가운데로 정렬시키는 속성이다. 맞으면 확인, 틀리면 취소를 누르세요');
while(cssQ!=false){
    cssQ = confirm('text-align:center;은 모든 자식, 자손을 가운데로 정렬시키는 속성이다. 맞으면 확인, 틀리면 취소를 누르세요');
}alert('정답입니다!');
let jsQ = confirm('함수를 더 편하게 쓰기위해 만든게 익명함수와 화살표함수이다. 맞으면 확인, 틀리면 취소를 누르세요');
while(jsQ!=false){
    jsQ = confirm('화살표함수를 더 편하게 쓰기 위해 만든게 만든게 익명함수이다. 맞으면 확인, 틀리면 취소를 누르세요');
}alert('정답입니다!'); */
let num=1;
while(num<=10){
    if(num==5) break;
    console.log(num);
    num++;
}
console.log('---------------------continue')
for(var i=1; i<=10; i++){
    continue;
    console.log(i);
}
console.log(i);// error? 1? 10? 11?
console.log('-------------다중반복문');
// for문 안 for문이 추가로 있는 구조(2단, 3단 반복 가능)
// 첫번째 for문이 한번 실행될때 두번째(안쪽)for문은 조건이 거짓이 될때까지 모두 반복실행된다
for(let i=1; i<3; i++){// 첫번째 for문
    for(let j=0; j<2; j++){// 두번째 for문
        console.log('첫번째 i값:',i,'두번째 j값',j);
    }
}
const dan99 = document.querySelector('.dan99');
console.log('------------다중반복문 활용 구구단')
for(let i=2; i<=9; i++){
    for(let j=1; j<=9; j++){
        dan99.innerHTML+=`${i}X${j}=${i*j}<br>`;
        //console.log(`${i}X${j}=${i*j}`);
    }// 2단 for 조건이 거짓일때(9보다 클때) 종료위치
    dan99.innerHTML += '<hr>';
    //console.log('--------------')// 2단 for 종료 구분선 표시
}
console.log('ES6 for~in');
const study = ['html','css','js']
const abc = 'abcdefghijklmn'
const user = {name:'여름',age:20,area:'서울'}
console.log(study);
for(let i of study){
    //console.log(study[i]);
    console.log(i);
}
for(let i of abc){
    console.log(i);
}
for(let i in user){
    console.log(i);
    console.log(user[i]);
}
for(let i of li){// querySelectorAll로 생성한 다수li변수 접근
    console.log(i);
}