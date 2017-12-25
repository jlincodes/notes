### 12/18 Day 1:
- [x] Leetcode problem
  - Merge Sorted Array

### 12/19 Day 2:
- [x] Leetcode problem
  - Finish Merge Sorted Array

### 12/20 Day 3:
- [x] freecodecamp HTML/CSS Review

### 12/21 Day 4:
- [x] freecodecamp HTML/CSS Review
- [x] Started Random Quote Generator mini-project

### 12/22 Day 5:
- [x] ReactJS Review
  - [x] Resume Codecademy ReactJS: Part I
    - First React Component
    - Components & Advanced JSX

### 12/23 Day 6:
- [x] ReactJS Review
  - [x] Complete Codecademy ReactJS: Part I
    - Components Render Other Components
    - `this.props`
    - `this.state`
  - [x] Start ReactJS: Part II
    - Stateless Components From Stateful Components
    - Child Components Update Their Parents' state
    - Child Components Update Their Siblings' props

### 12/24 Day 7:
- [ ] ReactJS Review
  - Style
  - Container Components from Presentational Components
  - Stateless Functional Components
    - When a container components is separated from a *presentational* component, the presentational component will always end up with one `render()` function and no other properties.
    - Presentational component classes with nothing but a render function can be rewritten as a JavaScript function.
    - Stateless functional components usually have `props` passed to them. If written as a JS function, pass in `props` a *parameter*.

```JavaScript
export class MyComponentClass extends React.component {
  render() {
    return {
      <h1>Hello world, {this.props.name}</h1>
    };
  }
};

// Stateless functional component
export const MyComponentClass = (props) => {
  return <h1>Hello world, {props.name}</h1>;
}

// Alternatively, props can be assigned to variables and then displayed.

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);
```
