const PrimaryStudents = require("../../../models/edu/PrimaryStudent");
const SecondaryStudents = require("../../../models/edu/SecondaryStudent");
const HighStudent = require("../../../models/edu/HighStudent");
const IndStudent = require("../../../models/edu/IndStudent");
const ComStudent = require("../../../models/edu/ComStudent");
const AgrStudent = require("../../../models/edu/AgrStudent");
const Teacher = require("../../../models/edu/Teacher");
const PrimaryClasses = require("../../../models/edu/classes/Primary");
const SecondaryClasses = require("../../../models/edu/classes/Secondary");
const AgriClasses = require("../../../models/edu/classes/Agri");
const CommercialClasses = require("../../../models/edu/classes/Commercial");
const HighClasses = require("../../../models/edu/classes/High");
const HotelClasses = require("../../../models/edu/classes/Hotel");
const IndClasses = require("../../../models/edu/classes/Ind");
const Cinema = require("../../../models/culture/Cimena");
const Theater = require("../../../models/culture/Theater");
const PrimarySchools = require("../../../models/edu/schools/Primary");
const SecondarySchools = require("../../../models/edu/schools/Secondary");
const AgriSchools = require("../../../models/edu/schools/Arg");
const IndSchools = require("../../../models/edu/schools/Ind");
const HighSchools = require("../../../models/edu/schools/High");
const HotelSchools = require("../../../models/edu/schools/Hotel");
const CommSchools = require("../../../models/edu/schools/Commercial");

const getTotalStudents = async (req, res) => {
  try {
    const studentsPrimary = await PrimaryStudents.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_primary: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsSecondary = await SecondaryStudents.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_secondary: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsInd = await IndStudent.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_ind: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsHigh = await HighStudent.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_high: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsCom = await ComStudent.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_com: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsArg = await AgrStudent.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_arg: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);

    res.json({
      studentsPrimary,
      studentsSecondary,
      studentsInd,
      studentsHigh,
      studentsArg,
      studentsCom,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getTeachers = async (req, res) => {
  try {
    const teachersPrimary = await Teacher.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ابتدائى" } },
      {
        $group: {
          _id: {},

          total_teachers_female: {
            $sum: {
              $toInt: "$اناث",
            },
          },

          total_teachers_male: {
            $sum: {
              $toInt: "$ذكور",
            },
          },
          total_teachers_female_public: {
            $sum: {
              $toInt: "$اناث حكومى",
            },
          },

          total_teachers_female_private: {
            $sum: {
              $toInt: "$اناث خاص",
            },
          },
          total_teachers_male_public: {
            $sum: {
              $toInt: "$ذكور حكومى",
            },
          },

          total_teachers_male_private: {
            $sum: {
              $toInt: "$ذكور خاص",
            },
          },
          total_teachers_female_urban: {
            $sum: {
              $toInt: "$اناث حضر",
            },
          },
          total_teachers_male_urban: {
            $sum: {
              $toInt: "$ذكور حضر",
            },
          },
          total_teachers_female_rural: {
            $sum: {
              $toInt: "$اناث ريف",
            },
          },
          total_teachers_male_rural: {
            $sum: {
              $toInt: "$ذكور ريف",
            },
          },
        },
      },
    ]);
    const teachersSecondary = await Teacher.aggregate([
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "اعدادى" } },
      {
        $group: {
          _id: {},

          total_teachers_female: {
            $sum: {
              $toInt: "$اناث",
            },
          },

          total_teachers_male: {
            $sum: {
              $toInt: "$ذكور",
            },
          },
          total_teachers_female_public: {
            $sum: {
              $toInt: "$اناث حكومى",
            },
          },

          total_teachers_female_private: {
            $sum: {
              $toInt: "$اناث خاص",
            },
          },
          total_teachers_male_public: {
            $sum: {
              $toInt: "$ذكور حكومى",
            },
          },

          total_teachers_male_private: {
            $sum: {
              $toInt: "$ذكور خاص",
            },
          },
          total_teachers_female_urban: {
            $sum: {
              $toInt: "$اناث حضر",
            },
          },
          total_teachers_male_urban: {
            $sum: {
              $toInt: "$ذكور حضر",
            },
          },
          total_teachers_female_rural: {
            $sum: {
              $toInt: "$اناث ريف",
            },
          },
          total_teachers_male_rural: {
            $sum: {
              $toInt: "$ذكور ريف",
            },
          },
        },
      },
    ]);
    const teachersHigh = await Teacher.aggregate([
      { $match: { العام: "2021" } },
      {
        $match: {
          $or: [
            { المرحلة: "ثانوى عام" },
            { المرحلة: "ثانوى صتاعى" },
            { المرحلة: "ثانوى زراعى" },
            { المرحلة: "ثانوى تجارى" },
            { المرحلة: "ثانوى فندقى" },
          ],
        },
      },
      {
        $group: {
          _id: {},

          total_teachers_female: {
            $sum: {
              $toInt: "$اناث",
            },
          },

          total_teachers_male: {
            $sum: {
              $toInt: "$ذكور",
            },
          },
          total_teachers_female_public: {
            $sum: {
              $toInt: "$اناث حكومى",
            },
          },

          total_teachers_female_private: {
            $sum: {
              $toInt: "$اناث خاص",
            },
          },
          total_teachers_male_public: {
            $sum: {
              $toInt: "$ذكور حكومى",
            },
          },

          total_teachers_male_private: {
            $sum: {
              $toInt: "$ذكور خاص",
            },
          },
          total_teachers_female_urban: {
            $sum: {
              $toInt: "$اناث حضر",
            },
          },
          total_teachers_male_urban: {
            $sum: {
              $toInt: "$ذكور حضر",
            },
          },
          total_teachers_female_rural: {
            $sum: {
              $toInt: "$اناث ريف",
            },
          },
          total_teachers_male_rural: {
            $sum: {
              $toInt: "$ذكور ريف",
            },
          },
        },
      },
    ]);

    res.json({ teachersPrimary, teachersSecondary, teachersHigh });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
const getClasses = async (req, res) => {
  try {
    const classesPrimary = await PrimaryClasses.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesSecondary = await SecondaryClasses.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesHigh = await HighClasses.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesAgri = await AgriClasses.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesInd = await IndClasses.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesHotel = await HotelClasses.aggregate([
      { $match: { السنة: 2021 } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesComm = await CommercialClasses.aggregate([
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    res.json({
      classesAgri,
      classesComm,
      classesHigh,
      classesHotel,
      classesInd,
      classesPrimary,
      classesSecondary,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getCulture = async (req, res) => {
  try {
    const cinema19 = await Cinema.aggregate([
      { $match: { العام: "2019" } },
      {
        $group: {
          _id: {},
          total_cinema: {
            $sum: {
              $convert: {
                input: "$عدد السينمات",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);
    const cinema18 = await Cinema.aggregate([
      { $match: { العام: "2018" } },
      {
        $group: {
          _id: {},
          total_cinema: {
            $sum: {
              $convert: {
                input: "$عدد السينمات",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);
    const theater19 = await Theater.aggregate([
      { $match: { العام: "2019" } },

      {
        $group: {
          _id: {},
          total_theaters: {
            $sum: {
              $convert: {
                input: "$عدد المسارح",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);
    const theater18 = await Theater.aggregate([
      { $match: { العام: "2018" } },

      {
        $group: {
          _id: {},
          total_theaters: {
            $sum: {
              $convert: {
                input: "$عدد المسارح",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json({ cinema18, theater18, cinema19, theater19 });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getSchools = async (req, res) => {
  try {
    const schoolsPrimary = await PrimarySchools.aggregate([
      { $match: { العام: "2021" } },
      {
        $group: {
          _id: {},

          total_schools_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_schools_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_schools_public: {
            $sum: {
              $toInt: "$حكومي",
            },
          },
          total_schools_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const schoolsSecondary = await SecondarySchools.aggregate([
      { $match: { العام: "2021" } },
      {
        $group: {
          _id: {},

          total_schools_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_schools_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_schools_public: {
            $sum: {
              $toInt: "$حكومي",
            },
          },
          total_schools_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const schoolsHigh = await HighSchools.aggregate([
      { $match: { العام: "2021" } },
      {
        $group: {
          _id: {},

          total_schools: {
            $sum: {
              $toInt: "$عدد المدارس",
            },
          },
        },
      },
    ]);
    const schoolsComm = await CommSchools.aggregate([
      { $match: { العام: "2021" } },
      {
        $group: {
          _id: {},

          total_schools: {
            $sum: {
              $toInt: "$عدد المدارس",
            },
          },
        },
      },
    ]);
    const schoolsInd = await IndSchools.aggregate([
      { $match: { العام: "2021" } },
      {
        $group: {
          _id: {},

          total_schools_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_schools_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_schools_public: {
            $sum: {
              $toInt: "$حكومي",
            },
          },
          total_schools_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const schoolsAgri = await AgriSchools.aggregate([
      { $match: { العام: "2021" } },
      {
        $group: {
          _id: {},

          total_schools_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_schools_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_schools_public: {
            $sum: {
              $toInt: "$حكومي",
            },
          },
          total_schools_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const schoolsHotel = await HotelSchools.aggregate([
      { $match: { العام: "2021" } },
      {
        $group: {
          _id: {},

          total_schools_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_schools_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_schools_public: {
            $sum: {
              $toInt: "$حكومي",
            },
          },
          total_schools_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    res.json({
      schoolsAgri,
      schoolsComm,
      schoolsHigh,
      schoolsInd,
      schoolsPrimary,
      schoolsSecondary,
      schoolsHotel,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getTotalStudentsByCity = async (req, res) => {
  try {
    const studentsPrimary = await PrimaryStudents.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_primary: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsSecondary = await SecondaryStudents.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },

      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_secondary: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsInd = await IndStudent.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      {
        $match: { المحافظة: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_ind: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsHigh = await HighStudent.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      {
        $match: { المحافظة: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_high: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsCom = await ComStudent.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      { $match: { السنة: "2021" } },

      {
        $group: {
          _id: {},
          total_students_com: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);
    const studentsArg = await AgrStudent.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},
          total_students_arg: {
            $sum: {
              $toInt: "$عدد التلاميذ",
            },
          },
        },
      },
    ]);

    res.json({
      studentsPrimary,
      studentsSecondary,
      studentsInd,
      studentsHigh,
      studentsArg,
      studentsCom,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getTeachersByCity = async (req, res) => {
  try {
    const teachersPrimary = await Teacher.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "ابتدائى" } },
      {
        $group: {
          _id: {},

          total_teachers_female: {
            $sum: {
              $toInt: "$اناث",
            },
          },

          total_teachers_male: {
            $sum: {
              $toInt: "$ذكور",
            },
          },
          total_teachers_female_public: {
            $sum: {
              $toInt: "$اناث حكومى",
            },
          },

          total_teachers_female_private: {
            $sum: {
              $toInt: "$اناث خاص",
            },
          },
          total_teachers_male_public: {
            $sum: {
              $toInt: "$ذكور حكومى",
            },
          },

          total_teachers_male_private: {
            $sum: {
              $toInt: "$ذكور خاص",
            },
          },
          total_teachers_female_urban: {
            $sum: {
              $toInt: "$اناث حضر",
            },
          },
          total_teachers_male_urban: {
            $sum: {
              $toInt: "$ذكور حضر",
            },
          },
          total_teachers_female_rural: {
            $sum: {
              $toInt: "$اناث ريف",
            },
          },
          total_teachers_male_rural: {
            $sum: {
              $toInt: "$ذكور ريف",
            },
          },
        },
      },
    ]);
    const teachersSecondary = await Teacher.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { العام: "2021" } },
      { $match: { المرحلة: "اعدادى" } },
      {
        $group: {
          _id: {},

          total_teachers_female: {
            $sum: {
              $toInt: "$اناث",
            },
          },

          total_teachers_male: {
            $sum: {
              $toInt: "$ذكور",
            },
          },
          total_teachers_female_public: {
            $sum: {
              $toInt: "$اناث حكومى",
            },
          },

          total_teachers_female_private: {
            $sum: {
              $toInt: "$اناث خاص",
            },
          },
          total_teachers_male_public: {
            $sum: {
              $toInt: "$ذكور حكومى",
            },
          },

          total_teachers_male_private: {
            $sum: {
              $toInt: "$ذكور خاص",
            },
          },
          total_teachers_female_urban: {
            $sum: {
              $toInt: "$اناث حضر",
            },
          },
          total_teachers_male_urban: {
            $sum: {
              $toInt: "$ذكور حضر",
            },
          },
          total_teachers_female_rural: {
            $sum: {
              $toInt: "$اناث ريف",
            },
          },
          total_teachers_male_rural: {
            $sum: {
              $toInt: "$ذكور ريف",
            },
          },
        },
      },
    ]);
    const teachersHigh = await Teacher.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { العام: "2021" } },
      {
        $match: {
          $or: [
            { المرحلة: "ثانوى عام" },
            { المرحلة: "ثانوى صتاعى" },
            { المرحلة: "ثانوى زراعى" },
            { المرحلة: "ثانوى تجارى" },
            { المرحلة: "ثانوى فندقى" },
          ],
        },
      },
      {
        $group: {
          _id: {},

          total_teachers_female: {
            $sum: {
              $toInt: "$اناث",
            },
          },

          total_teachers_male: {
            $sum: {
              $toInt: "$ذكور",
            },
          },
          total_teachers_female_public: {
            $sum: {
              $toInt: "$اناث حكومى",
            },
          },

          total_teachers_female_private: {
            $sum: {
              $toInt: "$اناث خاص",
            },
          },
          total_teachers_male_public: {
            $sum: {
              $toInt: "$ذكور حكومى",
            },
          },

          total_teachers_male_private: {
            $sum: {
              $toInt: "$ذكور خاص",
            },
          },
          total_teachers_female_urban: {
            $sum: {
              $toInt: "$اناث حضر",
            },
          },
          total_teachers_male_urban: {
            $sum: {
              $toInt: "$ذكور حضر",
            },
          },
          total_teachers_female_rural: {
            $sum: {
              $toInt: "$اناث ريف",
            },
          },
          total_teachers_male_rural: {
            $sum: {
              $toInt: "$ذكور ريف",
            },
          },
        },
      },
    ]);

    res.json({ teachersPrimary, teachersSecondary, teachersHigh });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getClassesByCity = async (req, res) => {
  try {
    const classesPrimary = await PrimaryClasses.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesSecondary = await SecondaryClasses.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesHigh = await HighClasses.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesAgri = await AgriClasses.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesInd = await IndClasses.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesHotel = await HotelClasses.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { السنة: 2021 } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    const classesComm = await CommercialClasses.aggregate([
      {
        $match: { المديرية: req.params.city },
      },
      { $match: { السنة: "2021" } },
      {
        $group: {
          _id: {},

          total_classes_urban: {
            $sum: {
              $toInt: "$حضر",
            },
          },
          total_classes_rural: {
            $sum: {
              $toInt: "$ريف",
            },
          },
          total_classes_public: {
            $sum: {
              $toInt: "$حكومى",
            },
          },
          total_classes_private: {
            $sum: {
              $toInt: "$خاص",
            },
          },
        },
      },
    ]);
    res.json({
      classesAgri,
      classesComm,
      classesHigh,
      classesHotel,
      classesInd,
      classesPrimary,
      classesSecondary,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getCultureByCity = async (req, res) => {
  try {
    const cinema19 = await Cinema.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      { $match: { العام: "2019" } },
      {
        $group: {
          _id: {},
          total_cinema: {
            $sum: {
              $convert: {
                input: "$عدد السينمات",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);
    const cinema18 = await Cinema.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      { $match: { العام: "2018" } },
      {
        $group: {
          _id: {},
          total_cinema: {
            $sum: {
              $convert: {
                input: "$عدد السينمات",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);
    const theater19 = await Theater.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      { $match: { العام: "2019" } },

      {
        $group: {
          _id: {},
          total_theaters: {
            $sum: {
              $convert: {
                input: "$عدد المسارح",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);
    const theater18 = await Theater.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      { $match: { العام: "2018" } },

      {
        $group: {
          _id: {},
          total_theaters: {
            $sum: {
              $convert: {
                input: "$عدد المسارح",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json({ cinema18, theater18, cinema19, theater19 });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getTotalStudents,
  getTotalStudentsByCity,
  getCultureByCity,
  getClassesByCity,
  getTeachersByCity,
  getTeachers,
  getClasses,
  getCulture,
  getSchools,
};
