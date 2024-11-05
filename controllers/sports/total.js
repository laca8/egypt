const Club = require("../../models/sport/Club");
const Council = require("../../models/sport/Council");

const getTotal = async (req, res) => {
  try {
    const club = await Club.aggregate([
      {
        $group: {
          _id: {},
          total_clubs: {
            $sum: {
              $convert: {
                input: "$العدد",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);
    const council = await Council.aggregate([
      {
        $group: {
          _id: {},
          total_counil: {
            $sum: {
              $convert: {
                input: "$العدد",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json({ club, council });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};

const getTotalByCity = async (req, res) => {
  try {
    const club = await Club.aggregate([
      {
        $match: { المحافظه: req.params.city },
      },
      {
        $group: {
          _id: {},
          total_clubs: {
            $sum: {
              $convert: {
                input: "$العدد",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);
    const council = await Council.aggregate([
      {
        $match: { المحافظة: req.params.city },
      },
      {
        $group: {
          _id: {},
          total_counil: {
            $sum: {
              $convert: {
                input: "$العدد",
                to: "int",
                onError: "",
                onNull: "",
              },
            },
          },
        },
      },
    ]);

    res.json({ club, council });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ msg: err.message });
  }
};
module.exports = {
  getTotal,
  getTotalByCity,
};
