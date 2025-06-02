const aniImg = document.querySelector('main > img');
const topBtn = document.querySelector('.control .top');
const downBtn = document.querySelector('.control .down');
const leftBtn = document.querySelector('.control .left');
const rightBtn = document.querySelector('.control .right');
const inputMove = document.querySelector('.io input');
const end = document.querySelector('main');
let currentY = 0;
let currentX = 0;
console.log(topBtn,downBtn,leftBtn,rightBtn,inputMove);
//aniImg.style.transform = 'translate(10px, 10px)';
//↓버튼 클릭 시 이미지를 아래방향으로 20px 이동시키기
downBtn.addEventListener('click',downFunc);
topBtn.addEventListener('click', topFunc);
leftBtn.addEventListener('click', leftFunc);
rightBtn.addEventListener('click', rightFunc);
function downFunc(){
    //currentY = currentY+20
    currentY += 20;
    return moveControl();
}
function topFunc(){
    currentY -= 20;
    return moveControl();
}
function leftFunc(){
    currentX -= 20;
    return moveControl();
}
function rightFunc(){
    currentX += 20;
    return moveControl();
}
function moveControl(){
    return aniImg.style.transform = `translate(${currentX}px, ${currentY}px)`;
}
// input 입력창에 허용키를 입력하고 Enter를 누르면 캐릭터가 이동하는 알고리즘
// 허용키 : 왼쪽, 오른쪽, 위, 아래
inputMove.addEventListener('keydown',function(e){
    console.log(e);
    if(e.key === 'Enter'){
        // 왼쪽 입력 후 Enter 실행 시 이미지가 왼쪽 20px 이동
        if(inputMove.value === '왼쪽'){
            currentX -= 20;
            moveControl();
        }else if(inputMove.value === '오른쪽'){// 조건1 거짓일 때 검사하는 조건2
            currentX += 20;
            moveControl();
        }else if(inputMove.value === '위'){// 조건1,2 거짓일 때 검사하는 조건3
            currentY -= 20;
            moveControl();
        }else if(inputMove.value === '아래'){// 조건1,2,3 모두 거짓일 때 실행결과
            currentY += 20;
            moveControl();
        }else{inputMove.value='';}
        inputMove.value = '';
    }
    if(e.code === 'KeyA'){
        currentX -= 20;
        moveControl();
    }else if(e.code === 'KeyD'){
        currentX += 20;
        moveControl();
    }else if(e.code === 'KeyW'){
        currentY -= 20;
        moveControl();
    }else if(e.code === 'KeyS'){
        currentY += 20;
        moveControl();
    }else{inputMove.value = '';}
})
inputMove.addEventListener('input',function(){
    inputMove.value = '';
})