// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Nutze Fetch mit einem Promise, um die Daten zu laden
    fetch('/readDirectory')
        .then(response => response.json())
        .then(data => {
            // Erstelle die Pie-Chart
            const pieChart = new Chart(document.getElementById('pieChart'), {
                type: 'pie',
                data: {
                    labels: data.fileTypes,
                    datasets: [{
                        label: 'File Types',
                        data: data.fileCounts,
                        backgroundColor: generateRandomColors(data.fileTypes.length),
                        borderColor: generateRandomColors(data.fileTypes.length),
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'File Types Distribution'
                    }
                }
            });

            // Erstelle die Bar-Chart
            const barChart = new Chart(document.getElementById('barChart'), {
                type: 'bar',
                data: {
                    labels: data.fileTypes,
                    datasets: [{
                        label: 'Total Size (KB)',
                        data: data.fileSizes,
                        backgroundColor: generateRandomColors(data.fileTypes.length),
                        borderColor: generateRandomColors(data.fileTypes.length),
                        borderWidth: 1
                    }]
                },
                options: {
                    title: {
                        display: true,
                        text: 'Total Size per File Type'
                    }
                }
            });
        })
        .catch(error => console.error('Error fetching directory results:', error));
});

// Funktion zum Generieren zufälliger Farben
function generateRandomColors(count) {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.2)`;
        colors.push(color);
    }
    return colors;
}

