// Easy case is when the list is made up of only positive numbers and the maximum sum is the 
//sum of the whole array. If the list is made up of only negative numbers, return 0 instead.
// Empty list is considered to have zero greatest sum. Note that the empty 
//list or array is also a valid sublist/subarray.

//https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
// var maxSequence = function(arr){
//   var currentSum = 0;
//   return arr.reduce(function(maxSum, number){
//       currentSum = Math.max(currentSum+number, 0);
//       return Math.max(currentSum, maxSum);
//   }, 0);

// }


//The maximum sum subarray problem consists 
//in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//(maxSequence([]), 0
//maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6  [4, -1, 2, 1]

var maxSequence = function(arr){
  var min = 0, ans = 0, i, sum = 0;
  for (i = 0; i < arr.length; ++i) {
    sum += arr[i];
    min = Math.min(sum, min);
    ans = Math.max(ans, sum - min);
  }
  return ans;
}

console.log(maxSequence([5, 1, 2, -1,-2,5,3])); 
//console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); 


// var maxSequence = function(arr){
//   var rec = 0, sum = 0;

//   for (var i = 0; i < arr.length; i++) {
//     sum = 0;
//     for (var j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if (sum > rec) {
//         rec = sum;      
//       }
//     }
//   }
  
//   return rec;
// }



