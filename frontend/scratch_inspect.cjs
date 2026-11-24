const fs = require('fs');
const content = fs.readFileSync('src/index.css', 'utf8');
const lines = content.split('\n');

console.log('Total lines:', lines.length);

lines.forEach((line, index) => {
  if (line.includes('===') || line.includes('Start') || line.includes('End') || line.includes('/* =') || line.includes('Mayuri')) {
    const trimmed = line.trim();
    if (trimmed.length > 3 && !trimmed.startsWith('===')) {
      console.log(`${index + 1}: ${trimmed}`);
    }
  }
});
