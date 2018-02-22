#### Symmetrical Tree
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
But the following [1,2,2,null,3,null,3] is not:
```
    1
   / \
  2   2
   \   \
   3    3
 ```
Note:
Bonus points if you could solve it both recursively and iteratively.

**Iterative Approach:**

```Ruby
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Boolean}

def is_symmetric(root)
  return true if root.left.nil? && root.right.nil?
  q = Queue.new
  q.push(root.left)
  q.push(root.right)
  until q.empty?
    t1 = q.shift
    t2 = q.shift
    next if t1 == nil && t2 == nil
    return false if t1 == nil || t2 == nil
    return false if t1.val != t2.val
    q.push(t1.left)
    q.push(t2.right)
    q.push(t1.right)
    q.push(t2.left)
  end
  return true
end
```

**Recursive Approach:**
```Ruby
# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val)
#         @val = val
#         @left, @right = nil, nil
#     end
# end

# @param {TreeNode} root
# @return {Boolean}

def is_symmetric(root)
  return true if root.nil?
  is_mirror?(root.left, root.right)
end

def is_mirror?(left, right)
  return true if left.nil? && right.nil?
  return false if left.nil? || right.nil?
  return (left.val == right.val) &&
  is_mirror?(left.left, right.right) &&
  is_mirror?(left.right, right.left)
end
```
- Time complexity - O(n). <i>n</i> is the number of nodes in the tree.
- Space complexity - O(n), where <i>n</i> is the height of the tree. We have to call is_mirror recursively <i>n</i> number of times based on the height of the tree.
