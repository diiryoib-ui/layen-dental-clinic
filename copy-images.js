import fs from 'fs';
import path from 'path';

const sourceDir = 'C:\\Users\\wajihe\\Desktop\\dental websit for orthovision\\layen-dental-clinic\\beforeandafter';
const destDir = 'public/cases';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Clear existing
const existing = fs.readdirSync(destDir);
existing.forEach(f => fs.unlinkSync(path.join(destDir, f)));

const files = fs.readdirSync(sourceDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

// Sort numerically to ensure 1.jpg goes to case-1.jpg
files.sort((a, b) => {
    const numA = parseInt(a.replace(/\D/g, '')) || 0;
    const numB = parseInt(b.replace(/\D/g, '')) || 0;
    return numA - numB;
});

files.forEach((file, index) => {
    const srcPath = path.join(sourceDir, file);
    const destPath = path.join(destDir, `case-${index + 1}.jpg`);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Copied ${file} to ${destPath}`);
});
