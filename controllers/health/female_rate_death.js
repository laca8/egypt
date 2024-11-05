const Females = require("../../models/health/DeathRateFemales");
const getFemales = async (req, res) => {
  try {
    const females = await Females.aggregate([
      {
        $group: {
          _id: {
            city: "$المحافظة",
          },
          females_rate1: {
            $sum: "$نسبة السيدات فى الفئة العمرية (15-49) اللاتى سبق لهن الزواج وتعرضت لعنف بدنى (%) 2015",
          },
          females_rate2: {
            $sum: "$نسبة السيدات فى الفئة العمرية (10-18) اسنة ومتزوجات (%) 2017",
          },
          females_rate3: {
            $sum: "$نسبة الأناث فى العمر(19-0) سنة اللاتى ستم ختانهن أو متوقع ختانهن (%) 2015",
          },
          females_rate4: {
            $sum: "$نسبة المتزوجات (15-49) سنة ويتخذن القرارات الخاصة برعايتهن الصحية (%) 2015",
          },
          females_rate5: {
            $sum: "$نسبة المتزوجات (15-49) سنة ويتخذن قرارات استخدام وسائل تنظيم الأسرة(%) 2015",
          },
        },
      },
    ]);

    res.json(females);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

module.exports = {
  getFemales,
};
