/*
Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

Constraints:

The number of nodes in both lists is in the range [0, 50].
-100 <= Node.val <= 100
Both l1 and l2 are sorted in non-decreasing order.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {

  if (l1 === null) return l1;
  if (l2 === null) return l2;

  if (l1.val < l2.val) {
     l1.next = mergeTwoLists(l1.next, l2);
     return l1;
    } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
    }
 };

 console.log(
   mergeTwoLists({val:1, next:{val:2, next:{val:4, next: null}}}, {val:1, next:{val:3, next: {val:4, next: null}}})) //[1,1,2,3,4,4]