const express = require("express");
const eduController = require("../../../controllers/eduController/total/students");
const router = express.Router();
router.get("/stu", eduController.getTotalStudents);
router.get("/tea", eduController.getTeachers);
router.get("/cla", eduController.getClasses);
router.get("/cul", eduController.getCulture);

router.get("/cul/:city", eduController.getCultureByCity);

router.get("/scl", eduController.getSchools);
router.get("/stu/:city", eduController.getTotalStudentsByCity);
router.get("/cla/:city", eduController.getClassesByCity);
router.get("/tea/:city", eduController.getTeachersByCity);

module.exports = router;
