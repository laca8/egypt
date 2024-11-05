import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Typography } from "@mui/material";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = [
  "0-1",
  "1-2",
  "2-3",
  "3-4",
  "4-5",
  "5-6",
  "6-7",
  "7-8",
  "8-9",
  "9-10",
  "10-11",
  "11-12",
  "12-13",
  "13-14",
  "14-15",
  "15-16",
  "16-17",
  "17-18",
  {
    /* "18-19",
  "19-20",
  "20-21",
  "21-22",
  "22-23",
  "23-24",
  "24-25",
  "25-26",
  "26-27",
  "27-28",
  "28-29",
  "29-30",
  "30-31",
  "31-32",
  "32-33",
  "33-34",
  "34-35",
  "35-36",
  "36-37",
  "37-38",
  "38-39",
  "39-40",
  "40-41",
  "41-42",
  "42-43",
  "43-44",
  "44-45",
  "45-46",
  "46-47",
  "47-48",
  "48-49",
  "49-50",
  "50-51",
  "52-53",
  "53-54",
  "54-55",
  "55-56",
  "56-57",
  "57-58",
  "58-59",
  "59-60",
  "60-61",
  "61-62",
  "62-63",
  "63-64",
  "64-65",
  "65-66",
  "66-67",
  "67-68",
  "68-69",
  "69-70",
  "70-71",
  "71-72",
  "72-73",
  "73-74",
"+75",*/
  },
];

const ChartPyramid = ({ ind, setInd, city, date, setDate }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      try {
        const res = await axios.get(`/api/total/ages/${city}`);
        console.log(res);
        setArr(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchedData();
  }, [city, date]);

  const arrFemales = arr?.filter((p) => p.sex == "اناث");

  const arrMales = arr?.filter((p) => p.sex == "ذكور");
  const totalFemale1 = arrFemales
    ?.filter((p) => p.age == "أقل من سنة")
    .reduce((acc, val) => acc + val.pre, 0);
  console.log(totalFemale1);

  const totalMale1 = arrMales
    ?.filter((p) => p.age == "أقل من سنة")
    .reduce((acc, val) => acc + val.pre, 0);
  // const totalMale1 = (1.3622 * Number(ind)) / 100;

  const totalFemale2 = arrFemales
    ?.filter((p) => p.age == "1")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale2 = arrMales
    ?.filter((p) => p.age == "1")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale3 = arrFemales
    ?.filter((p) => p.age == "2")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale3 = arrMales
    ?.filter((p) => p.age == "2")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale4 = arrFemales
    ?.filter((p) => p.age == "3")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale4 = arrMales
    ?.filter((p) => p.age == "3")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale5 = arrFemales
    ?.filter((p) => p.age == "4")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale5 = arrMales
    ?.filter((p) => p.age == "4")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale6 = arrFemales
    ?.filter((p) => p.age == "5")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale6 = arrMales
    ?.filter((p) => p.age == "5")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale7 = arrFemales
    ?.filter((p) => p.age == "6")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale7 = arrMales
    ?.filter((p) => p.age == "6")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale8 = arrFemales
    ?.filter((p) => p.age == "7")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale8 = arrMales
    ?.filter((p) => p.age == "7")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale9 = arrFemales
    ?.filter((p) => p.age == "8")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale9 = arrMales
    ?.filter((p) => p.age == "8")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale10 = arrFemales
    ?.filter((p) => p.age == "9")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale10 = arrMales
    ?.filter((p) => p.age == "9")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale11 = arrFemales
    ?.filter((p) => p.age == "10")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale11 = arrMales
    ?.filter((p) => p.age == "10")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale12 = arrFemales
    ?.filter((p) => p.age == "11")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale12 = arrMales
    ?.filter((p) => p.age == "11")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale13 = arrFemales
    ?.filter((p) => p.age == "12")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale13 = arrMales
    ?.filter((p) => p.age == "12")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale14 = arrFemales
    ?.filter((p) => p.age == "13")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale14 = arrMales
    ?.filter((p) => p.age == "13")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale15 = arrFemales
    ?.filter((p) => p.age == "14")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale15 = arrMales
    ?.filter((p) => p.age == "14")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale16 = arrFemales
    ?.filter((p) => p.age == "15")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale16 = arrMales
    ?.filter((p) => p.age == "15")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale17 = arrFemales
    ?.filter((p) => p.age == "16")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale17 = arrMales
    ?.filter((p) => p.age == "16")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale18 = arrFemales
    ?.filter((p) => p.age == "17")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale18 = arrMales
    ?.filter((p) => p.age == "17")
    .reduce((acc, val) => acc + val.pre, 0);

  //new
  const totalFemale19 = arrFemales
    ?.filter((p) => p.age == "18")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale19 = arrMales
    ?.filter((p) => p.age == "18")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale20 = arrFemales
    ?.filter((p) => p.age == "19")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale20 = arrMales
    ?.filter((p) => p.age == "19")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale21 = arrFemales
    ?.filter((p) => p.age == "20")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale21 = arrMales
    ?.filter((p) => p.age == "20")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale22 = arrFemales
    ?.filter((p) => p.age == "21")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale22 = arrMales
    ?.filter((p) => p.age == "21")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale23 = arrFemales
    ?.filter((p) => p.age == "22")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale23 = arrMales
    ?.filter((p) => p.age == "22")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale24 = arrFemales
    ?.filter((p) => p.age == "23")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale24 = arrMales
    ?.filter((p) => p.age == "23")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale25 = arrFemales
    ?.filter((p) => p.age == "24")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale25 = arrMales
    ?.filter((p) => p.age == "24")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale26 = arrFemales
    ?.filter((p) => p.age == "25")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale26 = arrMales
    ?.filter((p) => p.age == "25")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale27 = arrFemales
    ?.filter((p) => p.age == "26")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale27 = arrMales
    ?.filter((p) => p.age == "26")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale28 = arrFemales
    ?.filter((p) => p.age == "27")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale28 = arrMales
    ?.filter((p) => p.age == "27")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale29 = arrFemales
    ?.filter((p) => p.age == "28")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale29 = arrMales
    ?.filter((p) => p.age == "28")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale30 = arrFemales
    ?.filter((p) => p.age == "29")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale30 = arrMales
    ?.filter((p) => p.age == "29")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale31 = arrFemales
    ?.filter((p) => p.age == "30")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale31 = arrMales
    ?.filter((p) => p.age == "30")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale32 = arrFemales
    ?.filter((p) => p.age == "31")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale32 = arrMales
    ?.filter((p) => p.age == "31")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale33 = arrFemales
    ?.filter((p) => p.age == "32")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale33 = arrMales
    ?.filter((p) => p.age == "32")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale34 = arrFemales
    ?.filter((p) => p.age == "33")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale34 = arrMales
    ?.filter((p) => p.age == "33")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale35 = arrFemales
    ?.filter((p) => p.age == "34")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale35 = arrMales
    ?.filter((p) => p.age == "34")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale36 = arrFemales
    ?.filter((p) => p.age == "35")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale36 = arrMales
    ?.filter((p) => p.age == "35")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale37 = arrFemales
    ?.filter((p) => p.age == "36")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale37 = arrMales
    ?.filter((p) => p.age == "36")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale38 = arrFemales
    ?.filter((p) => p.age == "37")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale38 = arrMales
    ?.filter((p) => p.age == "37")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale39 = arrFemales
    ?.filter((p) => p.age == "38")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale39 = arrMales
    ?.filter((p) => p.age == "38")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale40 = arrFemales
    ?.filter((p) => p.age == "39")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale40 = arrMales
    ?.filter((p) => p.age == "39")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale41 = arrFemales
    ?.filter((p) => p.age == "40")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale41 = arrMales
    ?.filter((p) => p.age == "40")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale42 = arrFemales
    ?.filter((p) => p.age == "41")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale42 = arrMales
    ?.filter((p) => p.age == "41")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale43 = arrFemales
    ?.filter((p) => p.age == "42")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale43 = arrMales
    ?.filter((p) => p.age == "42")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale44 = arrFemales
    ?.filter((p) => p.age == "43")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale44 = arrMales
    ?.filter((p) => p.age == "43")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale45 = arrFemales
    ?.filter((p) => p.age == "44")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale45 = arrMales
    ?.filter((p) => p.age == "44")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale46 = arrFemales
    ?.filter((p) => p.age == "45")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale46 = arrMales
    ?.filter((p) => p.age == "45")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalFemale47 = arrFemales
    ?.filter((p) => p.age == "46")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale47 = arrMales
    ?.filter((p) => p.age == "46")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale48 = arrFemales
    ?.filter((p) => p.age == "47")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale48 = arrMales
    ?.filter((p) => p.age == "47")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale49 = arrFemales
    ?.filter((p) => p.age == "48")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale49 = arrMales
    ?.filter((p) => p.age == "48")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale50 = arrFemales
    ?.filter((p) => p.age == "49")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale50 = arrMales
    ?.filter((p) => p.age == "49")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale51 = arrFemales
    ?.filter((p) => p.age == "50")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale51 = arrMales
    ?.filter((p) => p.age == "50")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale52 = arrFemales
    ?.filter((p) => p.age == "51")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale52 = arrMales
    ?.filter((p) => p.age == "51")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale53 = arrFemales
    ?.filter((p) => p.age == "52")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale53 = arrMales
    ?.filter((p) => p.age == "52")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale54 = arrFemales
    ?.filter((p) => p.age == "53")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale54 = arrMales
    ?.filter((p) => p.age == "53")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale55 = arrFemales
    ?.filter((p) => p.age == "54")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale55 = arrMales
    ?.filter((p) => p.age == "54")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale56 = arrFemales
    ?.filter((p) => p.age == "55")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale56 = arrMales
    ?.filter((p) => p.age == "55")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale57 = arrFemales
    ?.filter((p) => p.age == "56")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale57 = arrMales
    ?.filter((p) => p.age == "56")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale58 = arrFemales
    ?.filter((p) => p.age == "57")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale58 = arrMales
    ?.filter((p) => p.age == "57")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale59 = arrFemales
    ?.filter((p) => p.age == "58")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale59 = arrMales
    ?.filter((p) => p.age == "58")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale60 = arrFemales
    ?.filter((p) => p.age == "59")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale60 = arrMales
    ?.filter((p) => p.age == "59")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale61 = arrFemales
    ?.filter((p) => p.age == "60")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale61 = arrMales
    ?.filter((p) => p.age == "60")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale62 = arrFemales
    ?.filter((p) => p.age == "61")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale62 = arrMales
    ?.filter((p) => p.age == "61")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale63 = arrFemales
    ?.filter((p) => p.age == "62")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale63 = arrMales
    ?.filter((p) => p.age == "62")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale64 = arrFemales
    ?.filter((p) => p.age == "63")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale64 = arrMales
    ?.filter((p) => p.age == "63")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale65 = arrFemales
    ?.filter((p) => p.age == "64")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale65 = arrMales
    ?.filter((p) => p.age == "64")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale66 = arrFemales
    ?.filter((p) => p.age == "65")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale66 = arrMales
    ?.filter((p) => p.age == "65")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale67 = arrFemales
    ?.filter((p) => p.age == "66")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale67 = arrMales
    ?.filter((p) => p.age == "66")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale68 = arrFemales
    ?.filter((p) => p.age == "67")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale68 = arrMales
    ?.filter((p) => p.age == "67")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale69 = arrFemales
    ?.filter((p) => p.age == "68")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale69 = arrMales
    ?.filter((p) => p.age == "68")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale70 = arrFemales
    ?.filter((p) => p.age == "69")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale70 = arrMales
    ?.filter((p) => p.age == "69")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale71 = arrFemales
    ?.filter((p) => p.age == "70")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale71 = arrMales
    ?.filter((p) => p.age == "70")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale72 = arrFemales
    ?.filter((p) => p.age == "71")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale72 = arrMales
    ?.filter((p) => p.age == "71")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale73 = arrFemales
    ?.filter((p) => p.age == "72")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale73 = arrMales
    ?.filter((p) => p.age == "72")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale74 = arrFemales
    ?.filter((p) => p.age == "73")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale74 = arrMales
    ?.filter((p) => p.age == "73")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemale75 = arrFemales
    ?.filter((p) => p.age == "74")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale75 = arrMales
    ?.filter((p) => p.age == "74")
    .reduce((acc, val) => acc + val.pre, 0);

  const totalFemal76 = arrFemales
    ?.filter((p) => p.age == "+75")
    .reduce((acc, val) => acc + val.pre, 0);
  const totalMale76 = arrMales
    ?.filter((p) => p.age == "+75")
    .reduce((acc, val) => acc + val.pre, 0);

  let arr1 = [
    -totalMale1 * ind,
    -totalMale2 * ind,
    -totalMale3 * ind,
    -totalMale4 * ind,
    -totalMale5 * ind,
    -totalMale6 * ind,
    -totalMale7 * ind,
    -totalMale8 * ind,
    -totalMale9 * ind,
    -totalMale10 * ind,
    -totalMale11 * ind,
    -totalMale12 * ind,
    -totalMale13 * ind,
    -totalMale14 * ind,
    -totalMale15 * ind,
    -totalMale16 * ind,
    -totalMale17 * ind,
    -totalMale18 * ind,
  ];
  let arr2 = [
    totalFemale1 * ind,
    totalFemale2 * ind,
    totalFemale3 * ind,
    totalFemale4 * ind,
    totalFemale5 * ind,
    totalFemale6 * ind,
    totalFemale7 * ind,
    totalFemale8 * ind,
    totalFemale9 * ind,
    totalFemale10 * ind,
    totalFemale11 * ind,
    totalFemale12 * ind,
    totalFemale13 * ind,
    totalFemale14 * ind,
    totalFemale15 * ind,
    totalFemale16 * ind,
    totalFemale17 * ind,
    totalFemale18 * ind,
  ];
  const options = {
    indexAxis: "y",
    responsive: true,
    animationEnabled: true,
    exportEnabled: true,
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: {
          color: "black",
          font: {
            size: 8,
          },
        },
      },
      x: {
        stacked: true,
        ticks: {
          font: {
            size: 0,
          },
        },
      },
    },

    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Children Under 18 Years",
      },
    },
  };

  const data1 = {
    labels,
    datasets: [
      {
        label: "Males",
        data: arr1?.map((x) => Math.round(x)),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Females",
        data: arr2?.map((x) => Math.round(x)),
        backgroundColor: "brown",
      },
    ],
  };

  return (
    <div>
      <Bar options={options} data={data1} />
    </div>
  );
};
export default ChartPyramid;
