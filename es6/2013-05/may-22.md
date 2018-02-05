# May 22, 2013 Meeting Notes
-----

John Neumann (JN), Allen Wirfs-Brock (AWB), Eric Ferraiuolo (EF), Erik Arvidsson (EA), Luke Hoban (LH), Doug Crockford (DC), Yehuda Katz (YK), Brendan Eich (BE), Sam Tobin-Hochstadt (STH), Alex Russell (AR), Dave Herman (DH), Bernd Mathiske (BM), Andreas Rossberg (ARB), Mark S. Miller (MM), Tom Van-Cutsem (TVC), István Sebestyén (IS), Jasvir Naga (JNA)

-----

## 4.16 Spec update

http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts

YK: `ToPositiveInteger` is needed by JSIDL

AI(YK+AWB): Put an algorithm in the spec that DOM can use so that we get the same behavior in JS and DOM.

6 General implementation experiences

ARB: We started implementing generators but things are pretty smooth.

BE: Doing modules at the moment.

AWB: Bunch of bug fixes in the spec related to classes.


## 4.9 Template Strings (Template Literals)

MM: Suggests status quo.

AR: _Objects_

MM: Controversy related to tag-less templates. Alternatives include making tag-less templates an error, delayed evaluation (contextually provided)

AR: Econics: naked interpolation is too attractive. Should always have a tag to encourage users to think about which behavior is correct.

YK: I cannot support Alex's proposal.

STH: What would the name of this tag be?

AR: Something that is imported from a module.

STH: Concerned about short names and conflicts.

YK: People will just use 's' without thinking.

YK: People should use HTML templating engines.

DC: Alex's testimony about application developer feedback is relevant.

LH: it sounded like Google engineers were using a template system

EA: Correct.

MM: Does anyone prefer taking out TS if they don't get tag-less TS?

Everyone: Agrees that it is better to require tag than to remove TS from ES6.

AR: Strings are always used later in some context. Communicating the intent

AWB: String concat vs string interpolation have the same issue.

LH: Assumes that maybe only 20% of the uses of TS are susceptible to XSS

MM: Removing tag-less does not reduce XSS because people will just use
```js
s`...`
```
TS helps people transition to a better world. Once they have have a TS it will be easy to add  an html tag at the front as needed.

ST: It will be painful to import String raw and alias that to s.

MM: Maybe put tag-less in appendix?  Withdrawn idea because no one likes it.

YK: You should not have use string based APIs.

AR: Willing to abstain but "Y'all are making a big mess"

BM: Half convinced by Alex.

LH: Different code bases will use different tags for normal string interpolation so moving between code bases will be hard to.

AR: That is a good thing. Forces people to think.

MM: Template strings in E.

STH: Lots of contexts where XSS is not an issue.

BM: More ways to XSS is a bad thing.

BE: if people have to import s then the economics change and people will stick to +

#### Consensus/Resolution:

- AR and BM sustains.
- Continue with the status quo (tag-less TS is supported)


## JSON

DC: IETF wants to change JSON

MM: The 2 documents should have exactly the same text except for boilerplate.

IS: Should it be done in TC39?

DC: Most of the work will be on the mailing lists

AWB: Who will be the editor?

DC: Hopes they (IETF) will provide an editor.

JN: Should this be fast tracked to ISO?

DC: That makes sense.

JN: How long do you expect this to take?

DC: Has taken a long time to coordinate and get started. 5.1 specs the 2 functions that uses the JSON format.


## 4.10 Modules

STH: Progress since last meeting. Discuss "module naming", "naming standard modules".
http://wiki.ecmascript.org/doku.php?id=harmony:modules
Wiki is up to date with the current proposal. Spec is "wiki complete".

Jason Orendorff of Mozilla has worked on flushing out semantic issues. Moz is implementing parsing of modules.

STH: Syntax: Made a couple of changes.

A. To support anonymous exports

```js
export default expr;

import $ from "jquery";  // imports default anonymous export
```

If there is no default then the above is an error

```js
import {ajax} from "jquery";

import {ajax as A} from "jquery";
```

to reduce confusion and to make it clear that this is not destructuring.

```js
module fs from "js/fs"
```

* fs is a module instance object

The following is not valid:

```js
import {...} from fs;  // SyntaxError
```

Renaming on export:

```js
let foo = 13;
export { foo as bar };
export { foo };
```

The following is not valid:

```js
export foo;
```

STH: The only evaluation here is "13". The rest are just bindings that are shared with the outside/module importer.

MM: Bad idea to allow external modules to assign to imports.

DH: Imported bindings are read only to the importer.

AWB: This is new semantics to the language. Is there a list of these new semantics modules introduce?

AWB: Is there a way to get the default export from the instance module obejct.

STH: There will be a well known symbol name to get to it.

AWB: Does module instance objects inherit from Object.prototype.

DH: No. Because we do not want any pollution.

JNA: Is it an error to assign to an imported binding?

```js
import {ajax} from "jquery";
ajax = 14;  // Error
```

AR: What is the reason for not extending `Object.prototype` or some other
object?

YK: To prevent people from expecting `toString` to be there (???)

DH: `fs.readFile` We don't want to statically check this deeply inside an expression.

```js
fs.toString
```

THS: The plan is to allow the above to be a static error in the future.

DH: To keep things clean.

AWB: Concerned about the dot operator

ARB: Don't want less checking if you do not use import.

DH: Do not want refactoring hazards.

ARB: This only affect the static semantics.

AWB: Can you use square bracket?

STH: Square bracket is dynamic.

AR: This is only a static check that is lost. At runtime there will still be errors.

LH: Concerned about default export. Now people will have to decide which approach to use.

STH: This is already the case in Node.js today.

LH: Today you might get any object, it might be callable with properties.

```js
var fs = require("fs");  // module instance
var glob = require("glob");  // function with properties
var parse = require("parse");  // function

module fs from "fs";
import glob from "glob";
import {sync} from "glob";
import parse from "parse";
```

Lots of discussion...

```js
import {sync} from "glob";
```

_alt_

```js
import glob from "glob";
var {sync} = glob;
import {ajax} from "jquery";
```

LH: Prefers `export =` and lose static checking when people opt in to single anonymous export.

STH/YK: We already agreed that we want static checking.

LH: Even for new things being built, this is causing a confusion.

AWB: It is unclear when and what you want to export as the default export.

BM: Wants

```js
import default $ from "jquery"
```
...to ensure that people have to be explicit about what they import.

DH: This is just syntax and we are wasting time "bikeshedding"

AWB: What is the best practice? Is there a single module containing Map, Set & WeakMap or...

YK: WeakMap should be its own import:

```js
import WeakMap from "collections/WeakMap";
```

BE: We have to pay attention to what Node/AMD do today.

YK: AMD tries to make modules small to reduced byte size of the dependencies.

STH: And now to semantics
https://github.com/jorendorff/js-loaders/blob/master/browser-loader.js

Major things that changed. Use options object more consistently. The wiki page is up to date. Need to decide whether the browser loader is in the appendix or if it is in some w3c spec. Want core language semantics to treat the names as strings, not the semantics of these strings. Bulk loading. One HTTP request to load multiple modules. Possible to implement. Create fecth hook. Stores module notations in a side table. In the xhr response, split the result and call the different fulfill hooks.

EF: Sounds like what we do today in YUI loaders. How would you write the HTML?

DH: Initial script tag with configuration. Second script tag as usual. Alt 2 is to have configuration and dynamic module load in the same script block.

```html
<script>
ondemand
</script>
<script src="main.js" async></script>
```

alt 2

```html
<script>
ondemand
System.require("main.js", function() { .... });
</script>
```

DH: script[async] today have to use an external src.

STH: Naming and declarations of modules.

ARB: Presenting slides...

AWB: The rate that internal vs external names changes is very different.

STH:

```js
module "m" { ... }
module "n" {
  import x from "m";
  ...// this part is not executed.
}
import x from "m";
```

STH: Configuration step is mostly about other people's code.

```html
<script>
module "m" { ... }
module "n" {
  import m from "m";
  function f() {
    Loader.eval("import m from 'n'");
  }
}
</script>
```

`m` is fixed at compile time

ARB: Not opposed to logical modules. Wants both lexical and logical

DH: Not opposed to lexical modules.

YK: Too late to work out lexical modules for ES6.

ARB: If we wait we will have redundancy.

YK: Want declarative form to be able to prefetch etc.

BE: I want lexical modules (in the future) but logical modules are easier to use.

ARB: Since I don't seem to be able to convince anyone I'm going to drop this

ARB: For the record. Major concern about the global registry becoming the new global object.

#### Consensus/Resolution:

- Move along with Dave and Sam's proposal.
- Work on lexical modules for ES7
