var fs = require("fs");
var parse = require("csv-parse");
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/doctorsNPI", {
  useNewUrlParser: true,
});
let Schema = mongoose.Schema;
let doctorSchema = new Schema({
  npi: String,
  pac_id: String,
  professional_enrollment_id: String,
  last_name: String,
  first_name: String,
  middle_name: String,
  suffix: String,
  gender: String,
  credential: String,
  medical_school_name: String,
  graduation_year: String,
  primary_speciality: String,
  secondary_speciality_1: String,
  secondary_speciality_2: String,
  secondary_speciality_3: String,
  secondary_speciality_4: String,
  all_secondary_speciality: String,
  organization_legal_name: String,
  group_practice_pac_id: String,
  number_group_members: String,
  line_1_address: String,
  line_2_address: String,
  marker_address: String,
  city: String,
  state: String,
  zip_code: String,
  phone_number: String,
});
let doctorModel = mongoose.model("doctors", doctorSchema);
var fields = [
  "npi",
  "pac_id",
  "professional_enrollment_id",
  "last_name",
  "first_name",
  "middle_name",
  "suffix",
  "gender",
  "credential",
  "medical_school_name",
  "graduation_year",
  "primary_speciality",
  "secondary_speciality_1",
  "secondary_speciality_2",
  "secondary_speciality_3",
  "secondary_speciality_4",
  "all_secondary_speciality",
  "organization_legal_name",
  "group_practice_pac_id",
  "number_group_members",
  "line_1_address",
  "line_2_address",
  "marker_address",
  "city",
  "state",
  "zip_code",
  "phone_number",
];
let counter = 0;
fs.createReadStream("./model/db.csv")
  .pipe(parse({ delimiter: ";" }))
  .on("data", function (csvrow) {
    counter += 1;
    console.log(counter);
    if (counter > 936801) {
      let parsedCsv = {};
      csvrow.map((row, index) => {
        if (index < fields.length) {
          parsedCsv[fields[index]] = row;
        }
      });
      console.log(parsedCsv);
      console.log(doctorModel.create(parsedCsv));
    }

    //do something with csvrow
  })
  .on("end", function () {
    //do something with csvData
    console.log(csvData);
  });
