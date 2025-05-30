const userMonth = document.querySelector('input[name=month]');
const outputBtn = document.querySelector('#output_btn');
const monthOutput = document.querySelector('.month');
const flowerOutput = document.querySelector('.flower');
const flowerMeaningOutput = document.querySelector('.flower_meaning');
const birthday_flower = [
    {
        month:1,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]
console.log(userMonth, outputBtn, monthOutput, flowerOutput, flowerMeaningOutput, birthday_flower);
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[0].month){
        monthOutput.textContent = birthday_flower[0].month;
        flowerOutput.textContent = birthday_flower[0].flower;
        flowerMeaningOutput.textContent = birthday_flower[0].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[1].month){
        monthOutput.textContent = birthday_flower[1].month;
        flowerOutput.textContent = birthday_flower[1].flower;
        flowerMeaningOutput.textContent = birthday_flower[1].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[2].month){
        monthOutput.textContent = birthday_flower[2].month;
        flowerOutput.textContent = birthday_flower[2].flower;
        flowerMeaningOutput.textContent = birthday_flower[2].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[3].month){
        monthOutput.textContent = birthday_flower[3].month;
        flowerOutput.textContent = birthday_flower[3].flower;
        flowerMeaningOutput.textContent = birthday_flower[3].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[4].month){
        monthOutput.textContent = birthday_flower[4].month;
        flowerOutput.textContent = birthday_flower[4].flower;
        flowerMeaningOutput.textContent = birthday_flower[4].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[5].month){
        monthOutput.textContent = birthday_flower[5].month;
        flowerOutput.textContent = birthday_flower[5].flower;
        flowerMeaningOutput.textContent = birthday_flower[5].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[6].month){
        monthOutput.textContent = birthday_flower[6].month;
        flowerOutput.textContent = birthday_flower[6].flower;
        flowerMeaningOutput.textContent = birthday_flower[6].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[7].month){
        monthOutput.textContent = birthday_flower[7].month;
        flowerOutput.textContent = birthday_flower[7].flower;
        flowerMeaningOutput.textContent = birthday_flower[7].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[8].month){
        monthOutput.textContent = birthday_flower[8].month;
        flowerOutput.textContent = birthday_flower[8].flower;
        flowerMeaningOutput.textContent = birthday_flower[8].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[9].month){
        monthOutput.textContent = birthday_flower[9].month;
        flowerOutput.textContent = birthday_flower[9].flower;
        flowerMeaningOutput.textContent = birthday_flower[9].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[10].month){
        monthOutput.textContent = birthday_flower[10].month;
        flowerOutput.textContent = birthday_flower[10].flower;
        flowerMeaningOutput.textContent = birthday_flower[10].content;
    }
})
outputBtn.addEventListener('click',function(){
    if(userMonth.value == birthday_flower[11].month){
        monthOutput.textContent = birthday_flower[11].month;
        flowerOutput.textContent = birthday_flower[11].flower;
        flowerMeaningOutput.textContent = birthday_flower[11].content;
    }
})
/* function resultOutput(target){
    if(userMonth.value == target.month){
        monthOutput.textContent = target.month;
        flowerOutput.textContent = target.flower;
        flowerMeaningOutput.textContent = target.content;
    }
} */