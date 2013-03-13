
Justification: the usefulness of the name of function is not just for debugging. It is useful in the same ways that property names as strings are such as dispatching by name or assigning by name.

1. Every function has an own "name" property, and this property is always a string (unless the user specifically decides to violate this norm).
2. This name property is initialized with the value that makes sense from static semantics.
3. Allow predefined names to be altered in cases where it makes sense.

Semantics:

The baseline descriptor for every function is the 'name' property defined as
{ value: "",
  writable: true,
  enumerable: false,
  configurable: false }

For FunctionDeclarations, named FunctionExpressions, MethodDefinitions, or accessor Properties then the function's "name" property is set to the given identifier. 

In the case of the constructor method of classes, the class
name is used instead. 

In the case of accessors, 'get' or 'set ' is included. 

The "name" property is set to non-writable. 

Function.prototype's name is also non-writable.

Anonymous FunctionExpressions and ArrowFunctionExpressions assigned in a VariableDeclaration or ObjectExpression are given the name of the variable or property they are assigned to and the name remains writable. 

Anonymous ClassExpressions follow the same semantics, with the name being used for the constructor method.

Whenever a function's name is defined by a Symbol instead of a regular identifier then the name is the result of ToString(symbol).

The name property should (probably) not have any reflection on the output of Function.prototype.toString.