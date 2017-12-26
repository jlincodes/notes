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
  - [x] Start Codecademy ReactJS: Part II
    - Stateless Components From Stateful Components
    - Child Components Update Their Parents' state
    - Child Components Update Their Siblings' props

### 12/24 Day 7:
- [x] ReactJS Review
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

### 12/25 Day 8:
- [x] ReactJS Review
  - PropTypes
  - Forms
    - Controlled vs uncontrolled component:
      - An *uncontrolled component* maintains its own internal state. Ex. A typical `<input type='text' />` element keeps track of its own text, thus making it an *uncontrolled component* - it maintains its own internal state by remembering data about itself.
      - A *controlled component* does not maintain any internal state (i.e. has no memory) and must receive information through `props`. Most React components are *controlled*.
      - In React, when `<input />` is given a `value` attribute, the `<input />` becomes controlled because it stops using its own internal storage.
  - Mounting Lifecycle Methods
    - There are 3 categories of lifecycle methods: *mounting*, *updating*, and *unmounting*.
    - A component "mounts" when it renders for the first time and the *mounting lifecycle methods* get called.
    - When a component *mounts*, it automatically calls the following 3 mounting lifecycle methods in order:
      - `componentWillMount`
      - `render`
      - `componentDidMount`
    - Mounting lifecycle events only execute the first time that a component renders.
    - `componentWillMount`
      - gets called right *before* `render()` when a component renders for the first time.
    - `render`
      - called after `componentWillMount` and before `componentDidMount`
      - belongs to two categories: mounting lifecycle methods, and *updating lifecycle methods*
    - `componentDidMount`
      - gets called right *after* the HTML from `render()` has finished loading.
      - `componentDidMount` is useful for connecting a React app to external applications, such as web APIs or JS frameworks; also useful to place set timers using `setTimeOut()` or `setInterval`
  - Updating/Unmounting Lifecycle Methods
    - Updating: a component updates every time that it renders, *starting with the second render*. There are 5 updating lifecycle methods that are automatically called in order whenever a component instance *updates*:
      - `componentWillReceiveProps`
      - `shouldComponentUpdate`
      - `componentWillUpdate`
      - `render`
      - `componentDidUpdate`
  - [x] Complete Codecademy ReactJS: Part II
