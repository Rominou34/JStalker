/*
 * object.watch polyfill
 *
 * 2016-03-25
 *
 * By Romain Arnaud, http://romainarnaud.fr
 * Improved version of the original script from Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*
* Object.watch()
* Writes in console log each time the watched variable is changed
*/
if (!Object.prototype.watch) {
	Object.defineProperty(Object.prototype, "watch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (ob, prop) {
			var
				obj = ob
			, oldval = this[prop]
			, newval = oldval
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
        newval = val;
        console.log(">>> JStalker.watch()");
        if(arguments.callee.caller != null) {
          console.log("> Called by function " + arguments.callee.caller.name + "()");
        }
				console.log("- " + obj + '.' + prop + " changed: " + oldval + " -> " + newval);
			}
			;

			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}

/*
* Object.isEqual()
* Writes in console log when the variable is equal to a given value
*/
if (!Object.prototype.isEqual) {
	Object.defineProperty(Object.prototype, "isEqual", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (ob, prop, ve) {
			var
				obj = ob
			, oldval = this[prop]
			, newval = oldval
      , verif = ve
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
        newval = val;
        if(newval == verif) {
          console.log(">>> JStalker.isEqual()");
          if(arguments.callee.caller != null) {
            console.log("> Called by function " + arguments.callee.caller.name);
          }
          console.log("- " + obj + "." + prop + " is equal to " + verif);
        }
			}
			;

			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}

/*
* Object.checknull()
* Writes in console log each time a variable becomes null / undefined
*/
if (!Object.prototype.checkNull) {
	Object.defineProperty(Object.prototype, "isNull", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (ob, prop) {
			var
				obj = ob
			, oldval = this[prop]
			, newval = oldval
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
        newval = val;
        if(newval == undefined || newval == null) {
          console.log(">>> JStalker.isNull()");
          if(arguments.callee.caller != null) {
            console.log("> Called by function " + arguments.callee.caller.name);
          }
          console.log("- " + obj + "." + prop + " is " + newval);
        }
			}
			;

			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}

/*
* Object.isInRange()
* Writes in console log when a number is inside the given range
*/
if (!Object.prototype.isInRange) {
	Object.defineProperty(Object.prototype, "isInRange", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (ob, prop, mi, ma) {
			var
				obj = ob
			, oldval = this[prop]
			, newval = oldval
      , min = mi
      , max = ma
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
        newval = val;
        if(newval <= max && newval >= min) {
          console.log(">>> JStalker.isInRange()");
          if(arguments.callee.caller != null) {
            console.log("> Called by function " + arguments.callee.caller.name);
          }
          console.log("- " + obj + "." + prop + " is between "
          + min + " and " + max + " ( Value: " + newval + " )");
        }
			}
			;

			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}

/*
* Object.isOutOfRange()
* Writes in console log when a number is out of the given range
*/
if (!Object.prototype.isOutOfRange) {
	Object.defineProperty(Object.prototype, "isOutOfRange", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (ob, prop, mi, ma) {
			var
				obj = ob
			, oldval = this[prop]
			, newval = oldval
      , min = mi
      , max = ma
			, getter = function () {
				return newval;
			}
			, setter = function (val) {
				oldval = newval;
        newval = val;
        if(newval > max || newval < min) {
          console.log(">>> JStalker.isOutOfRange()");
          if(arguments.callee.caller != null) {
            console.log("> Called by function " + arguments.callee.caller.name);
          }
          console.log("- " + obj + "." + prop + " is outside of the range [ "
          + min + " - " + max + " ] Value: " + newval);
        }
			}
			;

			if (delete this[prop]) { // can't watch constants
				Object.defineProperty(this, prop, {
					  get: getter
					, set: setter
					, enumerable: true
					, configurable: true
				});
			}
		}
	});
}

/*
* Object.unwatch()
* Unwatches the current variable
*/
if (!Object.prototype.unwatch) {
	Object.defineProperty(Object.prototype, "unwatch", {
		  enumerable: false
		, configurable: true
		, writable: false
		, value: function (prop) {
			var val = this[prop];
			delete this[prop]; // remove accessors
			this[prop] = val;
		}
	});
}
