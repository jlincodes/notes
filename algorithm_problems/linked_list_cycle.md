## Linked List Cycle

Given a linked list, determine if it has a cycle or loop in it.

Bonus: Can you solve it without using extra space?

```JavaScript
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
```

#### JavaScript solution using a hash
```JavaScript
var hasCycle = function(head) {
  hash = {};
  while (head !== null) {
    if (hash.hasOwnProperty(head.val)) {
      return true;
    } else {
      hash[head.val] = head;
    }
    head = head.next;
  }
  return false;
};
```

```Ruby
def is_cyclic?(node)
  visited = Hash.new { |h,k| h[k] = false }
  while !node.val.nil?
    if visited[node.val]
      return true
    else
      visited[node.val] = true
    end
    node = node.next
  end
end
```
- Time complexity : **O(n)**. We visit each of the **n** elements in the list at most once. Adding a node to the hash table costs only **O(1)** time.
- Space complexity: **O(n)**. The space depends on the number of elements added to the hash table, which contains at most **n** elements.

#### JavaScript solution using pointers
```JavaScript
const hasCycle = (head) => {
  if (head === null || head.next === null) return false;

  let slowPointer = head;
  let fastPointer = head.next;

  while (slowPointer !== fastPointer) {
    if (fastPointer === null || fastPointer.next === null) {
      return false;
    } else {
      slowPointer = slowPointer.next;
      fastPointer = fastPointer.next.next;
    }
  }
  return true;
};
```

- Time complexity : **O(n)**. Let us denote nn as the total number of nodes in the linked list. To analyze its time complexity, we consider the following two cases separately.
  - List has no cycle:
  The fast pointer reaches the end first and the run time depends on the list's length, which is **O(n)**.
  - List has a cycle:
  The worst case time complexity is **O(N+K)** (where **N** is the number of nodes and **K** is the number of node in the cycle/loop), which is **O(n)**.
- Space complexity : **O(1)**. We only use two nodes (slow and fast) so the space complexity is **O(1)**.
