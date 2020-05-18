import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

import ReactFC from "react-fusioncharts";

// Step 3 - Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Step 4 - Include the chart type
import Column2D from "fusioncharts/fusioncharts.charts";

// Step 5 - Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import styles from './Chart.module.css';

// Step 6 - Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);

const Chart = ({ data, country }) => {

  if(country) {
    var dailyData = data["countryAllData"];
    console.log("dailyData");
    //console.log(dailyData[0]["Date"] + "fjhg\n");
    var DeathsArray = [];
    var ConfirmedArray = [];
    var DateArray = [];

    var index = 0; 
  
    dailyData.forEach(myFunction); 
    function myFunction(item, index) 
    { 
      DeathsArray.push(item["Deaths"]);
      ConfirmedArray.push(item["Confirmed"]);
      DateArray.push(item["Date"]);
    }

    console.log(DeathsArray);

  } else {
    var NewConfirmed = data["NewConfirmed"];
    var TotalConfirmed = data["TotalConfirmed"];
    var NewDeaths = data["NewDeaths"];
    var TotalDeaths = data["TotalDeaths"];
    var NewRecovered = data["NewRecovered"];
    var TotalRecovered = data["TotalRecovered"];
    var td = data["td"];
    var tc = data["tc"];
    var tr = data["tr"];
    var tnd = data["tnd"];
    var tnc = data["tnc"];
    var tnr = data["tnr"];
    var date = data["date"];

    console.log("see = ")
    console.log(data)
    console.log(td)

    var tdn = [{}], tcn = [{}], trn = [], tndn = [], tncn = [], tnrn = [];
   
    if(td) {
      var index1 = 0;
      var index2 = 0;
      td.forEach(myFunction1); 
      function myFunction1(item, index1) 
      {
        var obj = {};
        obj["label"] = item["country"];
        obj["value"] = item["totalDeaths"];
        tdn.push(obj);
      }

      tc.forEach(myFunction2); 
      function myFunction2(item, index2) 
      {
        var obj = {};
        obj["label"] = item["country"];
        obj["value"] = item["totalConfirmed"];
        tcn.push(obj);
      }
    }
  }

  const chartConfigs1 = {
    type: "column2d", // The chart type
    width: "550", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Top 5 Countries in terms of total no. of deaths",    //Set the chart caption
        subCaption: "",             //Set the chart subcaption
        xAxisName: "Country",           //Set the x-axis name
        yAxisName: "Total no. of deaths",  //Set the y-axis name
        numberSuffix: "",
        theme: "fusion",
        "captionPadding": "30"
      },
      // Chart Data - from step 2
      data: tdn
    }
  };

  const chartConfigs2 = {
    type: "column2d", // The chart type
    width: "550", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Top 5 Countries in terms of total no. of Confirmed cases",    //Set the chart caption
        subCaption: "",             //Set the chart subcaption
        xAxisName: "Country",           //Set the x-axis name
        yAxisName: "Total no. of Confirmed cases",  //Set the y-axis name
        numberSuffix: "",
        theme: "fusion",
        "captionPadding": "30"               
      },
      // Chart Data - from step 2
      data: tcn
    }
  };


  // const barChart = (
  //   !country ? (
  //     <Bar
  //       data={{
  //         labels: tdn,
  //         datasets: [
  //           {
  //             label: 'People',
  //             backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
  //             data: tdc,
  //           },
  //         ],
  //       }}
  //       options={{
  //         legend: { display: false },
  //         title: { display: true, text: "Top 5 Countries in terms of no. of deaths" },
  //       }}
  //     />
  //   ) : null
  // );

  const lineChart = (
    country ? (
      <Line
        data={{
          labels: DateArray,
          datasets: [{
            data: ConfirmedArray,
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: DeathsArray,
            label: 'Deaths',
            borderColor: 'red',
            backgroundColor: 'rgba(255, 0, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      />
    ) : null
  );

  if(country) {
    return (<div className={styles.container}>lineChart</div>);
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.chartDiv}><ReactFC {...chartConfigs1} /></div> 
        <div className={styles.chartDiv}><ReactFC {...chartConfigs2} /></div> 
      </div>
    )
  }

};

export default Chart;
