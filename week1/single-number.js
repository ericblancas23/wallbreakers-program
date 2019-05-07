var singleNumber = function(nums) {
    var single;
    for (var i = 0, l = nums.length; i < l; i++) {
        single ^= nums[i];
    }
    return single;
};