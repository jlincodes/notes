## Linked List Intersection
Given two linked lists, determine if the two lists intersect. Return the intersecting node.

Have the interviewee ask questions to clarify the following assumptions:
- The two lists are singly-linked lists
- Return the intersecting node
- The intersection is defined based on reference, not by value

```JavaScript
const getIntersectionNode = (headA, headB) => {
  // First determine whether the lists intersect:

  // find the tail of each list & compare the tails
  let tailA = findTail(headA);
  let tailB = findTail(headB);

  if (tailA !== tailB) return null;

  // find the size of each list
  let sizeA = findSize(headA);
  let sizeB = findSize(headB);

  // set one pointer to each of the lists' head nodes
  let shorter = sizeA < sizeB ? headA : headB;
  let longer = sizeA < sizeB ? headB : headA;

  // advance the longer pointer by the difference in size
  longer = getKthNode(Math.abs(sizeA - sizeB), longer);

  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  return shorter;
};

const findTail = (head) => {
  let current = head;
  while (current !== null && current.next !== null) {
    current = current.next;
  }
  return current;
}

const findSize = (head) => {
  let node = head;
  let size = 0;
  while (node !== null) {
    size++;
    node = node.next;
  }
  return size;
}

const getKthNode = (k, head) => {
  let current = head;

  while (k > 0 && current !== null && current.next !== null) {
    current = current.next;
    k--;
  }    
  return current;
}
```

- **Time Complexity**: O(*n + m*), where *n* and *m* represent the number of nodes in each respective lists.
- **Space Complexity**: O(1)


**Source: Cracking the coding Interview pg. 221**
