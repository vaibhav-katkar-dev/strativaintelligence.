const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'about.html',
  'services.html',
  'contact.html',
  'reports.html',
  'report.html',
  'industries.html',
  'blog.html'
];

// Nav logo replacements (href="index.html" and text-accent span)
const navLogoPatterns = [
  // Pattern for nav logo with text-accent span (various spacing)
  /<a href="index\.html" class="logo">\s*<span class="text-accent"[^>]*>Strativa<\/span>\s*<span[^>]*>Intelligence<\/span>\s*<\/a>/g,
  // Pattern with text-white class too
  /<a href="index\.html" class="logo text-white">\s*<span class="text-accent"[^>]*>Strativa<\/span>\s*<span[^>]*>Intelligence<\/span>\s*<\/a>/g,
];

const navLogoReplacement = '<a href="index.html" class="logo">\n        <img src="images/SI logo.png" alt="Strativa Intelligence" style="height: 48px; width: auto;">\n      </a>';
const footerLogoReplacement = '<a href="index.html" class="logo">\n            <img src="images/SI logo.png" alt="Strativa Intelligence" style="height: 48px; width: auto; filter: brightness(0) invert(1);">\n          </a>';

files.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`Skipping (not found): ${file}`);
    return;
  }

  let html = fs.readFileSync(file, 'utf8');
  const original = html;

  // Replace nav logo (no text-white)
  html = html.replace(
    /<a href="index\.html" class="logo">\s*[\r\n]*\s*<span class="text-accent"[\s\S]*?Strativa<\/span>\s*[\r\n]*\s*<span[\s\S]*?>Intelligence<\/span>\s*[\r\n]*\s*<\/a>/,
    navLogoReplacement
  );

  // Replace footer logo (with text-white)
  html = html.replace(
    /<a href="index\.html" class="logo text-white">\s*[\r\n]*\s*<span class="text-accent"[\s\S]*?Strativa<\/span>\s*[\r\n]*\s*<span[\s\S]*?>Intelligence<\/span>\s*[\r\n]*\s*<\/a>/,
    footerLogoReplacement
  );

  if (html !== original) {
    fs.writeFileSync(file, html);
    console.log(`✅ Updated: ${file}`);
  } else {
    console.log(`⚠️  No change in: ${file}`);
  }
});

console.log('\nDone!');
