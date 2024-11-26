import * as fs from "fs/promises";

//create
try {
  await fs.mkdir("C:\\Users\\shyam\\Documents\\nodejs\\courses", {
    recursive: true,
  });
  console.log("Folder created");
} catch (error) {
  console.log(error);
}

//read no.of files
try {
  const files = await fs.readdir("C:\\Users\\shyam\\Documents\\nodejs");
  for (const file of files) console.log(file);
} catch (error) {
  console.log(error);
}

//write file
await fs.writeFile("Readme.md", "Hello Shyam");

//Read file
const result = await fs.readFile("Readme.md", "utf-8");
console.log(result);

//Append data to file
await fs.appendFile("Readme.md", " Hello Yadla");

// Copy File
fs.copyFile("Readme.md", "info.txt");

// Get file information
const stats = fs.stat("info.txt");
console.log(stats.isDirectory());
console.log(stats.isFile());
console.log(stats);
