# Interview Questions

## [How to prepare for Tech Interviews - Reddit](https://www.reddit.com/r/cscareerquestions/comments/1jov24/heres_how_to_prepare_for_tech_interviews/?compact=true)

### Data Structures
Know the Big-O for insert, delete, lookup, etc. for each of these. Know how the mechanics work.
- Array
- Linked List
- Stack/Queue
- Trees (Tree, Binary Tree, Binary Search Tree, Red-Black Tree, etc. Learn as many as you can)
- Heap
- Hash Table (this is really important - understand all of the different collision mitigation mechanisms, understand what amortized constant-time means)
- Directed/Undirected/Weighted Graphs
- Trie (pronounced "tree")M
- Linked Hash Map (this is very specific, but comes up a LOT in interviews)


### Algorithms
Know all of the Big-O for this and how it's derived.
You don't have to go crazy here, but review a couple of:
- Sorting algorithms (both comparison sorting and non-comparison sorting)
- Tree traversals (just memorize all of these inorder, preorder, postorder, level order)
- Traversals - Dijkstra's, A*, BFS, DFS (know the difference between DFS and BFS when would you use one over the other and why - hint, is usually matters when you don't have to search the whole space. Also make sure that you can code recursively and using your own stack/queue)
- All the prefix-tree searches

#### Two Sum
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Brute Force Method:
```Ruby
def two_sum(arr, target)
  arr.each_with_index do |i, idx1|
    arr.each_with_index do |j, idx2|
      next if idx1 == idx2
      return [idx1, idx2] if (i+j) == target
    end
  end
end
```
```JavaScript
const twoSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] === target - arr[i]) {
        return [i,j]
      }
    }
  }
};
```
- Time complexity - O(n<sup>2</sup>)
- Space complexity - O(1)

Two-Pass Hash Method:
```Ruby
def two_sum(arr, target)
  hash = {}
  arr.each_with_index do |i, idx|
    hash[i] = idx
  end

  arr.each_with_index do |i, idx1|
    idx2 = hash[target-i]
    if idx2 != nil && idx1 != idx2
      return [idx1, idx2]
    end
  end
end
```
- Time complexity - O(n)
- Space complexity - O(1)
