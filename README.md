# PDF Thumbnail Generator

PDF Thumbnail Generator is a Node.js package that allows you to fetch a PDF file from a URL, convert it to images, and generate thumbnails from those images.

## Installation

You can install this package using npm:

```bash
npm install pdf-thumbnail-generator
```

## How to use PDF Thumbnail Generator

Import the package at the beginning of your JavaScript file:
```bash
const pdfThumbnailGenerator = require('pdf-thumbnail-generator');
```

Fetch a PDF file from a URL and save it to a local path:
```bash
const pdfUrl = 'https://example.com/path-to-pdf.pdf';
const pdfFilePath = 'downloaded-pdf.pdf';

pdfThumbnailGenerator.fetchPDF(pdfUrl, pdfFilePath)
  .then(() => {
    // PDF fetched and saved
  })
  .catch((error) => {
    console.error(error);
  });
```

Convert the PDF to images and save them in an output directory:
```bash
const pdfPath = 'downloaded-pdf.pdf';
const outputDir = 'output-images';

pdfThumbnailGenerator.convertPDFToImages(pdfPath, outputDir)
  .then((result) => {
    // PDF converted to images
  })
  .catch((error) => {
    console.error(error);
  });
```

Generate a thumbnail from an image and save it to a specified path:
```bash
const imagePath = 'output-images/page-1.png';
const thumbnailPath = 'thumbnails/thumbnail.png';
const thumbnailSize = 200;

pdfThumbnailGenerator.generateThumbnail(imagePath, thumbnailPath, thumbnailSize)
  .then(() => {
    // Thumbnail generated and saved
  })
  .catch((error) => {
    console.error(error);
  });
```

