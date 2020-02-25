import React, { Component } from 'react';
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { fonts, colors } from "../../../utils/CSS";


class NavBar extends Component {

    constructor(props){
        super(props);

        this.state= {
            open: true
        }
    }

    render(){
        return (
            <div style={styles.margin}>
    
                <nav style={styles.body} className="navbar navbar-expand-lg navbar-dark">
                    <a style={styles.brand} className="navbar-brand" href="/">Kyle Foster</a>
                    <button style={{border:"none"}} className="navbar-toggler" type="button" data-toggle="collapse" 
                     data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a style={styles.link} className="nav-item nav-link active" href="/">Home</a>
                            <a style={styles.link} className="nav-item nav-link" href="/blog">Blog</a>
                            <a style={styles.link} className="nav-item nav-link" href="/hackathon">Hackathon</a>
                            <a style={styles.link} className="nav-item nav-link " href="/reachout">Contact Me</a>
                        </div>
                    </div>
                </nav>
    
            </div>
        );
    }

    

}

const styles = {
    body: {
        backgroundColor: colors.darkGrey
    },
    link: {
        color: colors.light,
        fontFamily: fonts.secondary
    },
    brand: {
        color: colors.light,
        fontWeight: "bold",
        fontFamily: fonts.primary
    },
    margin: {
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1000
    }
}

export default NavBar