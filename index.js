const axios = require('axios');
const fs = require('fs');
const pdf = require('pdf-poppler');
const sharp = require('sharp');

// Function to fetch a PDF file from a URL and save it to a local path
async function fetchPDF(url, outputPath) {
  try {
    const response = await axios.get(url, { responseType: 'stream' });
    response.data.pipe(fs.createWriteStream(outputPath));
    console.log(`PDF fetched and saved to ${outputPath}`);
  } catch (error) {
    throw new Error(`Error fetching the PDF: ${error.message}`);
  }
}

// Function to convert a PDF to images and save them in a specified output directory
async function convertPDFToImages(pdfPath, outputDir) {
  const options = {
    format: 'png', // or 'jpeg', 'jpg'
    out_dir: outputDir,
    out_prefix: 'page',
  };

  try {
    const result = await pdf.convert(pdfPath, options);
    console.log(`PDF converted to images in ${outputDir}`);
    return result;
  } catch (error) {
    throw new Error(`Error converting PDF to images: ${error.message}`);
  }
}

// Function to generate a thumbnail from an image and save it to a specified path
async function generateThumbnail(imagePath, thumbnailPath, size) {
  try {
    await sharp(imagePath)
      .resize(size, size)
      .toFile(thumbnailPath);
    console.log(`Thumbnail generated and saved to ${thumbnailPath}`);
  } catch (error) {
    throw new Error(`Error generating thumbnail: ${error.message}`);
  }
}

module.exports = {
  fetchPDF,
  convertPDFToImages,
  generateThumbnail,
};
