# Node.js: Internal Working

## Overview

Node.js is an **open-source, cross-platform, server-side JavaScript runtime environment** designed for building scalable and high-performance applications. It is built on **Google Chrome’s V8 JavaScript engine**, which **compiles JavaScript directly into machine code** for fast execution.

At its core, Node.js leverages **libuv**, a multi-platform support library that provides an **event-driven, asynchronous, and non-blocking I/O model**. This enables Node.js to efficiently handle multiple concurrent operations, such as file system access, network requests, and database queries, without being blocked by slow operations.

JavaScript was always a client-side language until Node.js. Node enables JavaScript to be used for server-side development.

## Key Components of Node.js

### 1. V8 Engine

- Executes JavaScript by converting it to optimized machine code.
- Developed by Google and used in Chrome for high-speed JavaScript execution.

### 2. libuv

- Provides the event loop and asynchronous I/O operations.
- Handles filesystem, networking, and threading capabilities in a cross-platform manner.

### 3. Single-threaded Event Loop

- Uses **non-blocking I/O and asynchronous callbacks** to manage multiple requests efficiently.
- Eliminates the need for multiple threads by handling tasks asynchronously.

### 4. NPM (Node Package Manager)

- A vast ecosystem of reusable packages to extend Node.js functionality.
- Allows developers to easily manage dependencies and install third-party libraries.

## Node.js Modules

### CommonJS Module (CJS)

- Default module system in Node.js.
- **Synchronous** execution.
- Runs in **non-strict mode** by default.
- Uses `module.exports` and `require()`.

#### Example:

```javascript
module.exports = { key: "value" };
const abc = require("./abc");
```

### ES Module (ESM or MJS)

- Default module system in modern JavaScript frameworks (React, Angular, etc.).
- **Asynchronous** execution.
- Runs in **strict mode** by default.
- Uses `import` and `export`.

#### Example:

```javascript
// package.json
{
    "type": "module"
}

// Usage
import { func } from "./module.js";
export function func() {}
```

## Module Execution in Node.js

All the module code is wrapped inside a function and executed when required. This function is an **Immediately Invoked Function Expression (IIFE)**, which keeps variables and functions private.

- IIFE keeps variable and functions as private/safe
- If you wrapped code inside IIFE, it means it is a independent private code

- How are variable and function are private in different module?? => IIFE && require statement. require statement wrapping code inside iife.

- How do you get access to module.export => nodeJs, when you use module.export, the it wrapped inside IIFE like:

Example:

```javascript
(function (module, require) {
    // Module logic here
})(module, require);

(function (){}(
    //when you call require, it convert it to IIFE then give to V8 for run that chunks
))  // IIFE

function (){} // Anonymous function

function a(){} // Regular function
```

## The `globalThis` Object

- In browsers: `window === globalThis`.
- In Node.js: `global === globalThis`.
- Ensures a consistent global object across different environments.

* node repl (read evolution print loop)

## How Node.js Handles `require`

1. **Resolve** – Finds the module path.
2. **Load** – Reads and loads file contents.
3. **Compile** – Wraps code in an IIFE.
4. **Evaluate** – Executes the wrapped module.
5. **Cache** – Stores the module to prevent reloading.

## Synchronous vs Asynchronous Functions

- **Synchronous functions (`xyzSync`)** run in the V8 engine and can block the main thread.
- **Asynchronous functions** leverage libuv for non-blocking execution.

## When to Use Loops in Node.js

- **For Loop** – Best when the number of iterations is known.
- **While Loop** – Best when the number of iterations is unknown beforehand.

## Why Use Node.js?

✅ **High performance** due to V8 and event-driven architecture.
✅ **Scalability** through asynchronous, non-blocking operations.
✅ **Real-time capabilities** (e.g., chat applications, streaming).
✅ **Unified JavaScript stack** – Enables full-stack development with JavaScript.

---

Node.js combines the power of **V8 for execution speed** and **libuv for efficient asynchronous handling**, making it an excellent choice for modern web applications and scalable network services.

---

// Syntax error: not able to generate abstract tree in v8 (astexplorer.net)

v8 has interpreter name is ignition interpreter and compiler name is turbofan compiler.

v8 architecture:
code -> parsing -> ast -> ignition interpreter -> turbofan compiler -> machine/Byte code -> execution

parsing ->

1. lexical analysis (Tokenization)
   code -> tokens
2. syntax analysis (parsing)
   tokens -> AST (Abstract Syntax Tree(astexplorer.net))

when AST give code to interpreter, interpreter reading code line by line simultaneously start
converting it to byte code.
when ignition interpreter doing his job, it recognizes some code which is used a lot,
(i.e function.variable,peace/chunk of code which is used alot), so identifies the portion of
code which is executed again-2, then ignition interpreter tries to give that code to turbofan compiler.
so that we can compile and optimize that portion of code, so when ever it runs next time it executes very-2 fast.

ignition interpreter give portion of code to turbofan compiler, it know as `Hot code` .

ignition interpreter -> byte code -> execute
turbofan compiler -> optimized machine code -> execute.

Optimization: code -> parsing -> AST -> ignition interpreter -> turbofan compiler -> machine code -> execute.
De-optimization: code -> parsing -> AST -> ignition interpreter -> turbofan compiler -> machine code -> ignition interpreter -> byte code -> execute.

Inline caching -> inline caching optimizes dynamic language method/property lookups for faster execution.
Copy Elision -> Copy elision improves performance by avoiding redundant object copying.

Garbage Collection (https://v8.dev/blog/trash-talk):
The V8 heap is divided into two main groups: a young generation, which is further split into the nursery and intermediate sub-generations,
and an old generation. When objects are first created, they are placed in the nursery. If they survive the next garbage collection, they are moved to the intermediate sub-generation of the young generation. If they survive another garbage collection, they are moved into the old generation.

1. Orinoco
2. OilPan
3. Young Generation — Minor GC (Scavenger)
4. Old Generation — Major GC (Full Mark-Compact)
   Mark Sweep Algorithm

https://github.com/v8/v8/tree/master/test/cctest/interpreter/bytecode_expectations
https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick
eventloop code in libuv: https://github.com/libuv/libuv/blob/v1.x/src/unix/core.c#L427
libuv event loop: https://docs.libuv.org/en/v1.x/design.html


One cycle of event loo is knows as tick.
Timer (setTimeout/setInterval) -> Poll (event loo wait here while there is no event/thread are occupied and all files are read, socket are read,I/O operation are done here) -> check(setImmediate)-> close (socket close)

^                                        ^
|process.nextTick() -> promise callbacks | ==> it will call before every tick