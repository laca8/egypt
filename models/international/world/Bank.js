const mongoose = require("mongoose");
const Bank = new mongoose.Schema({
  Indicator: {
    type: String,
  },
  "Indicator Code": {
    type: String,
  },
  "Special Notes : The reporting period for national accounts data is designated as either calendar year basis (CY) or fiscal year basis (FY). For this country, it is fiscal year-based (fiscal year-end: June 30) for the years 1980 and after. The data from 1973 to 1979 refer to the calendar year data. Also, an estimate (PA.NUS.ATLS) of the exchange rate covers the same period and thus differs from the official exchange rate (CY). \r\n\r\nIn addition, the World Bank systematically assesses the appropriateness of official exchange rates as conversion factors. In this country, multiple or dual exchange rate activity exists and must be accounted for appropriately in underlying statistics. An alternative estimate (“alternative conversion factor” - PA.NUS.ATLS) is thus calculated as a weighted average of the different exchange rates in use in the country. Doing so better reflects economic reality and leads to more accurate cross-country comparisons and country classifications by income level. For this country, this applies to the period 1965-2021. Alternative conversion factors are used in the Atlas methodology and elsewhere in World Development Indicators as single-year conversion factors.":
    {
      type: String,
    },
  SOURCE_NOTE: {
    type: String,
  },
  SOURCE_ORGANIZATION: {
    type: String,
  },
  1977: {
    type: String,
  },
  1978: {
    type: String,
  },
  1979: {
    type: String,
  },
  1980: {
    type: String,
  },
  1981: {
    type: String,
  },
  1982: {
    type: String,
  },
  1983: {
    type: String,
  },
  1984: {
    type: String,
  },
  1985: {
    type: String,
  },

  1986: {
    type: String,
  },
  1987: {
    type: String,
  },
  1988: {
    type: String,
  },
  1989: {
    type: String,
  },
  1990: {
    type: String,
  },
  1991: {
    type: String,
  },
  1992: {
    type: String,
  },
  1993: {
    type: String,
  },
  1994: {
    type: String,
  },
  1995: {
    type: String,
  },
  1996: {
    type: String,
  },
  1997: {
    type: String,
  },
  1998: {
    type: String,
  },
  1999: {
    type: String,
  },
  2000: {
    type: String,
  },
  2001: {
    type: String,
  },
  2002: {
    type: String,
  },
  2003: {
    type: String,
  },
  2004: {
    type: String,
  },
  2005: {
    type: String,
  },
  2006: {
    type: String,
  },
  2007: {
    type: String,
  },
  2008: {
    type: String,
  },
  2009: {
    type: String,
  },
  2010: {
    type: String,
  },
  2011: {
    type: String,
  },
  2012: {
    type: String,
  },
  2013: {
    type: String,
  },
  2014: {
    type: String,
  },
  2015: {
    type: String,
  },
  2016: {
    type: String,
  },
  2017: {
    type: String,
  },
  2018: {
    type: String,
  },
  2019: {
    type: String,
  },
  2020: {
    type: String,
  },
  2021: {
    type: String,
  },
  2022: {
    type: String,
  },
});
module.exports = mongoose.model("world_bank", Bank);
