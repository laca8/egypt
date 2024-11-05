import React, { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import {
  Form,
  Button,
  Container,
  Card,
  Row,
  Col,
  Table,
} from "react-bootstrap";
import Error from "../../features/Error";
import Loader from "../../features/Loader";
import { Typography } from "@mui/material";
import {
  listworldBank,
  addWorldBank,
} from "../../../redux/actions/international/internationalAction";
import { ListGroup } from "react-bootstrap";
import { storage } from "../../../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import ButtonMaterial from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
const WorldBank = () => {
  const [indicator, setIndicator] = useState("Choose Indicator");
  const indicators = [
    "Choose Indicator",
    "Transport services (% of commercial service exports)",
    "Merchandise exports to high-income economies (% of total merchandise exports)",
    "Commercial service imports (current US$)",
    "Ores and metals imports (% of merchandise imports)",
    "Tariff rate, most favored nation, weighted mean, all products (%)",
    "Import volume index (2000 = 100)",
    "Rural population (% of total population)",
    "Population growth (annual %)",
    "Population ages 65 and above, female",
    "Population ages 30-34, female (% of female population)",
    "Population ages 05-09, female (% of female population)",
    "Fertility rate, total (births per woman)",
    "Consumption of iodized salt (% of households)",
    "Unemployment, female (% of female labor force) (national estimate)",
    "Unemployment, youth male (% of male labor force ages 15-24) (national estimate)",
    "Ratio of female to male labor force participation rate (%) (national estimate)",
    "Labor force participation rate for ages 15-24, female (%) (modeled ILO estimate)",
    "Children in employment, female (% of female children ages 7-14)",
    "GDP per person employed (constant 2017 PPP $)",
    "Employment to population ratio, 15+, male (%) (national estimate)",
    "Employment in agriculture (% of total employment) (modeled ILO estimate)",
    "Multidimensional poverty headcount ratio, male (% of male population)",
    "Income share held by highest 20%",
    "External health expenditure per capita (current US$)",
    "Increase in poverty gap at $1.90 ($ 2011 PPP) poverty line due to out-of-pocket health care expenditure (% of poverty line)",
    "Suicide mortality rate, female (per 100,000 female population)",
    "Diarrhea treatment (% of children under 5 receiving oral rehydration and continued feeding)",
    "Exclusive breastfeeding (% of children under 6 months)",
    "Lifetime risk of maternal death (%)",
    "Incidence of HIV, ages 15-24 (per 1,000 uninfected population ages 15-24)",
    "Urban land area where elevation is below 5 meters (sq. km)",
  ];
  const internationalReducer = useSelector(
    (state) => state.internationalReducer
  );
  const { data, error, loading } = internationalReducer;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listworldBank(indicator));
  }, [indicator]);

  const columnsDefs = [
    {
      headerName: "Indicator",
      field: "Indicator",
      sortable: true,
      filter: true,
    },
    {
      headerName: "Indicator Code",
      field: "Indicator Code",
      sortable: true,
      filter: true,
    },
    {
      headerName:
        "Special Notes : The reporting period for national accounts data is designated as either calendar year basis (CY) or fiscal year basis (FY). For this country, it is fiscal year-based (fiscal year-end: June 30) for the years 1980 and after. The data from 1973 to 1979 refer to the calendar year data. Also, an estimate (PA.NUS.ATLS) of the exchange rate covers the same period and thus differs from the official exchange rate (CY). \r\n\r\nIn addition, the World Bank systematically assesses the appropriateness of official exchange rates as conversion factors. In this country, multiple or dual exchange rate activity exists and must be accounted for appropriately in underlying statistics. An alternative estimate (“alternative conversion factor” - PA.NUS.ATLS) is thus calculated as a weighted average of the different exchange rates in use in the country. Doing so better reflects economic reality and leads to more accurate cross-country comparisons and country classifications by income level. For this country, this applies to the period 1965-2021. Alternative conversion factors are used in the Atlas methodology and elsewhere in World Development Indicators as single-year conversion factors.",
      field:
        "Special Notes : The reporting period for national accounts data is designated as either calendar year basis (CY) or fiscal year basis (FY). For this country, it is fiscal year-based (fiscal year-end: June 30) for the years 1980 and after. The data from 1973 to 1979 refer to the calendar year data. Also, an estimate (PA.NUS.ATLS) of the exchange rate covers the same period and thus differs from the official exchange rate (CY). \r\n\r\nIn addition, the World Bank systematically assesses the appropriateness of official exchange rates as conversion factors. In this country, multiple or dual exchange rate activity exists and must be accounted for appropriately in underlying statistics. An alternative estimate (“alternative conversion factor” - PA.NUS.ATLS) is thus calculated as a weighted average of the different exchange rates in use in the country. Doing so better reflects economic reality and leads to more accurate cross-country comparisons and country classifications by income level. For this country, this applies to the period 1965-2021. Alternative conversion factors are used in the Atlas methodology and elsewhere in World Development Indicators as single-year conversion factors.",
      sortable: true,
      filter: true,
    },
    {
      headerName: "SOURCE_NOTE",
      field: "SOURCE_NOTE",
      sortable: true,
      filter: true,
    },
    {
      headerName: "SOURCE_ORGANIZATION",
      field: "SOURCE_ORGANIZATION",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1977",
      field: "1977",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1978",
      field: "1978",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1979",
      field: "1979",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1980",
      field: "1980",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1981",
      field: "1981",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1982",
      field: "1982",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1983",
      field: "1983",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1984",
      field: "1984",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1985",
      field: "1985",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1986",
      field: "1986",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1987",
      field: "1987",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1988",
      field: "1988",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1989",
      field: "1989",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1990",
      field: "1990",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1991",
      field: "1991",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1992",
      field: "1992",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1993",
      field: "1993",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1994",
      field: "1994",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1995",
      field: "1995",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1996",
      field: "1996",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1997",
      field: "1997",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1998",
      field: "1998",
      sortable: true,
      filter: true,
    },
    {
      headerName: "1999",
      field: "1999",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2000",
      field: "2000",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2000",
      field: "2000",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2001",
      field: "2001",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2002",
      field: "2002",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2003",
      field: "2003",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2004",
      field: "2004",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2005",
      field: "2005",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2006",
      field: "2006",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2007",
      field: "2007",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2008",
      field: "2008",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2009",
      field: "2009",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2010",
      field: "2010",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2011",
      field: "2011",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2012",
      field: "2012",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2013",
      field: "2013",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2014",
      field: "2014",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2015",
      field: "2015",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2016",
      field: "2016",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2017",
      field: "2017",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2018",
      field: "2018",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2019",
      field: "2019",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2020",
      field: "2020",
      sortable: true,
      filter: true,
    },
    {
      headerName: "2021",
      field: "2021",
      sortable: true,
      filter: true,
    },
  ];

  const defaultColDef = useMemo(
    () => ({
      sortable: true,
      filter: true,
    }),
    []
  );
  const [json, setJson] = useState("");
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);

  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    if (file.size > 20000000) {
      setErr("file size must less than 20MB");
    } else {
      setLoad(true);
      const dataRef = ref(storage, `/files/${file.name}`);
      uploadBytes(dataRef, file).then(() => {
        getDownloadURL(dataRef).then((url) => {
          setLoad(true);
          console.log(url);
          if (url) {
            setLoad(false);
            setJson(url);
            console.log(file);
            setLoad(false);
          }
        });
      });
    }
  };

  const addWorldReducer = useSelector((state) => state.addWorldReducer);
  const { loading: loadingAdd, error: errorAdd, success } = addWorldReducer;
  const handleSubmit = async () => {
    const data = {
      json,
    };
    dispatch(addWorldBank(data));
    setJson("");
    //dispatch(listPrimryStuAzhar());
  };
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  useEffect(() => {
    if (success) {
      alert("import data successed");
    }
  }, [success]);
  return (
    <Container style={{ marginTop: "20px" }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : data ? (
        <>
          <Typography variant="h6" style={{ marginBottom: "10px" }}>
            World Bank
          </Typography>
          <Typography variant="p" style={{ marginBottom: "10px" }}>
            "Special Notes : The reporting period for national accounts data is
            designated as either calendar year basis (CY) or fiscal year basis
            (FY). For this country, it is fiscal year-based (fiscal year-end:
            June 30) for the years 1980 and after. The data from 1973 to 1979
            refer to the calendar year data. Also, an estimate (PA.NUS.ATLS) of
            the exchange rate covers the same period and thus differs from the
            official exchange rate (CY). In addition, the World Bank
            systematically assesses the appropriateness of official exchange
            rates as conversion factors. In this country, multiple or dual
            exchange rate activity exists and must be accounted for
            appropriately in underlying statistics. An alternative estimate
            (“alternative conversion factor” - PA.NUS.ATLS) is thus calculated
            as a weighted average of the different exchange rates in use in the
            country. Doing so better reflects economic reality and leads to more
            accurate cross-country comparisons and country classifications by
            income level. For this country, this applies to the period
            1965-2021. Alternative conversion factors are used in the Atlas
            methodology and elsewhere in World Development Indicators as
            single-year conversion factors."
          </Typography>
          <Typography variant="h6">
            Data Source : World Development Indicators Last Updated Date :
            20/07/2022
          </Typography>
          <Form.Select
            aria-label="Default select example"
            style={{ marginBottom: "10px" }}
            value={indicator}
            onChange={(e) => setIndicator(e.target.value)}
          >
            {indicators.map((dep) => (
              <option value={dep}>{dep}</option>
            ))}
          </Form.Select>
          <>
            {userInfo?.user?.isAdmin ? (
              <div style={{ marginBottom: "10px" }}>
                <ButtonMaterial variant="contained" component="label">
                  <UploadFileIcon />
                  <input hidden onChange={uploadFileHandler} type="file" />
                </ButtonMaterial>
                <ButtonMaterial
                  onClick={handleSubmit}
                  variant="outlined"
                  disabled={load || json == ""}
                  style={{ marginLeft: "10px" }}
                >
                  import
                </ButtonMaterial>
                {load ? <p>loading....</p> : err ? <Error error={err} /> : null}
                {loadingAdd ? (
                  <Loader />
                ) : errorAdd ? (
                  <Error error={errorAdd} />
                ) : null}
              </div>
            ) : null}
          </>
          <div className="ag-theme-alpine" style={{ height: 500 }}>
            <AgGridReact
              rowData={data}
              columnDefs={columnsDefs}
              defaultColDef={defaultColDef}
              rowSelection="multiple"
              animateRows={true}
            />
          </div>
        </>
      ) : null}
    </Container>
  );
};

export default WorldBank;
