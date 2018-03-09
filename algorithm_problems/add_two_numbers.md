## Add Two Numbers
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.


```JavaScript
const addTwoNumbers = (l1, l2) => {
    let headNode = new ListNode(0);
    let currNode = headNode;

    let first = l1;
    let second = l2;
    let carry = 0;

    while (first !== null || second !== null) {
        let firstVal = first !== null ? first.val : 0;
        let secondVal = second !== null ? second.val : 0;
        let sum = firstVal + secondVal + carry;

        carry = Math.floor(sum / 10);
        currNode.next = new ListNode(sum % 10);
        currNode = currNode.next;

        if (first !== null) first = first.next;
        if (second !== null) second = second.next;
    }

    if (carry > 0) currNode.next = new ListNode(carry);


    return headNode.next;
};
```


- Time Complexity: *O*(max(*m,n*)), where *m* and *n* represent the number of nodes l1 and l2 respectively. The solution must iterate the max of m and n times in order to visit each node and get the sums.
- Space Complexity: *O*(max(*m,n*) + 1). The new linked list will have as many nodes as the list (l1 or l2) with the max number of nodes plus the extra "dummy" headNode.

[Source](link)
