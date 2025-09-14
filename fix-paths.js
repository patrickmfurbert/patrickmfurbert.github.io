import fs from 'fs-extra';
import path from 'path';

// Define paths
const sourcePath = path.resolve('build', '_app');
const targetPath = path.resolve('build', 'app');

// Check if source directory exists
if (fs.existsSync(sourcePath)) {
  // Copy the _app directory to app
  fs.copySync(sourcePath, targetPath);
  console.log('Copied _app directory to app');

  // Update the index.html file to reference app instead of _app
  const indexPath = path.resolve('build', 'index.html');
  if (fs.existsSync(indexPath)) {
    let indexContent = fs.readFileSync(indexPath, 'utf8');
    indexContent = indexContent.replace(/\/_app\//g, '/app/');
    fs.writeFileSync(indexPath, indexContent);
    console.log('Updated index.html to reference app instead of _app');
  }
} else {
  console.error('Source directory does not exist:', sourcePath);
}