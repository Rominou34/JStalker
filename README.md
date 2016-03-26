# JStalker

This script is an improvement of [Eligrey's awesome Object.watch().js script](https://gist.github.com/eligrey/384583)

Basically, he did all the hard work, I forked the script and made it more good-looking with more functions, but still props to him, I would never do this alone because I'm still pretty much a newbie

## Installation

`<script src="jstalker.js"></script>` at the end of your HTML and you're ready to go !!

## Getting started

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

**Note:** This won't work if you declare your function like this:

```js
var testFunc = function() {
  obj.id = 12;
}
```

#### The first parameter obj

All functions have the same first parameter `obj` in their declarations / calls. It names the obj containing the variable you want to watch ( you can put anything you want it's not important, it's just used to ouput `obj.variable` in the console so if you put `somethingSilly` it will output `somethingSilly.variable` )

#### Important note

Each of these functions are actually Object properties redefining the `set()` function to trigger a message if you modify the value of the specified variable.

Because of this, **you can't apply multiple stalkers to a single variable** because you would then redefine the `set()` function each time, and so only the last one will actually work.

In short,

```js
var obj = {n: 5};
obj.watch('obj','n');
obj.isEqual('obj','n',8);
obj.isNull('obj','n');
```

is equal to

```js
obj.isNull('obj','n');
```

## Functions

### `obj.watch(obj, var)`


**Parameters**

* `obj`: [See here](#the-first-parameter-obj)
* `var`: The variable you want to stalk

This function will output a message in the console each time the value of the specified variable changes

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

### `obj.isEqual(obj, var, val)`

**Parameters**

* `obj`: [See here](#the-first-parameter-obj)
* `var`: The variable you want to stalk
* `val`: The triggering value

The function will output a message in the console when the specified variable is equal to the given value

**Example**

```js
var obj = {var: 1, msg: 'Hi'};
obj.isEqual('obj','msg','Hello world');
obj.msg = 'Hello guys';
obj.msg = 'Hello world'; // Will trigger the output
obj.msg = 'Hi bro';
```

will output

```
>>> JStalker.isEqual()
- obj.msg is equal to Hello world
```

### `obj.isNull(obj, var)`

**Parameters**

* `obj`: [See here](#the-first-parameter-obj)
* `var`: The variable you want to stalk

The function will output a message in the console when the specified variable is equal to `undefined` or `null`

**Example**

```js
var obj = {n: 5};
obj.isNull('obj','n');
obj.n = null; // Will trigger a message
obj.n = undefined; // Will also trigger a message
```

will output

```
>>> JStalker.isNull()
- obj.n is null
>>> JStalker.isNull()
- obj.n is undefined
```

### `obj.isInRange(obj, var, min, max)`

**Parameters**

* `obj`: [See here](#the-first-parameter-obj)
* `var`: The variable you want to stalk
* `min`: The minimum value of the range
* `max`: The maximum value of the range

The function will output a message if the specified variable is inside the given range

**Example**

```js
var obj = {r: 7};
obj.isInRange('obj','r',10,20);
obj.r = 8;
obj.r = 15; // Will trigger a message
```

will output

```
>>> JStalker.isInRange()
- obj.r is between 10 and 20 ( Value: 15 )
```

### `obj.isOutOfRange(obj, var, min, max)`

**Parameters**

* `obj`: [See here](#the-first-parameter-obj)
* `var`: The variable you want to stalk
* `min`: The minimum value of the range
* `max`: The maximum value of the range

The nemesis of `obj.isInRange()`, this function will output a message if the specified variable is outside of the given range

**Example**

```js
var obj = {s: 25};
obj.isOutOfRange('obj','s',10,20);
obj.s = 8; // Will trigger a message
obj.s = 15;
obj.s = 22; // Will also trigger a message
```

will output

```
>>> JStalker.isOutOfRange()
- obj.s is outside of the range [ 10 - 20 ] Value: 8
>>> JStalker.isOutOfRange()
- obj.s is outside of the range [ 10 - 20 ] Value: 22
```
