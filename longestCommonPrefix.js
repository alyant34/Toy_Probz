/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] consists of only lower-case English letters.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  let result = '';
  if (strs.length === 1) {
          return strs[0];
      }
  let compare =  strs[0].split('');
  const key = {};

  for (let i = 0; i < compare.length; i++) {
    result += compare[i];
    key[result] = result;
  }
  result = '';
  for (var j in key) {
    let tracker = 0;
    for (let i = 1; i < strs.length; i++) {
      if (strs[i].slice(0, key[j].length) === key[j]) {
        tracker += 1;
      }
    }
    if (tracker === strs.length - 1) result = key[j]
  }
  return result;
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["aaa","aa","aaa"]))
console.log(longestCommonPrefix(["c","acc","ccc"]))