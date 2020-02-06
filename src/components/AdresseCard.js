import React, { Component } from "react";
import PropTypes from 'prop-types';
import { MDBIcon } from "mdbreact";
import "../css/index.css";

class AdresseCard extends Component {
    static defaultProps = {
        title: 'Adresse',
        type : 'Rue',
        desc : 'Contexte'
    }

    render() {
        return (
            <>
                <div className="container md-12 adressCard" style={styles.container}>
                    <div className="show">
                        <div className="toast-header" style={styles.cardHeader}>
                            <i className="fa fa-map-pin fa-lg mr-2 text-danger"></i>
                            <strong className="mr-auto">{this.props.title}</strong>
                            <small>{this.props.type}</small>
                        </div>

                        <div className="toast-body" style={{textAlign: 'left', paddingLeft: '2rem', paddingBottom: '0'}}>{this.props.desc}</div>
                    </div>
                </div>            
                <hr />
            </>
        );
    }
}

AdresseCard.propTypes = {
    title: PropTypes.string,
    type : PropTypes.string,
    desc : PropTypes.string,
};

const styles = {
    container: {
        //border: '1px solid black',
        padding: '1rem',
        transition: 'all .2s',
        marginBottom: '0.5rem',
        borderRadius:'2px'
    },
    card : {
        width:'100%',
        marginRight: 0
    },
    cardHeader : {
        borderRadius:'2px'
    },
}

export default AdresseCard;