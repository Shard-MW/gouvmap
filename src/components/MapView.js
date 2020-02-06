import React, { Component } from "react";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={6.6}
        defaultCenter={{ lat: 46.835077, lng: 2.461457 }}
    >
        <Marker position={{ lat: props.lat, lng: props.lng }} />
    </GoogleMap>
))

class MapView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            marker: {
                lat: 0, 
                lng: 0
            }
        };
    }

    render() {
        return (
            <Map {...this.props} lat={this.state.marker.lat} lng={this.state.marker.lng}/>
        );
    }
}
  


export default MapView;