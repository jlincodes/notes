// Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const mergeTwoLists = (l1, l2) => {
  if (l1 === null && l2 === null) return null;

  let dummyNode = new ListNode(0);
  let currNode = dummyNode;

  let node1 = l1;
  let node2 = l2;

  while (node1 !== null && node2 !== null) {
    if (node1.val <= node2.val) {
        currNode.next = node1;
        node1 = node1.next;
    } else {
        currNode.next = node2;
        node2 = node2.next;
    }
    currNode = currNode.next;
  }

  (node1 !== null) ? currNode.next = node1 : currNode.next = node2;

  return dummyNode.next;
};

// Time Complexity: O(n + m)
// Space Complexity: O(n + m)

// Source: Leetcode
