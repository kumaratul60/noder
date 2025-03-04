const crypto = require("crypto");
const fs = require("fs");

/*
Libuv thread pool size is 4 by default, if more things come then they will wait for existing thread pull execution.

can we change the libuv thread pool size: yes by doing
process.env.UV_THREADPOOL_SIZE = 2;


crypto.pbkdf2 (Password-Based Key Derivation Function 2) is used to derive a cryptographic key from a password. It's commonly used for securely hashing passwords before storing them.
"password": The input password that needs to be hashed.
"salt": A unique  value added to the password to make it more secure.
"iterations (500000)": The number of iterations to perform. Higher values make it more secure but slower.
"keylen (512)": The length of the derived key in bytes.
"digest": The hashing algorithm to use.
(err, derivedKey) => A function that runs once hashing is complete.


//
scalable I/O event notification mechanism
epoll (linux)
kqueue (mac)
IOCP (windows)

epoll uses red-black tree
setTimeout => timer s queue -> use DSA is min heap: min heap is a self balancing tree, on the top of the tree there is the always the timer which is going to expire very soon.
the timer going to expire latest is there on the top of the tree


node js naming is essence: in essence:  https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick#why-use-processnexttick


One cycle of event loo is knows as tick

*/

// synchronous
// crypto.pbkdf2Sync("password", "salt", 100000, 512, "sha512");
// console.log("1 crypto.pbkdf2Sync done ");/

// process.env.UV_THREADPOOL_SIZE = 8;
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("1 crypto.pbkdf2 done ");
  //   console.log("Derived key:", derivedKey.toString("hex")); // Convert Buffer to hex : Derived key: e729d0...a8f35b
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("2 crypto.pbkdf2 done ");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("3 crypto.pbkdf2 done ");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("4 crypto.pbkdf2 done ");
});
crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("5 crypto.pbkdf2 done ");
});

crypto.pbkdf2("password", "salt", 500000, 50, "sha512", (err, key) => {
  console.log("6 crypto.pbkdf2 done ");
});
// synchronous
// fs.readFileSync("./file.text", "utf8", () => {
//     console.log("1 fs.readFileSync done ");
// })

// fs.readFile("./file.text", "utf8", () => {
//   console.log("1 fs.readFileSync done ");
// });
