// 연산자 25/05/16
// 증감 연산자(단항)
let a = 1;
let b = 10;
// console.log(a,b);
b = a++;
// console.log(a,b);
a = --b;
// console.log(a,b);
// 위에 b=a++에서 a=1의 값을 b에 대입하고 1을 더한 값이 결과값으로 나왔고 뒤에 우리가 --b의 b는 위에 우리가 a의 값인 1을 대입한것에 --로 1을 빼서 0이 되었다
let x = 5;
// let y = ++x; //1증가된 x값을 대입받는 y변수
// 증감연산은 x변수 자체에 영향을 주기 때문에 일회성 더하기 연산자로 +1 을 붙여서 계산하고 x에 영향을 주지 않게 y에 대입한다.
let y = x+1;
console.log(x,y); // 5 6
y = x++;
console.log(x,y); // 6 5
x = ++y;
console.log(x,y); // 6 6
x++;
console.log(x,y); // 7 6
--y; // 증감연산자는 대입이 없어도 변수에 영향을 준다.
console.log(x,y); // 7 5
x+1; // 더하기, 빼기, 곱하기, 나누기 등 일반 산술연산자는 대입연산자가 없으면 변수에 영향을 주지 않는다.
console.log(x,y); // 7 5
// ===================증감연산자 연습문제
console.log('==========================================절취선');
let num1 = 10;
let num2 = 20;
let num3 = 30;
let num4 = 40;
// num1, num2, num3, num4의 값은? 10 20 30 40
console.log(num1, num2, num3, num4);
num1++;
num2--
num3++;
num4--;
// num1, num2, num3, num4의 값은? 11 19 31 39
console.log(num1, num2, num3, num4);
num1 = ++num2; // 20 20
console.log(num1, num2);
num2 = num1++; // 21 20
console.log(num1, num2);
// num1, num2, num3, num4의 값은? 21 20 31 39
console.log(num1, num2, num3, num4);
num3 = num1+num2; // 21 20 41
console.log(num1, num2, num3);
num4 = ++num3; // 42 42
console.log(num3, num4);
// num1, num2, num3, num4의 값은? 21 20 42 42
console.log(num1, num2, num3, num4);
num1 = ++num3 + 10; // 53 43
console.log(num1,num3);
num2 = --num4 + 1; // 42 41
console.log(num2, num4);
// num1, num2, num3, num4의 값은? 53 42 43 41
console.log(num1, num2, num3, num4);
console.log('===============================절취선')
//==============================복합대입연산자
let number = 10;
// number = 15; // 기존값을 제거하고 단순 새로운 값 삽입 X
// number = 5; // 위와 동일
// number = number + 5; // 기존값을 유지하고 원하는 계산 추가 O
number += 5; // 복합대입 활용(위와 결과 동일)
console.log(number); // 15
number -= 5; // 빼기복합 number = number-5;
console.log(number); // 10
number *= 5; // 곱하기복합 number = number*5;
console.log(number); // 50
number /= 5; // 나누기복합 number = number/5;
console.log(number); // 10
number %= 5; //나머지복합 number = number%5;
console.log(number); // 0