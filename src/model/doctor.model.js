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
exports.doctor = mongoose.model("doctors", doctorSchema);
