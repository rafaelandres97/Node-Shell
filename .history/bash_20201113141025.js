process.stdout.write("prompt >");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  process.stdout.write(cmd)
  process.stdout.write(`Current directory: ${process.cwd()}`);
  process.stdout.write("\nprompt >");
});
