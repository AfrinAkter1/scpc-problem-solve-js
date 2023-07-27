function findMostFrequentElement(arr){
let elementOccurrences = {};
for(const element of arr){
    elementOccurrences[element] = (elementOccurrences[element] || 0) + 1;

}
let mostFrequentElement ;
let maxFrequency = 0;
for(const element in elementOccurrences){
    if(elementOccurrences[element] > maxFrequency){
      mostFrequentElement = element;
      maxFrequency = elementOccurrences[element]  
    }
}

return mostFrequentElement;
}
const array = [1, 1, 2, 2, 4, 5, 5, 5]
const mostFrequent = findMostFrequentElement(array)
console.log(`The most frequent element is : ${mostFrequent}`)