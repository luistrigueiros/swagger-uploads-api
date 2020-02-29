'use strict';

module.exports = {
  upload: upload
};


function upload(req, res) {
  console.log('Handling file upload now .....');
  res.json("Processed Ok!");
}
