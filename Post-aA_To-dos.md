## Coding To-dos:

### Review Tutorials/Online Courses:
- [ ] JavaScript30
  - [x] 11/30 completed
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
  - [x] 81/150 applied
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
- [x] Reach out to VM and KL (also coding bootcamp grads) for any advice they may have on post-bootcamp job search
- [x] Email resume to LC @ Patreon

### Interview Prep
- [ ] Study Frontend Basic Interview Questions: https://github.com/rlee0525/TechnicalConceptsForInterviews/blob/master/FrontendBasics.md
  - [x] make Anki flash cards to study
- [ ] Study closures and how to explain what closures are:
  - http://javascriptissexy.com/understand-javascript-closures-with-ease/
  - https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
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

### Phone screen tips from Josh:
- Revise personal pitch
  - spend less time talking about "how I became interested in coding and how I got to this point"
  - spend more time talking about projects (i.e. describe the project, the technologies used, how the technologies interact with one another, etc.)
  - reframe pitch
    - instead of talking just about "why I want to work for XYZ company", include "how I can contribute to XYZ company"
    - companies, especially start-ups, want employees who can learn fast and hit the ground running because there may not be enough Sr. Devs/Engineers who have time to train.
- White-boarding/shared-screen coding:
  - Ask for clarification questions.
  - Spend more time brain storming
    - Coming up with a brute-force solution is fine. Think about the time complexity of the brute-force method. Then try to think of a better way to approach the problem and optimize the solution.
    - Write out test cases (inputs and outputs) and any possible edge cases.
- General tips for job search:
  - Getting a response from cold applications will be difficult, especially for junior developers. Try LinkedIn: look for that one friend who has a ton of connections and look through his/her connections. Find people who work for small startups and ask that friend to connect you with that person. Then ask if that start-up is hiring.

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
