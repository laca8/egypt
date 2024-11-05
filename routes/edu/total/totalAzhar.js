const express = require("express");
const eduController = require("../../../controllers/eduController/total/azharStu");
const router = express.Router();
router.get("/stu", eduController.getStudents);
router.get("/tea", eduController.getTeachers);
router.get("/cla", eduController.getClasses);
router.get("/scl", eduController.getSchools);

router.get("/stu/:city", eduController.getStudentsByCity);
router.get("/tea/:city", eduController.getTeachersByCity);
router.get("/cla/:city", eduController.getClassesByCity);

module.exports = router;
