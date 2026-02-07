// removeSlug.js
import fs from 'fs';
import path from 'path';

// Folder with your markdown / Astro files
const folderPath = './src/content/work'; // change this to your folder

function removeSlugFromFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');

  // Remove the line starting with `slug:` in the frontmatter
  content = content.replace(/^slug:.*\n/m, '');

  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`Updated: ${filePath}`);
}

// Recursively process folder
function processFolder(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processFolder(fullPath);
    } else if (entry.isFile() && /\.(md|astro)$/.test(entry.name)) {
      removeSlugFromFile(fullPath);
    }
  }
}

processFolder(folderPath);
