## Binary Tree Max Depth

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


```Ruby
class TreeNode
  attr_accessor :val, :left, :right
  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

def max_depth(root)
  return 0 if root.nil?

  left_depth = max_depth(root.left)
  right_depth = max_depth(root.right)

  left_depth > right_depth ? left_depth + 1 : right_depth + 1
end
```

```JavaScript
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const maxDepth = (root) => {
  if (root === null) return 0;

  let lDepth = maxDepth(root.left);
  let rDepth = maxDepth(root.right);

  if (lDepth > rDepth) {
    return lDepth + 1;
  } else {
    return rDepth + 1;
  }
};
```

Source: [Leetcode](https://leetcode.com/problems/maximum-depth-of-binary-tree/description/)
