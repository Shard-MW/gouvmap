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
    static defaultProps = {
        lat: 0, 
        lng: 0
    }

    render() {
        return (
            <Map {...this.props} lat={this.props.lat} lng={this.props.lng}/>
        );
    }
}
  


export default MapView;