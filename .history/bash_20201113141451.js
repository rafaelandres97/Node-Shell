process.stdout.write("prompt >");
process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  const commands = {
    pwd: process.cwd(),
  };
  if 
  process.stdout.write(`answer: ${process.cwd()}`);
  process.stdout.write("\nprompt >");
});
