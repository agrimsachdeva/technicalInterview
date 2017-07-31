/*
Write a program that prints integers from 1 to 100 (inclusive).
For multiples of 3, print Fizz
For multiples of 5, print Buzz
For multiples of both 3 and 5, print FizzBuzz
*/


for (var index = 1; index <= 100; index ++) {
  if (index % 15 == 0) {
    console.log ("FizzBuzz");
  } else if (index % 5 == 0) {
    console.log("Buzz") ;
  } else if (index % 3 == 0) {
    console.log( "Fizz");
  } else {
    console.log(index);
  }
}
