import React, { Component } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";

class SearchBar extends Component {
    render() {
        return (
            <MDBCol md="6" style={styles.container}>
                <MDBFormInline style={styles.searchbar} className="md-form">
                    <MDBIcon icon="search" />
                    <input className="form-control form-control-lg ml-3 w-75" type="text" placeholder="Rechercher une adresse" aria-label="Rechercher" />
                </MDBFormInline>
            </MDBCol>
        );
    }
}

const styles = {
    container: {
        height: 50,
    },
    searchbar: {
        margin:0,
    }
};

export default SearchBar;