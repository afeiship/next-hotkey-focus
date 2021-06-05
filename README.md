# next-hotkey-focus
> Manage elements focus by hotkey.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-hotkey-focus
```

## usage
```js
import '@jswork/next-hotkey-focus';

// Make sure selector elements are loaded.
window.addEventListener("DOMContentLoaded", () => {
  nx.hotkeyFocus({
    keys: ['cmd + k'], 
    selector:'input[data-hotkey-focus]',
    callback: (e) => {
      console.log('focued!');
    }
  })
})
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-hotkey-focus/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-hotkey-focus
[version-url]: https://npmjs.org/package/@jswork/next-hotkey-focus

[license-image]: https://img.shields.io/npm/l/@jswork/next-hotkey-focus
[license-url]: https://github.com/afeiship/next-hotkey-focus/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-hotkey-focus
[size-url]: https://github.com/afeiship/next-hotkey-focus/blob/master/dist/next-hotkey-focus.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-hotkey-focus
[download-url]: https://www.npmjs.com/package/@jswork/next-hotkey-focus
