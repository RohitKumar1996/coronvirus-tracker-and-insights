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
    var RecoveredArray = [];
    var DateArray = [];

    var index = 0; 
  
    dailyData.forEach(myFunction); 
    function myFunction(item, index) 
    { 
      DeathsArray.push(item["Deaths"]);
      ConfirmedArray.push(item["Confirmed"]);
      RecoveredArray.push(item["Recovered"]);
      DateArray.push(item["Date"].slice(0, 10));
    }

    //console.log(DeathsArray);

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
      var index3 = 0;
      var index4 = 0;
      var index5 = 0;
      var index6 = 0;
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

      tr.forEach(myFunction3); 
      function myFunction3(item, index3) 
      {
        var obj = {};
        obj["label"] = item["country"];
        obj["value"] = item["totalRecovered"];
        trn.push(obj);
      }

      tnd.forEach(myFunction4); 
      function myFunction4(item, index4) 
      {
        var obj = {};
        obj["label"] = item["country"];
        obj["value"] = item["newDeaths"];
        tndn.push(obj);
      }

      tnc.forEach(myFunction5); 
      function myFunction5(item, index5) 
      {
        var obj = {};
        obj["label"] = item["country"];
        obj["value"] = item["newConfirmed"];
        tncn.push(obj);
      }

      tnr.forEach(myFunction6); 
      function myFunction6(item, index6) 
      {
        var obj = {};
        obj["label"] = item["country"];
        obj["value"] = item["newRecovered"];
        tnrn.push(obj);
      }
    }
  }

  const chartConfigs1 = {
    type: "column2d", // The chart type
    width: "520", // Width of the chart
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
    width: "520", // Width of the chart
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

  const chartConfigs3 = {
    type: "column2d", // The chart type
    width: "520", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Top 5 Countries in terms of total no. of Recovered cases",    //Set the chart caption
        subCaption: "",             //Set the chart subcaption
        xAxisName: "Country",           //Set the x-axis name
        yAxisName: "Total no. of Recovered cases",  //Set the y-axis name
        numberSuffix: "",
        theme: "fusion",
        "captionPadding": "30"               
      },
      // Chart Data - from step 2
      data: trn
    }
  };

  const chartConfigs4 = {
    type: "column2d", // The chart type
    width: "520", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Top 5 Countries in terms of no. of new deaths",    //Set the chart caption
        subCaption: "",             //Set the chart subcaption
        xAxisName: "Country",           //Set the x-axis name
        yAxisName: "No. of new death cases",  //Set the y-axis name
        numberSuffix: "",
        theme: "fusion",
        "captionPadding": "30"               
      },
      // Chart Data - from step 2
      data: tndn
    }
  };

  const chartConfigs5 = {
    type: "column2d", // The chart type
    width: "520", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Top 5 Countries in terms of no. of new Confirmed cases",    //Set the chart caption
        subCaption: "",             //Set the chart subcaption
        xAxisName: "Country",           //Set the x-axis name
        yAxisName: "No. of new Confirmed cases",  //Set the y-axis name
        numberSuffix: "",
        theme: "fusion",
        "captionPadding": "30"               
      },
      // Chart Data - from step 2
      data: tncn
    }
  };

  const chartConfigs6 = {
    type: "column2d", // The chart type
    width: "520", // Width of the chart
    height: "350", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Top 5 Countries in terms of no. of new recovered cases",    //Set the chart caption
        subCaption: "",             //Set the chart subcaption
        xAxisName: "Country",           //Set the x-axis name
        yAxisName: "No. of new recoveries",  //Set the y-axis name
        numberSuffix: "",
        theme: "fusion",
        "captionPadding": "30"               
      },
      // Chart Data - from step 2
      data: tnrn
    }
  };

  const lineChart = (
    country ? (
      <Line
        data={{
          width: 1600,
          labels: DateArray,
          datasets: [{
            data: ConfirmedArray,
            label: 'Infected',
            borderColor: '#FBC02D',
            pointBackgroundColor: '#FBC02D',
            fill: true,
          }, {
            data: DeathsArray,
            label: 'Deaths',
            borderColor: '#B71C1C',
            //backgroundColor: 'rgba(255, 0, 0, 0.5)',
            pointBackgroundColor: '#B71C1C',
            fill: true,
          }, {
            data: RecoveredArray,
            label: 'Recovered',
            borderColor: '#33691E',
            //backgroundColor: '#00C853',
            pointBackgroundColor: '#33691E',
            fill: true,
          }],
        }}
      />
    ) : null
  );

  if(country) {
    return (<div className={styles.container}>{ lineChart }</div>);
  } else {
    return (
      <div className={styles.container}>
        <p>
          <div className={styles.chartDiv}><ReactFC {...chartConfigs1} /></div> 
          <div className={styles.chartDiv}><ReactFC {...chartConfigs2} /></div>
          <div className={styles.chartDiv}><ReactFC {...chartConfigs3} /></div>

        </p>
        <p>
          <div className={styles.chartDiv}><ReactFC {...chartConfigs4} /></div> 
          <div className={styles.chartDiv}><ReactFC {...chartConfigs5} /></div>
          <div className={styles.chartDiv}><ReactFC {...chartConfigs6} /></div> 
        </p>
      </div>
    )
  }

};

export default Chart;
