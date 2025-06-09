//데스크탑 메뉴 복제 -> 모바일 메뉴 붙여넣기
const mNavOpen = document.querySelector('.m_nav_open');
const gnb = document.querySelector('.gnb');
const gnbClone = gnb.cloneNode(true);
console.log(mNavOpen, gnb, gnbClone);
mNavOpen.appendChild(gnbClone);
// 데스크랍 nav_lnb 숨기기
// 모바일 m_nav_wrap 숨기기
const navLnb = document.querySelectorAll('nav .lnb');
const mNavWrap = document.querySelector('.m_nav_wrap');
const nav = document.querySelector('nav');
const lnbBg = document.querySelector('.lnb_bg')
console.log(navLnb, mNavWrap, lnbBg, nav);
// navLnb 5개이고 5번 똑같은 값 반복해서 작성하지 않으려면 반복문 사용
// navLnb 5개니까 0,1,2,3,4 인덱스 생각하고 0으로 시작해서 4까지 커지는 반복문 제작
for(let i=0; i<=4; i++){
    navLnb[i].style.display='none';
}
mNavWrap.style.display='none';// 1개DOM으로 반복문 없이 바로 사용
lnbBg.style.display='none';
// nav 마우스 올렸을 때 lnb(navLnb), lnb_bg 보이기
nav.addEventListener('mouseover',()=>{
    lnbBg.style.display = 'block';
    for(let i=0; i<navLnb.length; i++){
        navLnb[i].style.display = 'block';
    }
})
// nav 마우스를 나가면 lnb, lnb_bg 숨기기
nav.addEventListener('mouseout',()=>{
    lnbBg.style.display = 'none';
    for(let i=0; i<navLnb.length; i++){
        navLnb[i].style.display='none';
    }
})
//mNavWrap.style.transition = 'height 0.3s linear';
//모바일 메뉴 클릭 시 m_nav_wrap 보이기
const mNav = document.querySelector('.m_nav');
mNav.addEventListener('click',()=>{
    mNavWrap.style.display='block';
    //mNavWrap.style.height = '500px'
})
// x클릭 시 m_nav_wrap 숨기기
const mNavClose = document.querySelector('.m_nav_wrap .close');
mNavClose.addEventListener('click',()=>{
    mNavWrap.style.display='none';
    //mNavwrap.style.height = '0';
})