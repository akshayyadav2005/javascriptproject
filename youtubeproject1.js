const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const divisibleByThree = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 3 === 0) {
    divisibleByThree.push(arr[i]);
  }
}

console.log(divisibleByThree);
