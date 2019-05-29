function des(a,b){
    return a-b;
  }
  var arrayPairSum = function(nums) {
      nums.sort(des);
      var ret=0;
      for(var i =0;i<nums.length;i+=2){
          ret+=nums[i];
      }
      return ret;
  };