import React, { Component } from "react";
import AdresseCard from "./AdresseCard";

class AdressesView extends Component {
    translateType(type) {
        switch (type) {
            case "housenumber": 
                return "N° de rue";               
                break;

            case "street":
                return "Rue";                
                break;

            case "locality":
                return "Lieu-dit";                
                break;

            case "municipality":
                return "Municipalité";             
                break;
        
            default:
                return type;
                break;
        }
    }

    render() {
        return (
            <>
                {
                    this.props.data && this.props.data.map((adress) => 
                        <AdresseCard key={adress.properties.id} 
                            title={adress.properties.label} 
                            type={this.translateType(adress.properties.type)} 
                            desc={adress.properties.context}

                            lat={adress.geometry.coordinates[1]}
                            lng={adress.geometry.coordinates[0]}

                            handleAdressClick={this.props.handleAdressClick}
                        />
                    )
                }
            </>
        );
    }
}

export default AdressesView;