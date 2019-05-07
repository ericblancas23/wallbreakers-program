var reverseVowels = function(s) {
    var result = '';
    
    var string = [];
    var vowels = [];
    
    // Start from front of string to find consonants and vowels.
    for (var i=0; i<s.length; i++) {
        var orig = s[i];
        var char = s[i].toLowerCase();

        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            vowels.push(orig);
            orig = null; // placeholder
        }

        string.push(orig);
    }

    // Insert vowels.
    for (var i=0; i<string.length; i++) {
        if (!string[i]) {
            string[i] = vowels.splice(vowels.length - 1, 1)[0];
        }
    }
    
    result = string.join('');
    
    return result;
}