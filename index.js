function add(a, b) {
  let result = a + b;
  return result;
}  
function subtract(a, b) {
  return a - b;
}  
function multiply(a, b) {
  return a * b;
} 
function divide(a, b) {
  return a / b;
}  
 
function increment(n) {
    return n+=1
} // increments n and returns the result
function decrement(n) {
    return n-=1
} // decrements n and returns the result

function makeInt(n){
return parseInt(n, 10)-( parseInt(n, 10)  %1)
}
 
function preserveDecimal(n){
    return n-0
}
 

console.log(makeInt('0x2328'));
console.log(add(4, 5));
