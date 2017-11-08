## Coding To-dos:

### Review Tutorials/Online Courses:
- [ ] JavaScript30
  - [x] 9/30 completed
- [ ] Finish FreeCodeCamp course to work on additional projects
- [ ] Finish Codecademy React 101 and 102 courses
- [ ] edX
  - [ ] HavardX - CS50 Intro to Computer Science
  - [ ] Microsoft - DEV293x Intro to NodeJS
  - [ ] W3Cx - CSS.0x Basic CSS
  - [ ] BerkeleyX - Agile Development Using Ruby on Rails

### Practice Projects:
- [ ] Rails Reddit Clone
- [ ] Bench BnB

### New topics:
- [ ] Python
  - [ ] Microsoft - DEV 274x Introduction to Python: Fundamentals
    - https://www.edx.org/course/introduction-python-fundamentals-microsoft-dev274x-0
- [ ] Machine Learning

### Job Search
<!-- - [ ] Use Flaticon to customize Linkedin & Github icons on resume -->

- [ ] Submit 150 applications to get taken off roll call
  - [x] 61/150 applied
- [x] Get business cards for networking events
  - [x] Design business cards
  - [x] Order business cards
- [ ] Print out resumes on resume paper
- [ ] Finish OKCupet Demo
  - [ ] Add cute puppies and kittens to splash page
  - [ ] Add more pets to pet index
- [x] Refine Budget Calc
  - [x] separate guilt-free spending & move to bottom right area under chart
- [x] Add CC to get more Heroku dynos
- [x] Set up Uptime Robot to replace Binary Canary for Heroku projects
- [x] Create personal portfolio
  - [ ] Add additional projects to portfolio
  - [ ] Continue to refine and polish portfolio
- [ ] Sign up for Mentat
- [ ] Try Google job aggregate

### Interview Prep
- [ ] https://www.reddit.com/r/cscareerquestions/comments/1jov24/heres_how_to_prepare_for_tech_interviews/
- [ ] Review/learn time/space complexity
- [ ] Study Algorithms
- [ ] Review Ruby/OOP (boardgames)
- [ ] Review JS concepts (closures, currying, etc.)
- [ ] 1 HackerRank/ 1 LeetCode problem per day, min

### Interview tips from Dallas:
- review:
  - [ ] JS concepts (closures, currying, etc)
  - [ ] time complexity
  - [ ] redux/react vs jQuery + vanilla JS
- practice HackerRank problems
  - [ ] write them out on paper to simulate white-boarding and proper allocation of space


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
