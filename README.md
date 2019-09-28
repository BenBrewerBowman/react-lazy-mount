# react-lazy-mount

> Lazily mount react components to render after an initial condition is met.

[![NPM](https://img.shields.io/npm/v/react-lazy-mount.svg)](https://www.npmjs.com/package/react-lazy-mount) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
[![Build Status](https://travis-ci.org/BenBrewerBowman/react-lazy-mount.svg?branch=master)](https://travis-ci.org/BenBrewerBowman/react-lazy-mount)

## Install

```bash
npm install --save react-lazy-mount
or 
yarn add react-lazy-mount
```

## Idea 

Sometimes you don't want to load something until an initial condition is met. If you have an expensive component that is making api calls, or is rendering lots of children, initial and frequent mounting can hinder performance. `LazyMount` can help improve performance by mounting components based on an initial condition. It's like lazy loading, but instead of waiting for an initial render to load the module, it is waiting for an initial truthy conditional in order to render JSX.

#### Simple Example
```tsx
import React from 'react';
import LazyMount from 'react-lazy-mount';

export const Example = () => {
  const [state, setState] = useState(false);

  return (
    // once trigger prop becomes "true" for the first time, 
    // the children props are mounted and will stay mounted 
    // regardless of state changes.
    <LazyMount trigger={state} >
      <div >I'm mounted</div>
    </LazyMount>
  );
};
```

In the above example, `<div >I'm mounted</div>` is only rendered after the state becomes true for the first time. If the state becomes false, `LazyMount` will still render the children. It waits for the first `true` value of the trigger, and then mounts the children.

#### Coupled with lazy loading
```tsx
import React from 'react';
import LazyMount from 'react-lazy-mount';
const MyComponent = React.lazy(() => import('./MyComponent'));

export const Example = () => {
  const [state, setState] = useState(false);

  return (
    // once trigger prop becomes "true" for the first time, 
    // mycomponent will be lazy loaded, then mounted
    <LazyMount trigger={state} >
      // I'm optional
      <Suspense fallback={...} >
        <MyComponent />
      </Suspense>
    </LazyMount>
  );
};
```

Lazy mounting can be coupled with lazy loading to wait for a condition to be met in order to both load the module and render the component.

| Props | Description |
| ----------- | ----------- |
| trigger | `Boolean` that once set to true the first time, will render the `children` props regardless of  |
| children | `ReactNode` component(s) to lazily mount once the trigger becomes true |

## License

MIT © [BenBrewerBowman](https://github.com/BenBrewerBowman)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
