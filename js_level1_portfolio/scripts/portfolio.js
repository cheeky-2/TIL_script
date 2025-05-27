// 프로젝트소개 팝업 알고리즘
// 1. 팝업 숨기기
const popupBg = document.querySelector('.popup_bg');
const thumbNailA = document.querySelectorAll('.design a');
const noneImgTag = document.querySelector('.contents img');
console.log(popupBg, thumbNailA, noneImgTag);
popupBg.style.display = 'none';
// 변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할때는 인덱스를 사용해서 하나씩 개별 접근해야한다.
// 2. 썸네일 이미지(a) 클릭 시  팝업 보이기
thumbNailA[0].addEventListener('click', function(){
    console.log(0);//작동테스트
    console.log(this);//이벤트객체자동인식하는지 확인
    console.log(this.children[0].src);
    console.log(popupBg.children[0].children[0].src);
    //noneImgTag.src = 'this.children[0].src';
    popupShow(this);//팝업 출력 함수 호출
});
thumbNailA[1].addEventListener('click', function(){
    popupShow(this);
});
thumbNailA[2].addEventListener('click', function(){
    popupShow(this);
});
thumbNailA[3].addEventListener('click', function(){
    popupShow(this);
});
thumbNailA[4].addEventListener('click', function(){
    popupShow(this);
});
thumbNailA[5].addEventListener('click', function(){
    popupShow(this);

});
thumbNailA[6].addEventListener('click', function(){
    popupShow(this);

});
thumbNailA[7].addEventListener('click', function(){
    popupShow(this);
});
function popupShow(target){
    console.log('------------------------------------함수시작위치와 에러체크');
    // console.log(this.children[0]); // 정상체크
    popupBg.style.display = 'flex';
    popupBg.children[0].children[0].src = target.children[0].src;
    return; // 함수 종료
}
// 3. (팝업 실행 기준) 배경클릭 시 팝업 숨기기
popupBg.addEventListener('click',closePopup);
function closePopup(){
    return popupBg.style.display = 'none';
}
// 프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘
// 1. 클릭한 대상의 이미지 경로 확인
// 2. 위 경로를 팝업 이미지의 경로에 대입