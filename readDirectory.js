// readDirectory.js

// Run recursive function in directory
/**
 *
 * @param {string} directoryPath
 */
function readDir(directoryPath) {
    const entries = fs.readdirSync(directoryPath, { withFileTypes: true });
    for (const entry of entries) {
      // ignoriere bestimmte Ordner (Variable muss im Script angegeben oder Zeile gelöscht werden)
      if (ignoreFolders.includes(entry.name)) continue;
      // Recursiv: Wenn es ein Ordner ist, rufe die Funktion wieder auf.
      if (entry.isDirectory()) {
        readDir(path.join(directoryPath, entry.name));
      }
      // Wenn es ein File ist, relevante Informationen zusammenfassen und in ein Array pushen
      // Eventuell könnte fs.statSync verwendet werden
      // Size könnte ein wichtiger Wert sein.
      if (entry.isFile()) {
        const filePath = path.join(directoryPath, entry.name);
        const fileType = path.extname(entry.name);
        const fileStats = fs.statSync(filePath);
        const fileSize = fileStats.size;
        // Hier könntest du die Informationen weiterverarbeiten oder in ein Array pushen
      }
    }
  }
  
