import React, { Component } from "react";
import PropTypes from 'prop-types';
import AdresseCard from "./AdresseCard";

import data from '../data/example';

class AdressesView extends Component {
    static defaultProps = {
        data: [],
    }

    constructor(props) {
        super(props);
        this.state = { 
            //adresses : this.props.data
            adresses : data.features
        };
    }

    render() {
        return (
            <>
                {
                    this.state.adresses.map((adress) => 
                        <AdresseCard key={adress.properties.id} title={adress.properties.label} type={adress.properties.type} desc={adress.properties.context}/>
                    )
                }
            </>
        );
    }
}

AdressesView.propTypes = {
    data: PropTypes.array,
};


export default AdressesView;