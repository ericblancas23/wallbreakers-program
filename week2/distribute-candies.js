var distributeCandies = function(candies) {
    var map = {};
    var sis = [];
    for(var i=0; i<candies.length; i++) {
        var elem = candies[i];
        if(map[elem]) {
            map[elem]++;
        }
        else {
            map[elem] = 1;
        }
    }
    for(var key in map) {
        if(sis.length < candies.length/2) {
            sis.push(key);
        }
    }
    return sis.length;
};