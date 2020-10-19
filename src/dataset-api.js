require("dotenv").config();

const app = require("express")();
const multer = require("multer");
const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const port = 3000;

var upload = multer();

// Use this key for testing: 5ccf40d8-1123-4d17-8ad7-cff6e94be703

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

// credit for this to
const bin2string = (array) => {
  var result = "";
  for (var i = 0; i < array.length; ++i) {
    result += String.fromCharCode(array[i]);
  }
  return result;
};

// Use this key for testing: 5ccf40d8-1123-4d17-8ad7-cff6e94be703
app.post("/getDataset/:filename", function (req, res, next) {
  const params = {
    Bucket: "kobra",
    Key: req.params.filename,
  };

  const spacesEndpoint = new AWS.Endpoint("sfo2.digitaloceanspaces.com");

  const s3 = new AWS.S3({
    endpoint: spacesEndpoint,
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
  });

  s3.getObject(params, function (error, data) {
    if (error) {
      console.log(error);
      res.json({
        error: "error fetching datast",
      });
    } else {
      var dataset = data.Body;
      dataset = Buffer.from(bin2string(dataset), "base64").toString();

      res.json({
        data: dataset,
      });
    }
  });
});

app.listen(port, () => console.log(`port ${port}`));
