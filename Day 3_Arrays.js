function getSecondLargest(nums) {
    // Complete the function
  const max=nums[0];
   
   //sort whole array in decending order
   //highest first then lower
    
    nums.sort(function(a, b){return b-a});
   
  

//remove duplicates

nums = nums.filter(function(item, pos) {
    return nums.indexOf(item) == pos;
})
   
   //check thw whole array
   
    nums.forEach(function(e, i, array) {
    // 'i' is the index
    // 'e' is the element
   // console.log(i + 'remov ' + e);
});
 //console.log(nums[1]);
 
 return nums[1]
 
 
}
