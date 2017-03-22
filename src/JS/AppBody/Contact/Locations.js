import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';
import '../../../styles/CSS/AppBody.css';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap 
    ref={ props.onMapLoad }
    defaultZoom={ 6 }
    defaultCenter={ { lat: 36.162541, lng: -120.319906 } }
  >
      { props.markers.map((marker) => (
        <Marker
          {...marker}
        />
      )) }
  </GoogleMap>
))

export default class Locations extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markers: [{
        position: {
          lat: 37.760099,
          lng: -122.500233
        }
      },
      {
        position: {
          lat: 37.659818,
          lng: -122.422187
        }
      },
      {
        position: {
          lat: 37.357703,
          lng: -121.949393
        }
      },
      {
        position: {
          lat: 34.088430,
          lng: -118.089667
        }
      },
      ]
    }
  }

  render() {
    const mapContainer = <div className='map-container'></div>
    return(
      <div className='locations-container'>
        <h1>Here you can find us</h1>
        <GettingStartedGoogleMap
          containerElement={ mapContainer }
          mapElement={ <div style={{ height: '100%', width:'100%' }} /> }
          markers={ this.state.markers }
        />
      </div>
    )
  }
}