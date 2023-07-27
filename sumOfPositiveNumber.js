function sumOfPositiveNum(arr){
    let sum = 0;
    for(const number of arr){
       if(number > 0){
        sum = sum + number
       }
    }
    return sum
}
const result = sumOfPositiveNum([1, -2, 3, 4, -5, 6, -7])
console.log(result)