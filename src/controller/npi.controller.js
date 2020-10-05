const npi = require("../service/npi.service");

exports.post = async function (req, res) {
  result = req.body;
  payload = await npi.post(result.npi);
  res.send(payload);
};
