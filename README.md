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
#### The first parameter obj

All functions have the same first parameter `obj` in their declarations / calls. It names the obj containing the variable you want to watch ( you can put anything you want it's not important, it's just used to ouput `obj.variable` in the console so if you put `somethingSilly` it will output `somethingSilly.variable` )

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
