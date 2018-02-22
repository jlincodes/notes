## Reverse Linked List
Reverse a singly linked list.

```Ruby
# Definition for singly-linked list.
class ListNode
  attr_accessor :val, :next
  def initialize(val)
    @val = val
    @next = nil
  end
end

# @param {ListNode} head
# @return {ListNode}
```

#### Iterative

```Ruby
def reverse_list(head)
  prev = nil
  curr = head
  while curr != nil
    next_temp = curr.next
    curr.next = prev
    prev = curr
    curr = next_temp
  end
  return prev
end
```

Time Complexity: **O(n)**, where **n** represents the number of nodes in the linked list.
Space Complexity: **O(1)**
