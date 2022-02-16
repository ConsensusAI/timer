const args = process.argv.slice(2);
// Check if arguments are greater than zero and numbers
// Convert string inputs to integers
const validArgs = [];
for (let items of args) {
  let integerTime = Number(items);
  if (integerTime > 0 && !isNaN(integerTime)) {
    validArgs.push(integerTime);
  }
}
// Establish longest time input so new line can occur at the end
let longest = validArgs[0];
for (let time of validArgs) {
  if (time > longest) {
    longest = time;
  }
  setTimeout(() => {
    process.stdout.write("."); // Timer output
  }, time * 1000);
  if (time === validArgs[validArgs.length - 1]) {
    setTimeout(() => {
      process.stdout.write("\n");
    }, longest * 1000 + 500); // Cause new line after end of timers
  }
}
