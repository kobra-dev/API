require("dotenv").config();

const app = require("express")();
const multer = require("multer");
const AWS = require("aws-sdk");
const port = 3000;

var upload = multer();

console.log(process.env.SECRET_KEY);

app.post("/datasetUpload", upload.array(), function (req, res, next) {
  //get file and upload to digitalocean spaces
  const dataset = req.files[0];
  const user = req.body.username;
  const datasetName = req.body.datasetname;

  const spacesEndpoint = new AWS.Endpoint(
    "https://sfo2.digitaloceanspaces.com"
  );

  const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });

  var params = {
    Body: dataset,
    Bucket: "kobra",
    Key: "file.ext",
  };
});

app.listen(port, () => console.log(`port ${port}`));
