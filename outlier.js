const outlier = (numArray) => {
  let evenNums = [];
  let oddNums = [];
  for (let i = 0; i < numArray.length; i++) {
    let num = numArray[i];

    if (num % 2 === 0) {
      evenNums.push(num);
    } else {
      oddNums.push(num);
    }
  }
  if (evenNums.length === 1) {
    return evenNums;
  } else {
    return oddNums;
  }
};

const outlier1 = (numArray) => {
  let evenNum = [];
  let oddNum = [];
  numArray.forEach((num) => {
    num % 2 === 0 ? evenNum.push(num) : oddNum.push(num);
  });
  return oddNum.length === 1 ? oddNum : evenNum;
};

console.log(outlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(outlier([160, 3, 1719, 19, 11, 13, -21] ))
