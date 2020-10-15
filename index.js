const app = require("express")();
const multer = require("multer");
const AWS = require("aws-sdk");
const port = 3000;

var upload = multer();

app.post("/datasetUpload", upload.array(), function (req, res, next) {
  //get file and upload to digitalocean spaces
  const dataset = req.files[0];
  const user = req.body.username;
  const datasetName = req.body.datasetname;
});

app.listen(port, () => console.log("app running"));
