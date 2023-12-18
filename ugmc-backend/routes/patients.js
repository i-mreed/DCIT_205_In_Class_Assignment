const express = require('express');
const router = express.Router();
const PatientController = require('../controllers/patientController');

router.post('/register', PatientController.registerPatient);

module.exports = router;
