// as close as I can get
var merge = function(intervals) {
    if (!intervals.length) return [];
  intervals.sort((a, b) => a.start !== b.start ? a.start - b.start : a.end - b.end);

  let prev = intervals[0];
  const result = [prev];

  for (const curr of intervals) {
    if (curr.start <= prev.end) {
      prev.end = Math.max(prev.end, curr.end);
    } else {
      result.push(curr);
      prev = curr;
    }
  }
  return result;
};