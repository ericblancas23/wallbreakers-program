var findAnagrams = function(s, p) {
    var result = [];

    if (p.length <= s.length) {
        // Build a hash of the letters.
        var wordHash = {}; // Master copy.
        var hash = {}; // Current copy.
        p.split('').forEach(function(letter) {
          wordHash[letter] = wordHash[letter] ? wordHash[letter] + 1 : 1;
          hash[letter] = hash[letter] ? hash[letter] + 1 : 1;
        });
        
        var count = 0;
        var index = -1;
        
        for (var i=0; i<s.length; i++) {
            var letter = s[i];
            if (hash[letter]) {
                // Part or start of an anagram.
                if (index === -1) {
                    index = i;
                }
                
                hash[letter]--;
                count++;
                
                if (count === p.length) {
                    // Completed an anagram.
                    result.push(index);
                    
                    // Reset variables.
                    hash[s[index]]++;

                    count = p.length - 1;
                    index++;
                }
            }
            else {
                // Reset variables.
                if (index !== -1 && hash[letter] !== undefined && (p.length <= s.length - index)) {
                    // Find first occurrence of 'letter'. Set the starting point 'index' to next letter.
                    for (var j=index; j<i; j++) {
                        index++;
                        if (s[j] === letter) {
                            break;
                        }
                        else {
                            hash[s[j]]++;
                            count--;
                        }
                    }
                }
                else {
                    // Restore hash and counter.
                    var keys = Object.keys(hash);
                    for (var j=0; j<keys.length; j++) {
                        hash[keys[j]] = wordHash[keys[j]];
                    }
                    count = 0;
                    index = -1;
                }   
            }
        }
    }
    
    return result;
};