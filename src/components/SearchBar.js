import React, { Component } from "react";
import { MDBCol, MDBFormInline, MDBIcon } from "mdbreact";
import axios from "axios";

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }
    
    // Called everytime the user input a new adress
    async handleChange(event) {
        let data = [];
        await axios.get(`https://api-adresse.data.gouv.fr/search`,
            {
                params: {
                    q: event.target.value !== "" ? event.target.value : ".",
                    limit: 10,
                    autocomplete: 1,
                }
            })
            .then(recvData => {
                data = recvData.data.features;                
            }            
        ) 

        // Send data
        this.props.handleSearchBarChange(data);
    }

    render() {
        return (
            <MDBCol md="6" style={styles.container}>
                <MDBFormInline style={styles.searchbar} className="md-form">
                    <MDBIcon icon="search" />
                    <input className="form-control form-control-lg ml-3 w-75" type="text" 
                        placeholder="Rechercher une adresse" 
                        aria-label="Rechercher" 
                        onChange={this.handleChange} />
                </MDBFormInline>
            </MDBCol>
        );
    }
}

const styles = {
    container: {
        height: 50,
        display: 'inline-block',
    },
    searchbar: {
        margin:0,
    },
};

export default SearchBar;