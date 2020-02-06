import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./css/index.css";
import SearchBar from "./components/SearchBar";
import AdressesView from "./components/AdressesView";
import MapView from "./components/MapView";

const SEARCHBAR_HEIGHT = 60;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { width: 0, height: 0 };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
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

    render() {
        return (
            <MDBContainer fluid style={styles.container}>
                <MDBRow>
                    <MDBCol md="12" style={styles.navBar}>
                        <SearchBar />
                    </MDBCol>
                </MDBRow>
                
                <MDBRow>
                    <MDBCol style={{ ...styles.leftMenu, height:this.state.height - SEARCHBAR_HEIGHT }} md="3">
                        <AdressesView />
                    </MDBCol>
                    
                    <MapView
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDOQV6fkseH2jIfOZOgxsispimh8me2mcY&v=3.exp&libraries=geometry,drawing,places"                        
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
