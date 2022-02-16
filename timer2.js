const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding("utf8");
let delay;
process.stdout.write("Input seconds to timer or press b to beep.\n");
stdin.on("data", (input) => {
  if (input === "\u0003") {
    process.stdout.write("Thanks!");
    process.exit();
  }

  if (input >= 1 && input <= 9) {
    delay = input * 1000;
    process.stdout.write(`Setting timer for ${input} seconds...\n`);
  }

  if (input === "b") delay = 0;

  setTimeout(() => {
    process.stdout.write(".\n");
    process.exit();
  }, delay);
});
