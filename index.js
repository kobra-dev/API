require("dotenv").config();

const app = require("express")();
const multer = require("multer");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const port = 3000;

var upload = multer();

app.post("/datasetUpload", upload.single("dataset"), function (req, res, next) {
  //get file and upload to digitalocean spaces
  const encodedDataset = req.file.buffer.toString("base64");

  const spacesEndpoint = new AWS.Endpoint("sfo2.digitaloceanspaces.com");

  console.log(spacesEndpoint);

  const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });

  console.log(s3);

  let key = uuidv4();

  var params = {
    Body: encodedDataset,
    Bucket: "kobra",
    Key: `${key}`,
  };

  s3.putObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });

  console.log(key);

  res.json({
    key: key,
  });
});

app.listen(port, () => console.log(`port ${port}`));
