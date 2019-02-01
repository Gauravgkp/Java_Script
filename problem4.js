var num = [5,2,4,6,7,3,9];
num.sort(function(a,b){return a-b});
console.log(num);

num.sort(function(a,b){return b-a});
console.log(num);