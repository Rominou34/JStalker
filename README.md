# JStalker

This script is an improvement of [Eligrey's awesome Object.watch().js script](https://gist.github.com/eligrey/384583)

Basically, he did all the hard work, I forked the script and made it more good-looking with more functions, but still props to him, I would never do this alone because I'm still pretty much a newbie

## Installation

`<script src="jstalker.js"></script>` at the end of your HTML and you're ready to go !!

## Functions

All the functions are defined as properties of `Object`, so you just call them from your object like this: `obj.function(args)`

All variable changes called from inside a function will output the calling function.

**Example:**

```js
var obj = {id: 5};
obj.watch('obj','id');
function testFunc() {
  obj.id = 12;
}
```

will output
```
>>> JStalker.watch()
> Called by function testFunc()
- obj.id changed: 5 -> 12
```

#### `obj.watch(id)`

This function will watch the specified variable from the object and notify you of each change.

**Example**

```js
var obj = { val1: 5, val2: 7};
obj.watch('obj','val1');
obj.val1 = 6; // will trigger the message here
obj.val2 = 10; // val 2 not watched so will not trigger anything
```

will output

```
>>> JStalker.watch()
- obj.val1 changed: 5 -> 6
```

### `obj.isEqual()`
