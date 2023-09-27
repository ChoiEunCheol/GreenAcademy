// zero()
// 매개변수 2개 마련하고, 덧셈 한 값을 숫자로 리턴하는 함수를 만들어보기
// 숫자로 리턴하는 함수를 만들어보기

// one()
// 1. 선언을 한 다음 호출해서 처리
// two()
// 2. 선언만 간단히 한 다음 호출에서 결정해주기
function zero(one, two, callback){
    return callback(one,two);
}

function one(a,b) {
    return a+b;
}

// --------------------------------------------

console.log(zero(2,1,one));

console.log(zero(2,1, function two(x,y){
    return x+y;
}));