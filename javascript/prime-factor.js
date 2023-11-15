//
// This is only a SKELETON file for the 'Prime Factors' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const primeFactors = (number) => {
  let numArray = [];
  //   let div = 2;
  for (let div = 2; number >= 2; div++) {
    // while (number >= 2) {
    while (number % div == 0) {
      number = number / div;
      numArray.push(div);
    }
  }
  //   }

  return numArray;
};
console.log(primeFactors(93819012551));
