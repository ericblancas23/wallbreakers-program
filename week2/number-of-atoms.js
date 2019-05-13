var countOfAtoms = function(formula) {
    const isLowerLetter = char => char.match(/[a-z]/);
    const isNum = char => !isNaN(char);
  
    const getItem = (start, validate) => {
      let result = '';
      let next = start;
      let item = formula[next];
  
      while (start < formula.length && validate(item)) {
        result += item;
        next += 1;
        item = formula[next];
      }
      return {
        next,
        result,
      };
    };
  
    const getOppositeBracketIndex = (start) => {
      let count = 1;
      let index = start;
      while (count > 0 && index < formula.length) {
        const char = formula[index];
        if (char === '(') count += 1;
        if (char === ')') count -= 1;
        index += 1;
      }
      return index - 1;
    };
  
    const search = (start, end, multiple = 1) => {
      let index = start;
      const result = {};
  
      while (index < end) {
        let char = formula[index];
        let item;
        let count;
  
        if (char === '(') {
          const oppoIndex = getOppositeBracketIndex(index + 1);
          // count
          item = getItem(oppoIndex + 1, isNum);
          count = parseInt(item.result || 1);
  
          const tmp = search(index + 1, oppoIndex, count * multiple);
          Object.keys(tmp).forEach((atom) => {
            result[atom] = (result[atom] || 0) + tmp[atom];
          });
          index = item.next;
        } else {
          // is atom
          // completion the atom
          item = getItem(index + 1, isLowerLetter);
          char += item.result;
          index = item.next;
          // get count
          item = getItem(index, isNum);
          count = parseInt(item.result || 1);
          index = item.next;
  
          result[char] = (result[char] || 0) + count * multiple;
        }
      }
  
      return result;
    };
  
    const result = search(0, formula.length, 1);
    return Object.keys(result)
        .sort()
        .reduce((str, atom) => { return `${str}${atom}${result[atom] > 1 ? result[atom] : ''}` }, '');
  };
  