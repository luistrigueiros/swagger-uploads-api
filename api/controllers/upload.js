'use strict';
const fs = require('fs-extra');

module.exports.upload = handleUpload;

function handleUpload(req, res) {
  const file = req.swagger.params.upfile.value;
  const originalname = file.originalname;
  fs.outputFile(`./uploads/${originalname}`, file.buffer)
  .then(() => onUploadSuccessful(originalname, res))
  .catch(err => console.log(err));
}

function onUploadSuccessful(originalname, res) {
  console.log("File written successfully!");
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 200;
  res.end(JSON.stringify(`Handled file[${originalname}]`));
}
