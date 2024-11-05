const mongoose = require("mongoose");
const un = new mongoose.Schema({
  Variant: {
    type: String,
  },
  Year: {
    type: String,
  },
  "Total Population, as of 1 January (thousands)": {
    type: String,
  },
  "World Population Prospects 2022": {
    type: String,
  },
  "Male Population, as of 1 July (thousands)": {
    type: String,
  },
  "Female Population, as of 1 July (thousands)": {
    type: String,
  },
  "Population Density, as of 1 July (persons per square km)": {
    type: String,
  },
  "Population Sex Ratio, as of 1 July (males per 100 females)": {
    type: String,
  },
  "Median Age, as of 1 July (years)": {
    type: String,
  },
  "Natural Change, Births minus Deaths (thousands)": {
    type: String,
  },
  "Rate of Natural Change (per 1,000 population)": {
    type: String,
  },
  "Population Change (thousands)": {
    type: String,
  },
  "Population Growth Rate (percentage)": {
    type: String,
  },
  "Births (thousands)": {
    type: String,
  },
  "Births by women aged 15 to 19 (thousands)": {
    type: String,
  },
  "Crude Birth Rate (births per 1,000 population)": {
    type: String,
  },
  "Total Fertility Rate (live births per woman)": {
    type: String,
  },
  "Net Reproduction Rate (surviving daughters per woman)": {
    type: String,
  },
  "Mean Age Childbearing (years)": {
    type: String,
  },
  "Sex Ratio at Birth (males per 100 female births)": {
    type: String,
  },
  "Total Deaths (thousands)": {
    type: String,
  },
  "Male Deaths (thousands)": {
    type: String,
  },
  "Female Deaths (thousands)": {
    type: String,
  },
  "Crude Death Rate (deaths per 1,000 population)": {
    type: String,
  },
  "Life Expectancy at Birth, both sexes (years)": {
    type: String,
  },
  "Male Life Expectancy at Birth (years)": {
    type: String,
  },
});
module.exports = mongoose.model("un", un);
