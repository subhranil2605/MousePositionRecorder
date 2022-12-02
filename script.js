let csv;

// 2D array into CSV
function arrayToCSV(data) {
  return data.map((row) => [row.x, row.y].join(",")).join("\r\n");
}

function downloadBlob(content, filename, contentType) {
  // Create a blob
  var blob = new Blob([content], { type: contentType });
  var url = URL.createObjectURL(blob);

  // Create a link to download it
  var pom = document.createElement("a");
  pom.href = url;
  pom.setAttribute("download", filename);
  pom.click();
}
function myFunction() {
  // conver the vectors element back into array of elements
  console.log(arrayToCSV(points));
  csv = arrayToCSV(points);
  downloadBlob(csv, "export.csv", "text/csv;charset=utf-8;");
}
