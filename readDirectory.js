const fs = require("fs");
const path = require("path");

const dirname = "simple-directory";
const testData = [
    { name: "file1.txt", type: ".txt", size: 500 },
    { name: "file2.md", type: ".md", size: 800 },
    // Füge hier weitere Testdaten hinzu
];

// Remove old directory and create a new directory
if (fs.existsSync(dirname)) {
    fs.rmSync(dirname, { recursive: true, force: true });
}

fs.mkdirSync(dirname);

// Add files to the new directory
testData.forEach(createNewFile);

function createNewFile(data) {
    const fileSize = data.size;
    let fileInput = "";
    
    for (let i = 0; i < fileSize; i++) {
        // Du könntest hier auch echten Dateiinhalt einfügen
        fileInput += "A";
    }

    const filename = `${data.name}`;
    const filePath = path.join(dirname, filename);

    fs.writeFileSync(filePath, fileInput, { encoding: "utf8" });
}

// Optionally, save the testData as JSON
const jsonTestData = JSON.stringify(testData, null, 2);
fs.writeFileSync('testData.json', jsonTestData);

console.log('Test data saved to testData.json');