```Ruby
def method_name

end
```

## Our Motivation: Efficiency

Leonhard Euler - set the record for the largest known prime 6,700,417 in 1732
Broke his own record later in 1772

## Asymptotes:
- an asymtote of a curve is a line such that the distance between the curve and the line approaches zero as the input size grows to infinity

## Asymptotic Behavior:
- A function refers to its rate of growth as its input size approaches infinity
- Allows us to focus on the big picture and compare algorithms
-

The symbol O was first introduced by number theorist Paul Bachmann in 1894.

## Things to remember:
- Many factors affect the time it takes for a function to run
- An algorithm may have steps that seem expensive when n is small but are eclipsed by other steps as n approaches infinity
- big O notation describes an algorithm's worst case
- big O talks about orders not about specifics

## We don't care about:
- constant coefficients
- all but ..

Big O Hierarchy:
- constant
- logarithmic
- linear
- linearithmic
- polynomial
- exponential
- factorial

### Constant Time:
- `array.first`
- `300.times`

### Logarithmic O(log n)
- Binary search

### Linear:
- Iteration
  - `array.each { |el| puts el }`

### Linearthmic/Log-linear:
- Merge sort

### Polynomial/quadratic O(n^2)
- Quicksort
- Bubblesort
- Nested iteration:

```Ruby
def nested
  array.each do |el1|
    array.each do |el2|
    end
  end
end
```

### Exponential O(k^n) opposite of log
```Ruby
def subsets
  return [[]] if empty?
  subs = take(count - 1).subsets
  subs.concat(sub.map { |sub| sub + [last] })
end
```

### Factorial:

0(n!)... or o(n*n!)
```Ruby
def permutations(array)
  return [array] if array.length <= 1
  first = array.shift
  perms = permutations(aray)
  total = []

  perms.each do |perm|
    (0..perm.length).each do |i|
      total << perm[0 ... i] + [first] + perm[i .. -1]
    end
  end
end
```

#### What is the Big O of the following?

```Ruby
def odd_perms(array)
  collections = array.permutation.to_a
  collections.map do |subset|
    subset.select { |n| n.odd? }
  end
end
```
n * n


benchmark gem:
https://ruby-doc.org/stdlib-1.9.3/libdoc/benchmark/rdoc/Benchmark.html


## LRU Cache
- Array of 5
  - A B C D E
- Suppose we want to add F into the array. We must shift off the least recently used and push F into the array
  - B C D E F
- We want to be able to look up a value in the array super quickly (O(n)), so we create a key-value pair linked list (why? Linked list allows O(1) insertion and deletion)
- 
