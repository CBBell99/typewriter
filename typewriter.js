const sentence = 'purple monkey dishwasher';
let count = 0;
let newSentence = sentence + '\n'
for (const char of newSentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, count)
  count += 50
}