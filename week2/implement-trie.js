var TrieNode = function(key) {
    return {
        key: key,
        isWord: false,
        children: {}
    }
};

var Trie = function() {
    this.root = TrieNode();
};


Trie.prototype.insert = function(word) {
    var tree = this.root;
    var i, curr;
    
    for(i = 0; i < word.length; i++) {
        curr = word[i];
        if(!tree.children[curr]) {
            tree.children[curr] = TrieNode(curr);
        }
        tree = tree.children[curr];
    }
    
    tree.isWord = true;
};


Trie.prototype.search = function(word) {
    var tree = this.root;
    
    for(var i = 0; i < word.length; i++) {
        var curr = word[i];
        
        if(!tree.children[curr]) {
            return false;
        }
        
        tree = tree.children[curr];
    }
    
    return tree.isWord;
};

Trie.prototype.startsWith = function(prefix) {
    var tree = this.root;
    
    for(var i = 0; i < prefix.length; i++) {
        var curr = prefix[i];
        
        if(!tree.children[curr]) {
            return false;
        }
        
        tree = tree.children[curr];
    }
    
    return true;    
};