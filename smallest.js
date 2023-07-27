function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array must contain at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("No second smallest element found in the array.");
    }
  
    return secondSmallest;
  }
  
  
  const numbers = [8, 12, 4, 10, 5, 9, 7];
  const secondSmallest = findSecondSmallest(numbers);
  console.log(secondSmallest); 
  