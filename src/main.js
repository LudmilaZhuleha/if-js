//Variables

let user = 'Dow Jones';
console.log(user);

let student = 'Ludmila Zhuleha';
user = student;
console.log(user); //Ludmila Zhuleha

let test = 1;
test++;
test = test + '1';
console.log(test); // 21

test = test - 1;
console.log(test); // 20

console.log(Boolean(test)); //true
console.log(!!test); // true

//Multiply the elements of array
let arr = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < arr.length; i++) {
  result *= arr[i];
}
console.log(result);

// Console.log the array elements that are more than 5 but less than 10
let arr2 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] > 5 && arr2[i] < 10) {
    console.log(arr2[i]);
  }
}

// Console.log only even elements of the array
let arr3 = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 == 0) {
    console.log(arr3[i]);
  }
}
//alternative
for (let i = 0; i < arr3.length; i++) {
  if ((arr3[i] & 1) == 0) {
    console.log(arr3[i]);
  }
}
