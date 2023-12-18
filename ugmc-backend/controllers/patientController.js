const Patient = require('/models/patient');


exports.registerPatient = async (req, res) => {
 

  res.json({ message: 'Patient registered successfully' });
};
