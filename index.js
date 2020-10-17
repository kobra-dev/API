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

  const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });

  let key = uuidv4();

  const params = {
    Body: encodedDataset,
    Bucket: "kobra",
    Key: `${key}`,
  };

  s3.putObject(params, function (err, data) {
    if (err) console.log(err, err.stack);
    else console.log(data);
  });

  res.json({
    key: key,
  });
});

function bin2string(array) {
  var result = "";
  for (var i = 0; i < array.length; ++i) {
    result += String.fromCharCode(array[i]);
  }
  return result;
}

app.post("/getDataset/:filename", function (req, res, next) {
  const params = {
    Bucket: "kobra",
    Key: req.params.filename,
  };

  console.log(params);

  const spacesEndpoint = new AWS.Endpoint("sfo2.digitaloceanspaces.com");

  const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });

  s3.getObject(params, function (error, data) {
    var dataset = data.Body;
    dataset = Buffer.from(bin2string(dataset), "base64").toString();

    res.json({
      data: dataset,
    });
  });
});

app.listen(port, () => console.log(`port ${port}`));
