function findTwoNumbersWithTarget(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left < right) {
      const sum = arr[left] + arr[right];
  
      if (sum === target) {
        return [left, right];
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  
    return null; 
  }
  

  const sortedArray = [2, 5, 8, 12, 30];
  const targetValue = 14;
  const indices = findTwoNumbersWithTarget(sortedArray, targetValue);
  console.log(indices); 
  