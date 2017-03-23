# react-auto-text

[![npm](https://img.shields.io/npm/v/react-auto-text.svg?style=flat)](https://www.npmjs.com/package/react-auto-text)

AutoText is a React component that allows you to have dynamic text sizing to fit inside of a component with a set height.

## Install

```bash
$ npm install --save react-auto-text
```

## Usage

```js
import React from 'react';
import AutoText from 'react-auto-text';

function MyComponent() {
  return (
    <AutoText
      maxHeight={200}
      maxFontSize={20}
      minFontSize={10}
      onChange={fontSize => console.log(fontSize)}>
        Bacon ipsum dolor amet filet mignon salami andouille corned beef.
    </AutoText>
  );
}
```

## API

### `<AutoText>`

* `maxHeight` (number) Max height of the container you wish to fill. _Default `100`_
* `maxFontSize` (number) Maximum font size in pixels. _Default `20`_
* `minFontSize` (number) Minimum font size in pixels. _Default `10`_

## License

[MIT](/license)