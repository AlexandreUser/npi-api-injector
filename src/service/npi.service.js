const doctor = require("../model/doctor.model").doctor;

module.exports = {
  async post(content) {
    content.active = true;
    return await doctor.findOne({ npi: content });
  },
};
