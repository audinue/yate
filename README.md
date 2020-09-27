# yate

Yet anothe template engine for JavaScript.

## Install

```html
<script src="https://cdn.jsdelivr.net/gh/audinue/yate/yate.js"></script>
```

## Usage

```js
const render = yate(`
<ul>
for (var i = 0; i < count; i++)
  <li>Item {i + 1}</li>
end
</ul>
`)
console.log(render({ count: 3 }))
/*
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
*/
```