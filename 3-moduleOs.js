const sayhi = require("./2-module");
const name = require("./2-module");
const os = require("os");
const path = require("path");
const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync(
  "./docs/node-express-course/01-node-tutorial/content/first.txt",
  "utf-8"
);
const seconde = readFileSync(
  "./docs/node-express-course/01-node-tutorial/content/second.txt",
  "ascii"
);
console.log(first);
console.log(seconde);
writeFileSync(
  "./docs/node-express-course/01-node-tutorial/content/result-sync.txt",
  "sofiene chouchene qsd",
  { flag: "a" }
);

