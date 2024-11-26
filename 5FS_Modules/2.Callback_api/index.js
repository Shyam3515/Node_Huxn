// File System - Callback API
import * as fs from "fs";

// Creating Directory
fs.mkdir("C:\\Users\\shyam\\Documents\\nodejs\\filesystem", (error) => {
  if (error) throw error;
  console.log("Directory Created...");
});
