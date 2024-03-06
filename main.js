// main.js

// Starte das main.js mit einem Fetch
// Benutze .then um das File zu verwenden und die Charts zu erstellen
fetch("directoryResults.json")
  .then((response) => response.json())
  .then(updateUI);

/**
 * @param {Object} result
 */
function updateUI(result) {
  console.log(result);
  // Hier kannst du die Resultate verarbeiten und mit ChartJS visualisieren
  createPieChart(result.fileTypes, result.fileCounts);
  createBarChart(result.fileTypes, result.fileSizes);
}

function createPieChart(labels, data) {
  var pieChartCanvas = document.getElementById('pieChart').getContext('2d');

  new Chart(pieChartCanvas, {
      type: 'pie',
      data: {
          labels: labels,
          datasets: [{
              data: data,
              backgroundColor: getRandomColors(data.length),
          }],
      },
  });
}

function createBarChart(labels, data) {
  var barChartCanvas = document.getElementById('barChart').getContext('2d');

  new Chart(barChartCanvas, {
      type: 'bar',
      data: {
          labels: labels,
          datasets: [{
              label: 'File Sizes',
              data: data,
              backgroundColor: getRandomColors(data.length),
          }],
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,
              },
          },
      },
  });
}

function getRandomColors(count) {
  var colors = [];
  for (var i = 0; i < count; i++) {
      colors.push(getRandomColor());
  }
  return colors;
}

function getRandomColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16);
}
