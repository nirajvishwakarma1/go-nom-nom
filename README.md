# Namaste-React

## Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image optimization
- Minification
- Bundling
- Compressing
- Consistent Hashing
- Code spliting
- Differencial Bundling
- Diagnostic
- Error Handling
- HTTPS hosting in development
- Tree Shaking - remove unused code
- Different dev and prod bundles

Types of Export/Import

- default:

  - export default Component;
  - import Component from "path";

- named:
  - export const Component;
  - import { Component } from "path";

## React Hooks

(Normal JS utility functions)

- useState() - Super Powerful State Variable in React
- useEffect()

_Whenever a state variable is changes React re-render the component_

## 2 types of routing in web apps

1. **Client side routing**: page does not reload
2. **Server side routing**: page reload

- Chunking
- code spliting
- dynamic bundling
- lazy loading
- dynamic import
- all above are different names for the same things

### Higher Order Components:

    Higher order component is a function which takes a component as input and return enhanced version of the component.

```js
const HigherOrderComponent = (Component) => {
  return (props) => {
    return (
      <div>
        <label>propmoted</label>
        <Component {...props} />
      </div>
    );
  };
};
```

### ToDo

- State lifting, controlled and uncontrolled component
- build accordian feature
