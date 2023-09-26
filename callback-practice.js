function tkclr(num1, num2, callback) {
  return callback(num1, num2);
}
function add(a, b) {
  return a + b;
}
function mul(a, b) {
  return a * b;
}
function minus(a, b) {
  return a - b;
}
function div(a, b) {
  return a / b;
}

console.log(tkclr(10,2, function(c,d){
    return c+d;
}))

console.log(tkclr(10, 2, add));
console.log(tkclr(10, 2, mul));
console.log(tkclr(10, 2, minus));
console.log(tkclr(10, 2, mul));



function tpro (num1, num2, num3, callback){
    return callback(num1,num2,num3);
}

function ejgkrltpro (a,b,c){
    return a+b+c;
}

console.log(tpro(4,5,6,ejgkrltpro));