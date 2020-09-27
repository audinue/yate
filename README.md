# yate

Yet another template engine for JavaScript.

## Install

```html
<script src="https://cdn.jsdelivr.net/gh/audinue/yate@1.1/yate.js"></script>
```

## Usage

```js
const render = yate`
<ul>
for (let i = 0; i < count; i++)
  <li>Item {i + 1}</li>
end
</ul>
`
console.log(render({ count: 3 }))
/*
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
*/
```
