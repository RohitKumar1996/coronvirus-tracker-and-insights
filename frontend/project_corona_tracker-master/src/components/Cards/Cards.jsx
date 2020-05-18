import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Info = ({ data, country }) => {
  if(country) {
    var NewConfirmed = data["countrySummary"]["newConfirmed"];
    var TotalConfirmed = data["countrySummary"]["totalConfirmed"];
    var NewDeaths = data["countrySummary"]["newDeaths"];
    var TotalDeaths = data["countrySummary"]["totalDeaths"];
    var NewRecovered = data["countrySummary"]["newRecovered"];
    var TotalRecovered = data["countrySummary"]["totalRecovered"];
    var date = data["countrySummary"]["date"];
    //console.log("data to cards " + TotalConfirmed + " , " + TotalRecovered + " , " + TotalDeaths)
  } else {
    NewConfirmed = data["NewConfirmed"];
    TotalConfirmed = data["TotalConfirmed"];
    NewDeaths = data["NewDeaths"];
    TotalDeaths = data["TotalDeaths"];
    NewRecovered = data["NewRecovered"];
    TotalRecovered = data["TotalRecovered"];
    date = data["date"];
  }

  if (!TotalConfirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.topCards)}>
          <CardContent>
            <Typography color="primary" variant="h5" component="h2" gutterBottom >
              Total Infected
            </Typography>
            <Typography variant="h5" component="h3">
              <CountUp start={0} end={TotalConfirmed} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              (Latest updated : {new Date(date).toDateString()})
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.topCards)}>
          <CardContent>
            <Typography color="primary" variant="h5" component="h2" gutterBottom>
              Total Recovered
            </Typography>
            <Typography variant="h5" component="h3">
              <CountUp start={0} end={TotalRecovered} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              (Latest updated : {new Date(date).toDateString()})
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.topCards)}>
          <CardContent>
            <Typography color="primary" variant="h5" component="h2" gutterBottom>
              Total Deaths
            </Typography>
            <Typography variant="h5" component="h3">
              <CountUp start={0} end={TotalDeaths} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              (Latest updated : {new Date(date).toDateString()})
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.bottomCards)}>
          <CardContent>
            <Typography color="primary" variant="h5" component="h2" gutterBottom>
              New Active cases
            </Typography>
            <Typography variant="h5" component="h3">
              <CountUp start={0} end={NewConfirmed} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              (Latest updated : {new Date(date).toDateString()})
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.bottomCards)}>
          <CardContent>
            <Typography color="primary" variant="h5" component="h2" gutterBottom>
              New Recoveries
            </Typography>
            <Typography variant="h5" component="h3">
              <CountUp start={0} end={NewRecovered} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              (Latest updated : {new Date(date).toDateString()})
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={12} md={3} component={Card} className={cx(styles.card, styles.bottomCards)}>
          <CardContent>
            <Typography color="primary" variant="h5" component="h2" gutterBottom>
              New Deaths
            </Typography>
            <Typography variant="h5" component="h3">
              <CountUp start={0} end={NewDeaths} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              (Latest updated : {new Date(date).toDateString()})
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};
export default Info;
