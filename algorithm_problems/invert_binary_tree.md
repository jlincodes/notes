## Invert Binary Tree

Invert a binary tree.
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```
to
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

#### Recursive Approach:

**Algorithm:**

The inverse of an empty tree is the empty tree. The inverse of a tree with root *r*, and subtrees *right* and *left*, is a tree with root *r*, whose right subtree is the inverse of *left*, and whose left subtree is the inverse of *right*.

```Ruby
def invert_tree(root)
  return nil if root.nil?

  right = invert_tree(root.right)
  left = invert_tree(root.left)

  root.left, root.right = right, left

  root
end
```

**Complexity Analysis:**

Since each node in the tree is visited only once, the time complexity is **O(n)**, where *n* is the number of nodes in the tree. We cannot do better than that, since at the very least we have to visit each node to invert it.

Because of recursion, *O(h)* function calls will be placed on the stack in the worst case, where *h* is the height of the tree. Because *h∈O(n)*, the space complexity is **O(n)**.

#### Iterative Approach:

Alternatively, we can solve the problem iteratively, in a manner similar to breadth-first search.

**Algorithm**

The idea is that we need to swap the left and right child of all nodes in the tree. So we create a queue to store nodes whose left and right child have not been swapped yet. Initially, only the root is in the queue. As long as the queue is not empty, remove the next node from the queue, swap its children, and add the children to the queue. Null nodes are not added to the queue. Eventually, the queue will be empty and all the children swapped, and we return the original root.

```Ruby
def invert_tree
  return nil if root.nil?
  queue = Queue.new
  queue.push(root)
  until queue.empty?
    current = queue.shift
    temp = current.left
    current.left, current.right = current.right, temp
    queue.push(current.left) unless current.left.nil?
    queue.push(current.right) unless current.right.nil?
  end      
  return root
end
```

**Complexity Analysis**

Since each node in the tree is visited / added to the queue only once, the time complexity is O(n)O(n), where *n* is the number of nodes in the tree.

Space complexity is *O(n)*, since in the worst case, the queue will contain all nodes in one level of the binary tree.

**Source:** [Leetcode](https://leetcode.com/problems/invert-binary-tree/solution/)
