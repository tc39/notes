

Map/Set comparator…

If a custom comparator is desired, provide as second argument to constructor, but **REQUIRES** first arg (allowed: iterable, null, undefined):

// Constructor parameters and default values.
new Map(initial = undefined, comparator = undefined)

// No initializer, uses default (Object.is)
let map = new Map(); 

// Initializer, uses default (Object.is)
let map = new Map([ [k, v] ]);

// Initializer, Custom comparator
let map = new Map([ [k, v] ], function(a, b) { 
	return a == b; 
});


Updates to Map( iterable = undefined )… 

4.	If iterable is not present, let iterable be undefined.
		5.  If comparator is not present, let comparator be "SameValue".
6.	Let status be the result of MapInitialisation with map, iterable and comparator as arguments.

MapInitialisation updated to create a [[Comparator]] internal data property whose value is the value of the comparator argument.

Update to Map.prototype.delete
		5.  a. If [[Comparator]](p.[[key]], key), then

Update to Map.prototype.get
		5.  a. If [[Comparator]](p.[[key]], key), then

Update to Map.prototype.has
		5.  a. If [[Comparator]](p.[[key]], key), then



