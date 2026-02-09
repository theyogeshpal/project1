const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '..', 'src', 'components', 'Navbar.jsx');
const src = fs.readFileSync(file, 'utf8');
const re = /<([A-Za-z0-9-]+)([^>]*)>|<\/([A-Za-z0-9-]+)>|(<\/?>)|(<>?)|<\/>/g;
let stack = [];
const selfClosing = /\/(?:\s*)>$/;
const tagRe = /<\/?([A-Za-z0-9-]+)[^>]*>/g;
let match;
while ((match = tagRe.exec(src)) !== null) {
  const raw = match[0];
  const name = match[1];
  if (raw.startsWith('</')) {
    if (stack.length === 0) {
      console.log('Unmatched closing tag:', raw, 'at', match.index);
    } else {
      const last = stack[stack.length - 1];
      if (last === name) {
        stack.pop();
      } else {
        console.log('Mismatched closing tag:', raw, 'expected </' + last + '> but found </' + name + '> at', match.index);
        stack.pop();
      }
    }
  } else {
    // opening tag
    // skip self-closing
    const rest = raw.slice(1);
    if (rest.endsWith('/>')) continue;
    // skip fragments
    if (name === undefined) continue;
    stack.push(name);
  }
}
if (stack.length) {
  console.log('Unclosed tags on stack:', stack);
} else {
  console.log('No unmatched tags found');
}
