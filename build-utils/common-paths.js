const path = require('path');

module.exports = {
  appEntry: path.resolve(__dirname, "../", "src"),
  outputPath: path.resolve(__dirname, "../", "dist"),
  templatePath: path.resolve(__dirname, "../", "src", "index.html"),
};