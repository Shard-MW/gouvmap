import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import "./css/index.css";
import SearchBar from "./components/SearchBar";
import AdressesView from "./components/AdressesView";
import MapView from "./components/MapView";

class App extends Component {
  render() {
    return (
        <MDBContainer fluid style={styles.container}>
            <MDBRow>
                <MDBCol md="12" style={styles.navBar}>
                    <SearchBar />
                </MDBCol>
            </MDBRow>
            
            <MDBRow>
                <MDBCol style={styles.leftMenu} md="3">
                    <AdressesView />
                </MDBCol>

                <MDBCol style={styles.content} md="9">
                    <MapView />
                </MDBCol>
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
        border: '1px solid #cfffffff',
        padding: '3vh 4vw',
        height: '10vh',
    },
    leftMenu : {
        border: '1px solid black',
        paddingTop : '4vh',      
        height: '90vh',
        textAlign: 'center',
        overflow: 'auto',
    },
    content : {
        border: '1px solid yellow',
        padding: '4vh 4vw',
        height: '90vh',
        overflow: 'auto',
    },
};

export default App;
