var findAnagrams = function(s, p) {
    var res = [];
    var len = p.length;
    for(var i = 0; i < s.length; i++){
        var t = s.slice(i, i+len).split('').sort().join('');        
        if(t === p){
            res.push(i);
        }
    }
    return res;
};