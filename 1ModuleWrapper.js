console.log("Hello NodeJs");
(function(exports,require,module,__filename,__dirname){
    console.log("IIFE");
})();
console.log("exports:", exports);
console.log("require:", require);
console.log("module:", module);
console.log("__filename:", __filename);
console.log("__dirname:", __dirname);