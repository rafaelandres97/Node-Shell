process.stdout.write("prompt >");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === pwd) cmd = process.cwd();
  process.stdout.write(`Current directory: ${process.cwd()}`);
  process.stdout.write("\nprompt >");
});
