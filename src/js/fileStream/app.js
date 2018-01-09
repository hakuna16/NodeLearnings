console.log("File Name " + __filename);
console.log("Location " + __dirname);

console.log("Path is same as the current location as " + process.cwd());
try {
  process.chdir("/");
}
catch (exception) {
  console.error("child directory" + exception.message);
}
console.log("current working directory" + process.cwd());
