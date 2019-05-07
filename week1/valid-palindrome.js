var isPalindrome = function(str) {
    var i = 0, 
        j = str.length - 1, 
        str = str.toLowerCase();

    if (str.length == 0) {
        return true;
    }

    while (i < j) {

        if (/[^a-zA-Z0-9]/.test(str[i])) {
            i++;
            continue;
        }

        if (/[^a-zA-Z0-9]/.test(str[j])) {
            j--;
            continue;
        }

        if (str[i] != str[j]) {
            return false;
        }

        i++;
        j--;
    }
    return true;
};