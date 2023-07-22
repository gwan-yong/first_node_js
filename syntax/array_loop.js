var number = [1,400,12,34,5,10000];
var i = 0; 
var total = 0;
while(i < number.length){
    total = total + number[i]; //변수 total에 number 배열에 있는 값을 순서대로 더함
    i = i+1;
}
console.log(`total : ${total}`);