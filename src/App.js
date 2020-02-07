import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./css/index.css";
import SearchBar from "./components/SearchBar";
import AdressesView from "./components/AdressesView";
import MapView from "./components/MapView";

const SEARCHBAR_HEIGHT = 60;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            width: 0, 
            height: 0,

            // Searchbar
            data: [],

            // Map shown markers
            currLat: 0,
            currLng: 0,
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
        this.handleSearchBarChange  = this.handleSearchBarChange.bind(this);
        this.handleAdressClick      = this.handleAdressClick.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    handleSearchBarChange(recvData) {
        this.setState((state, props) =>({
            data: recvData
        }));

        //console.log(this.state);
    }

    handleAdressClick(lat, lng) {
        this.setState((state, props) =>({
            currLat: lat,
            currLng: lng,
        }));

        console.log(this.state)
    }

    render() {
        return (
            <MDBContainer fluid style={styles.container}>
                <MDBRow>
                    <MDBCol md="12" style={styles.navBar}>
                        <SearchBar handleSearchBarChange={this.handleSearchBarChange} />
                    </MDBCol>
                </MDBRow>
                
                <MDBRow>
                    <MDBCol style={{ ...styles.leftMenu, height:this.state.height - SEARCHBAR_HEIGHT }} md="3">
                        <AdressesView 
                            data={this.state.data}
                            handleAdressClick={this.handleAdressClick}
                        />
                    </MDBCol>
                    
                    <MapView
                        lat={this.state.currLat}
                        lng={this.state.currLng}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"                        
                        containerElement={<MDBCol style={{ ...styles.content, height:this.state.height - SEARCHBAR_HEIGHT }} md="9" />}
                        loadingElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </MDBRow>
            </MDBContainer>
        );
    }
}

const styles = {
    container : {
        //backgroundColor: '#bebebe',
    },
    navBar : {
        display: 'block',
        padding: '0px 24px',
        height: SEARCHBAR_HEIGHT+'px',
        boxShadow: '0 8px 6px -6px #00000040',
    },
    leftMenu : {
        borderRight: '1px solid #505050',
        paddingTop : '4vh',    
        textAlign: 'center',
        overflow: 'auto',
    },
    content : {
        //padding: '4vh 4vw',
        padding: '0',
        overflow: 'auto',
    },
};

export default App;
