var frequencySort = function(s) {
    var map = {};
    var result = '';
    var stringArray = s.split('');
    
    for(var i=0;i<stringArray.length;i++){
    	map[stringArray[i]] = map[stringArray[i]] + 1 || 1;
    }
   
    Object.keys(map).sort((a,b)=>map[b]-map[a]).forEach(function(v){
    	for(var j=0;j<map[v];j++){
    		result += v;
    	}
    });
    
    return result;

};