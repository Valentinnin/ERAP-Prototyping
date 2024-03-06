const fs = require('fs');
const path = require('path');

const dirname = 'simple-directory';

// Verzeichnis auslesen
const files = fs.readdirSync(dirname);

const result = {
    fileTypes: [],
    fileCounts: [],
    fileSizes: []
};

files.forEach(file => {
    const filePath = path.join(dirname, file);

    // Dateityp ermitteln (hier wird nach dem Punkt im Dateinamen gesucht)
    const fileType = path.extname(file);

    // Dateigröße ermitteln
    const fileStats = fs.statSync(filePath);
    const fileSize = fileStats.size;

    // Update des Ergebnisobjekts
    if (!result.fileTypes.includes(fileType)) {
        result.fileTypes.push(fileType);
        result.fileCounts.push(1);
        result.fileSizes.push(fileSize);
    } else {
        const index = result.fileTypes.indexOf(fileType);
        result.fileCounts[index]++;
        result.fileSizes[index] += fileSize;
    }
});

// Ergebnisobjekt als JSON speichern
const jsonResult = JSON.stringify(result, null, 2);
fs.writeFileSync('directoryResults.json', jsonResult);

console.log('Directory results saved to directoryResults.json');
