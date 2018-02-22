## Delete Node

Write a function to delete a node (except the tail) in a singly linked list, given only access to that node.

Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.



```Ruby
# Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

# @param {ListNode} node
# @return {Void} Do not return anything, modify node in-place instead.
def delete_node(node)
    unless node.next.nil?
        node.val = node.next.val
        node.next = node.next.next
    end
end
```

Source: [Leetcode](https://leetcode.com/problems/delete-node-in-a-linked-list/solution/)
