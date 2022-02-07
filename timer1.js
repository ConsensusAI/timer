const args = process.argv.slice(2);
const validArgs = [];
for (items of args) {
  let integerTime = Number(items);
  if (integerTime > 0 && !(isNaN(integerTime))) {
    validArgs.push(integerTime);
  }
};
let longest = validArgs[0];
for (let time of validArgs) {
    if (time > longest) {
      longest = time;
    }
    setTimeout(() => {
      process.stdout.write('.');
    }, time * 1000);
    if (time === validArgs[validArgs.length - 1]) {
    setTimeout(() => {
      process.stdout.write('\n');
    }, longest * 1000 + 500);
  }
};