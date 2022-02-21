# react-lifecycle-hooks

> 

[![NPM](https://img.shields.io/npm/v/react-use-lifecycle-hooks.svg)](https://www.npmjs.com/package/react-use-lifecycle-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @talsingh/react-lifehooks
```

## Usage

```jsx
import React, {useState} from 'react'
import {
  useComponentWillMount,
  useComponentDidMount,
  useComponentDidUpdate,
  useComponentWillUnmount
} from '@talsingh/react-lifehooks'

function Myform() {
  const [name, setName] = useState('Talvinder')
  const [age, setAge] = useState('20')

  useComponentWillMount(() => {
    console.log('component will mount')
  })

  useComponentDidMount(() => {
    console.log('component did mount')
  })

  useComponentDidUpdate(() => {
    console.log('component did update')
  })

  useComponentWillUnmount(() => {
    console.log('component will unmount')
  })

  const handleClick = (e) => {

  }
  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleAge = (e) => {
    setAge(e.target.value)
  }

  return (
    <div>
      <form onSubmit={(e) => handleClick(e)}>
        <input
          name='name'
          type='text'
          value={name}
          onChange={(e) => handleName(e)}
        />
        <input
          name='age'
          type='text'
          value={age}
          onChange={(e) => handleAge(e)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}
export default Myform

```

## License

MIT © [tal1992](https://github.com/tal1992)

---
