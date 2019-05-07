var twoSum = function(nums, target) {
    const hmap = {}
   for (var idx=0; idx<nums.length; idx++) {
       var val = nums[idx]
       var delta = target - val
       var deltaIdx = hmap[delta]
       if (deltaIdx !== undefined && deltaIdx !== idx) {
           return [deltaIdx, idx]
       }
       hmap[val] = idx
   }
   return []
};