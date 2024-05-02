// let lengthOfLongestSubstring = function(s) {
//     if(s.length <= 1) s.length;
//     let longest =0;
//     for(let left=0; left<s.length; left++) {
//         let seenBefore={}, currentLength =0;
//         for(let right=left; right<s.length; right++) {
//             let currentChar = s[right]
//             if(seenBefore[currentChar]) {
//                 break;
//             }
//             else {
//                 seenBefore[currentChar] = true;
//                 currentLength++;
//                 longest = Math.max(longest, currentLength);
//             }
//         }
//     }
//     return longest;

// };

let lengthOfLongestSubstring = (s) => {
  if (s.length <= 1) return s.length;
  let seenBefore = {};
  let left = 0;
  let longest = 0;

  for (let right = 0; right < s.length; right++) {
    let currentChar = s[right];
    let prevSeenChar = seenBefore[currentChar];

    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenBefore[currentChar] = right;

    longest = Math.max(longest, right - left + 1);
  }

  return longest;
};
console.log(lengthOfLongestSubstring("AAJAAL"));
