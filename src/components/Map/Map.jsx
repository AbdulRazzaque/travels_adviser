import React from 'react';
import GoogleMapReact from 'google-map-react';
import { Paper, Typography, useMediaQuery } from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';

import useStyels from './style'
function Map() {
  const classes =useStyels();
  const isMobile = useMediaQuery('(min-width:600px)')
  const coordinates= {lat:0, lng:0}
  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
    bootstrapURLKeys={{key:'AIzaSyBz0Gmab2nBwHtZA2KNRvSqbHQ-273OCr4'}}
    defaultCenter={coordinates}
    center={coordinates}
    defaultZoom={14}
    margin={[50,50,50,50]}
    options={''}
    onChange={''}
    onChildClick={''}
    >
</GoogleMapReact>
    </div>
  );
}

export default Map