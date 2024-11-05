const Primary = require("../../../models/edu/azhar/PrimaryStudent");
const Secondary = require("../../../models/edu/azhar/SecondaryStudent");
const High = require("../../../models/edu/azhar/HighStudent");
const Teachers = require("../../../models/edu/azhar/Teachers");
const Classes = require("../../../models/edu/azhar/Classes");
const Schools = require("../../../models/edu/azhar/institutes");
const getStudents = async (req, res) => {
  try {
    const studentsPrimary = await Primary.aggregate([
      { $match: { العام: "2021" } },

      {
        $group: {
          _id: {},

          total_students_primary: {
            $sum: {
              $toInt: "$عدد الطلاب",
            },
          },
        },
      },
    ]);
    const studentsSecondary = await Secondary.aggregate([
      { $match: { العام: "2021" } },

      {
        $group: {
          _id: {},

          total_students_secondary: {
            $sum: {
              $toInt: "$عدد الطلاب",
            },
          },
        },
      },
    ]);
    const studentsHigh = await High.aggregate([
      { $match: { العام: "2021" } },

      {
        $group: {
          _id: {},

          total_students_high: {
            $sum: {
              $toInt: "$عدد الطلاب",
            },
          },
        },
      },
    ]);

    res.json({ studentsPrimary, studentsSecondary, studentsHigh });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getTeachers = async (req, res) => {
  try {
    const teachersPrimary = await Teachers.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ابتدائى" } },
      {
        $group: {
          _id: {},

          total_teachers: {
            $sum: {
              $toInt: "$عدد المدرسين",
            },
          },
        },
      },
    ]);
    const teachersSecondary = await Teachers.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "اعدادى" } },
      {
        $group: {
          _id: {},

          total_teachers: {
            $sum: {
              $toInt: "$عدد المدرسين",
            },
          },
        },
      },
    ]);
    const teachersHigh = await Teachers.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ثانوى" } },
      {
        $group: {
          _id: {},

          total_teachers: {
            $sum: {
              $toInt: "$عدد المدرسين",
            },
          },
        },
      },
    ]);
    res.json({ teachersHigh, teachersPrimary, teachersSecondary });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getClasses = async (req, res) => {
  try {
    const classesPrimary = await Classes.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ابتدائى" } },
      {
        $group: {
          _id: {},

          total_classes: {
            $sum: {
              $toInt: "$عدد الفصول",
            },
          },
        },
      },
    ]);

    const classesSecondary = await Classes.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "اعدادى" } },
      {
        $group: {
          _id: {},

          total_classes: {
            $sum: {
              $toInt: "$عدد الفصول",
            },
          },
        },
      },
    ]);
    const classesHigh = await Classes.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ثانوى" } },
      {
        $group: {
          _id: {},

          total_classes: {
            $sum: {
              $toInt: "$عدد الفصول",
            },
          },
        },
      },
    ]);

    res.json({
      classesHigh,
      classesPrimary,
      classesSecondary,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getSchools = async (req, res) => {
  try {
    const PrimarySchools = await Schools.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ابتدائى" } },
      {
        $group: {
          _id: {},

          total_institute: {
            $sum: {
              $toInt: "$عدد المعاهد",
            },
          },
        },
      },
    ]);
    const SecondarySchools = await Schools.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "اعدادى" } },
      {
        $group: {
          _id: {},

          total_institute: {
            $sum: {
              $toInt: "$عدد المعاهد",
            },
          },
        },
      },
    ]);

    const HighSchools = await Schools.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ثانوى" } },
      {
        $group: {
          _id: {},

          total_institute: {
            $sum: {
              $toInt: "$عدد المعاهد",
            },
          },
        },
      },
    ]);

    res.json({
      PrimarySchools,
      SecondarySchools,
      HighSchools,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getStudentsByCity = async (req, res) => {
  try {
    const studentsPrimary = await Primary.aggregate([
      {
        $match: { المنطقة: req.params.city },
      },
      { $match: { العام: "2021" } },

      {
        $group: {
          _id: {},

          total_students_primary: {
            $sum: {
              $toInt: "$عدد الطلاب",
            },
          },
        },
      },
    ]);
    const studentsSecondary = await Secondary.aggregate([
      {
        $match: { المنطقة: req.params.city },
      },
      { $match: { العام: "2021" } },

      {
        $group: {
          _id: {},

          total_students_secondary: {
            $sum: {
              $toInt: "$عدد الطلاب",
            },
          },
        },
      },
    ]);
    const studentsHigh = await High.aggregate([
      {
        $match: { المنطقة: req.params.city },
      },
      { $match: { العام: "2021" } },

      {
        $group: {
          _id: {},

          total_students_high: {
            $sum: {
              $toInt: "$عدد الطلاب",
            },
          },
        },
      },
    ]);

    res.json({ studentsPrimary, studentsSecondary, studentsHigh });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getTeachersByCity = async (req, res) => {
  try {
    const teachersPrimary = await Teachers.aggregate([
      {
        $match: { المنطقة: req.params.city },
      },
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ابتدائى" } },
      {
        $group: {
          _id: {},

          total_teachers: {
            $sum: {
              $toInt: "$عدد المدرسين",
            },
          },
        },
      },
    ]);
    const teachersSecondary = await Teachers.aggregate([
      {
        $match: { المنطقة: req.params.city },
      },
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "اعدادى" } },
      {
        $group: {
          _id: {},

          total_teachers: {
            $sum: {
              $toInt: "$عدد المدرسين",
            },
          },
        },
      },
    ]);
    const teachersHigh = await Teachers.aggregate([
      {
        $match: { المنطقة: req.params.city },
      },
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ثانوى" } },
      {
        $group: {
          _id: {},

          total_teachers: {
            $sum: {
              $toInt: "$عدد المدرسين",
            },
          },
        },
      },
    ]);
    res.json({ teachersHigh, teachersPrimary, teachersSecondary });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getClassesByCity = async (req, res) => {
  try {
    const classesPrimary = await Classes.aggregate([
      {
        $match: { المنطقة: req.params.city },
      },
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ابتدائى" } },
      {
        $group: {
          _id: {},

          total_classes: {
            $sum: {
              $toInt: "$عدد الفصول",
            },
          },
        },
      },
    ]);

    const classesSecondary = await Classes.aggregate([
      {
        $match: { المنطقة: req.params.city },
      },
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "اعدادى" } },
      {
        $group: {
          _id: {},

          total_classes: {
            $sum: {
              $toInt: "$عدد الفصول",
            },
          },
        },
      },
    ]);
    const classesHigh = await Classes.aggregate([
      {
        $match: { المنطقة: req.params.city },
      },
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ثانوى" } },
      {
        $group: {
          _id: {},

          total_classes: {
            $sum: {
              $toInt: "$عدد الفصول",
            },
          },
        },
      },
    ]);

    res.json({
      classesHigh,
      classesPrimary,
      classesSecondary,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getStudents,
  getStudentsByCity,
  getClassesByCity,
  getTeachersByCity,
  getTeachers,
  getClasses,
  getSchools,
};
