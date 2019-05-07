var transpose = function(A) {
    return Object.keys(A[0]).map(function(c) {
          return A.map(function(r) { return r[c]; });
      });
  };