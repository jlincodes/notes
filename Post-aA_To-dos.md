## Coding Study To-dos:
- [ ] FreeCodeCamp course
- [ ] Review JS, Rails, Rails Auth via Codecademy
- [ ] Finish Codecademy Learn ReactJS Courses
- [ ] Learn Python
- [ ] Rails Reddit Clone
- [ ] Redo JS projects from CNIT 132 & 133 & upload to Github
- [ ] Learn Machine Learning
- [ ] Create & polish personal portfolio
- [ ] Continue OKCupet
- [ ] Set up Uptime Robot to replace Binary Canary
- [x] Continue Budget Calc - separate guilt-free spending to bottom right area under chart

## Job Search Materials:
- [ ] Use flaticon to customize linkedin & github icons on resume
- [ ] Get business cards for networking events
- [ ] Print out resumes on resume paper

## Interview Concepts to learn:
- [ ] JS concepts (closures, currying, etc)
- [ ] time complexity
- [ ] redux/react vs jQuery + vanilla JS
- [ ] practice HackerRank problems & write them out on paper to simulate white-boarding and proper allocation of space


```Ruby
# Max product of 3 integers in an array of integers (both positive and negative)

def max_product(array)
  sorted = array.dup.sort.reverse
  # Ruby's built-in sort is a quick sort and is O(n log n) complexity on average
  pos_prod = sorted[0] * sorted[1] * sorted[2]
  neg_prod = 0

  if sorted[-1] < 0 && sorted[-2] < 0
    sorted[0] * sorted[-1] * sorted[-2]
  end

  pos_prod >= neg_prod ? pos_prod : neg_prod
end
```
