# June 5, 2014 Modules Breakout Session Notes


# WARNING: THESE NOTES DO NOT REFLECT TC39 CONSENSUS, ONLY THE DOCUMENTATION OF DISCUSSIONS THAT WILL BE USED AS RECOMMENDATIONS.



Jeff Morrison (JM), Caridy Patiño (CP), Yehuda Katz (YK), Guy Bedford (GB), Dave Herman (DH), Erik Arvidsson (EA), Reid Burke (RB), Eric Ferraiuolo (EF)

## Current Open Issues

[**ES6 Modules Bugs**][1]

## Discussion

The following is a summary of the discussion that took place in the Modules Breakout Session. The agenda was to have a high-fidelity discussion around some key issues currently faced by practitioners who are trying to build tools and use ES6 modules in ES5 environments. 

### Is `bar` hoisted in `export default function bar() {...}`?

CP, GB, EA, and EF were trying to understand the possible "dead zones" and execution order of cyclic modules. A key part of this is knowning whether default export functions are function declarations (hoisted) or function expressions (not hoisted).

DH: Yes it is hoisted. The spec. says the following:

```
export default [lookahead no in {function, class}] AssignmentExpression;
export default FunctionDeclaration
export default ClassDeclaration
```

**Resolution:**

When compiling a module with a default export function to ES5, the function should to be defined in the function declaration form so that it's hoisted.

### What is the execution context of a module (`this`)?

DH: It's the global object, and with Realms it's the realm's global object.

EF: Is there any other logical value for `this` inside a module?

CP: We need some way to access the module (and/or its metadata) itself, and be able to dynamically import other modules relative to the current module via the same loader.

CP: Instead of `this`, we could use `module` as an alternative.

YK: It will be problematic to reserve `module` because it's commonly used, e.g.; QUnit uses `module`.

EF: It would also mean that inside a module there's some magic `module` binding.

DH: That's what Node.js modules have.

EF: Sure, but if you look at the compiled Node.js module, it's wrapped in a function with `module` as one of its arguments. So it's not magic, it can be explained with JavaScript.

DH: But conceptually when writing a Node.js module you assume these bindings will be there, effectively by magic.

*...Discussion continued into the next question...*

### How do you dynamically load another module relative to the current module using the same loader as the current module?

CP, GB, and EF want to be able to dynamically load modules from within a module, using the same loader (which is unknown at development time).

EF: A concrete example is a SPA with an `app.js` module that does client-side routing and dynamically imports the `settings.js` module when the user navigates to `/settings/`. We want to make sure the `app` module can load the `settings` module via the same loader — which might not be the `System` loader.

*...Discussion continued into the next question...*

### How do you gain access to a module's metadata from within the module itself? e.g.; normalized `name`, `address`, etc.

These questions were leading towards a main issue: a module needs access to its own metadata, including the ability to dynamically load other modules relative to itself using the loader in which it was loaded.

EA: In Node.js you have access to this module metadata between the `module`, `exports`, and `require` bindings that Node passes into the module.

GB & CP: We can't assume the `System` loader was used to load a particular module, and we want to dynamically load more modules using that same loader. Currently we have no way of doing this.

DH & YK: We know this an issue, and we thought about making special syntax for it `this module` and `this loader`.

EF: I think this syntax will be very confusing for people.

DH & YK: Agreed. Ideally we don't add new syntax.

DH & YK: We should provide access to the loader on the module's metadata object.

EA & GB?: Should we add the loader's full map interface (`get()`, `set()`, `has()`, `delete()`)?

DH: I worry about the security of providing a module direct access to the loader. This is a highly-capability API.

EA: Agreed, mutation methods shouldn't be there; i.e., `set()` and `delete()`.

DH: Yeah, `get()`, `has()`, and `import()` can be there. All of which are closed-over the loader instance.

YK: I like this. Doing `this.import('../foo')` from within a module is nice. This is the de-sugaring of the declarative syntax.

*Everyone agrees this seems on the right track — having the module metadata object with these loader capabilities.*

GB || CP?: We also want to access things like `address` so a module can reflectively know its own URL.

**Resolution:**

Modules need to have reflective access to their own metadata. This module metadata object should also contain functions that can be used to dynamically load other module relative to the current module using the current loader.

Todo: Bikeshead this object: what properties it has, their names, etc.

### How do we access the global object within a module?

DH: We should standardize a way to access the global that doesn't require the `Function('return this')()` hack.

EA: Agreed, and `new Function()` won't work with CSP.

DH: If the module's execution context is something other than `this`, we need a way to access the global. Suggest: `Reflect.global`.

**Resolution:**

Add `Reflect.global`.

### Do we need the `module foo from "foo"` import syntax?

YK: The original reason for the `module` import syntax is for modules that have many exports, and not requiring the user to explicitly name all exports they intend to use. e.g.; take Node.js' `fs` module:

```js
module fs from "fs";

export function useLotsFileSystemAPIs() {
    // fs.lstatSync()
    // fs.readdirSync()
    // fs.rmdirSync()
    // fs.readFileSync()
    // fs.writeFileSync()
}
```

vs. needing to list all the named exports imported from `fs`:

```js
import {lstatSync, readdirSync, rmdirSync, readFileSync, writeFileSync} from "fs";

export function useLotsFileSystemAPIs() {
    // lstatSync()
    // readdirSync()
    // rmdirSync()
    // readFileSync()
    // writeFileSync()
}
```

YK: [summarized, cont.] But in practice, the `module` keyword confused people and they weren't sure when then use `import` to get the default export or `module` to get the module object with all its exports.

**Resolution:**

Remove the `module foo from "foo"` import syntax.

The `module` keyword causes confusion for users; people were confused if `module` can be used to define a module. Consider the following:

```js
module fooModule from "foo";
import fooDefault from "foo";
```

The two statements above do different things. The `module` form creates a binding to the module object from which all of its exports can be accessed. Whereas the `import` form creates a binding to the module's default export.

To emulate what the declarative `module` import syntax provided, a user can use the dynamic `this.get()` API (where `this` is the module metadata object described above):

```js
import "foo";
let foo = this.get("foo");
```

## Tasks

* Open bug to remove `module foo from "foo"` import syntax.

* Open bug to add `Reflect.global` to spec.

* Settle on an execution context (`this`) inside a module. Meta module object, [realm] global, `undefined`?

* If `this` inside a module isn't the meta module object, then determine how a module can reflectively gain access to its metadata.

* If the module's execution context is changed, determine the way to access the global object from within a module. `Reflect.global`?


[1]: https://bugs.ecmascript.org/buglist.cgi?product=Draft%20for%206th%20Edition&component=Modules&resolution=---

[2]: https://bugs.ecmascript.org/show_bug.cgi?id=2659
