// Merge Two Sorted Lists
// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

const mergeTwoLists = (l1, l2) => {
    const dummyNode = new ListNode(0);
    let currNode = dummyNode;

    let node1 = l1;
    let node2 = l2;

    while (node1 && node2) {
        let smallerNode = node1.val <= node2.val ? node1 : node2;
        currNode.next = smallerNode;
        smallerNode === node1 ? node1 = node1.next : node2 = node2.next;
        currNode = currNode.next;
    }

    if (node1 !== null) currNode.next = node1;
    if (node2 !== null) currNode.next = node2;

    return dummyNode.next;
};

// Time Complexity: O(n + m)
// Space Complexity: O(n + m)

// Source: Leetcode
