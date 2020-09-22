import React from 'react'
import Card from './Card'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {useState} from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: theme.spacing(5),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function FullPageAnalysis() {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                <Card className={classes.paper}  />
                </Grid>
                <Grid item xs>
                <Card className={classes.paper}/>
                </Grid>
                <Grid item xs>
                <Card className={classes.paper}/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={8}>
                <Card className={classes.paper}/>
                </Grid>
                <Grid item xs>
                <Card className={classes.paper}/>
                </Grid>
            </Grid>              
        </div>
    )
}
