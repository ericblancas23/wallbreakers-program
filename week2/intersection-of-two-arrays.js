var intersection = function(nums1, nums2) {
    return nums1.filter(value => nums2.includes(value));
};