// The path module provides utilities for working with file and directory paths.
const path = require("path");

//basename
console.log(path.basename("c:\\nodejs\\app.js"));

//omit extension
console.log(path.basename("c:\\nodejs\\app.js", ".js"));

//dirname
console.log(path.dirname("c:\\nodejs\\app.js"));

//extensionName
console.log(path.extname("c:\\nodejs\\app.js"));

//join
console.log(path.join("c:\\nodejs", "app.js"));

//GO level up
console.log(path.dirname("c:\\nodejs\\app.js", ".."));
console.log(path.join("c:\\nodejs", "app.js"));

// Go Up a level ✅
console.log(
  path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..")
);
//omits last but one
console.log(
  path.join("/c:", "huxn-webdev", "course", "golang", "structs", "..", "..")
);

// Normalize ✅
console.log(path.normalize("c:\\courses\\\\redux-course\\"));
console.log(
  path.normalize("c:\\courses\\\\redux-course\\store\\\features\\..")
);

//Parse
console.log(path.parse('c:\\courses\\redux-course\\"'));

//cwd
console.log(path.join(process.cwd()));
