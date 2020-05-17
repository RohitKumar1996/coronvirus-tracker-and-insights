import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';

//import { fetchDailyData } from '../../api';

import styles from './Chart.module.css';

const Chart = ({ data, country }) => {
  // const [dailyData, setDailyData] = useState({});

  // useEffect(() => {
  //   const fetchMyAPI = async () => {
  //     let initialDailyData = await fetchDailyData(country);
  //     console.log("initialDailyData " + initialDailyData);
  //     setDailyData(initialDailyData);
  //   };

  //   fetchMyAPI();
  // }, [country]);

  if(country) {
    var dailyData = data["countryAllData"];
    console.log("dailyData");
    console.log(dailyData);
  } else {
    var NewConfirmed = data["NewConfirmed"];
    var TotalConfirmed = data["TotalConfirmed"];
    var NewDeaths = data["NewDeaths"];
    var TotalDeaths = data["TotalDeaths"];
    var NewRecovered = data["NewRecovered"];
    var TotalRecovered = data["TotalRecovered"];
    var date = data["date"];
  }

  const barChart = (
    !country ? (
      <Bar
        data={{
          labels: ['Infected', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
              data: [TotalConfirmed, TotalRecovered, TotalDeaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: "Current state across the globe" },
        }}
      />
    ) : null
  );

  const lineChart = (
    country ? (
      <Line
        data={{
          labels: dailyData["Date"],
          datasets: [{
            data: dailyData["Confirmed"],
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          }, {
            data: dailyData["Deaths"],
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

  return (
    <div className={styles.container}>
      {country ? lineChart : barChart}
    </div>
  );
};

export default Chart;
