const fs = require('fs');
const path = require('path');
const webp=require('webp-converter');

// Define directories
const inputDir = './images';
const outputDir = './result';

// Ensure the output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Function to convert .webp to .jpg
const convertWebpToJpg = async (inputFile, outputFile) => {
    try {
        const result = webp.dwebp(inputFile,outputFile,"-o",logging="-v");
        console.log(`Converted: ${inputFile} -> ${outputFile}`);
    } catch (error) {
        console.error(`Error converting ${inputFile}:`, error.message);
    }
};

// Process files in the directory
fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error('Error reading input directory:', err.message);
        return;
    }

    files.forEach(async (file) => {
        const inputFile = path.join(inputDir, file);
        const outputFile = path.join(outputDir, `${path.parse(file).name}.jpg`);

        // Check if file has .webp extension
        if (path.extname(file).toLowerCase() === '.webp') {
            await convertWebpToJpg(inputFile, outputFile);
        }
    });
});

