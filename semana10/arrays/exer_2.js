const randomArr = [4, 7, 12, 89, 11, 22, 0, 25];

const oddArr = [];
const evenArr = [];

for(let i = 0; i < randomArr.length; i++) {
   if(randomArr[i] % 2 == 0) {
      evenArr.push(randomArr[i]);
   } else {
      oddArr.push(randomArr[i]);
   }  
}

console.log(oddArr);
console.log(evenArr);
