import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardSubtitle, CardImg, Col, Popover, PopoverHeader } from 'reactstrap';
const CSS = require("../../../utils/CSS");

class ProjectDisplay extends Component {

    constructor(props){
        super(props);

        this.state = {
            hover: false,
            depHov: false,
            gitHov: false,
        }
    };

    toggleHover = () => {
        this.setState({ hover: !this.state.hover });
    }
    
    toggleDpHover = () => {
        this.setState({ depHov: !this.state.depHov });
    }

    toggleGitHover = () => {
        this.setState({ gitHov: !this.state.gitHov });
    }

    checkHover = () => {
        if(!this.state.hover)this.setState({ hover: true });
    }

    checkDpHover = () => {
        if(!this.state.depHov)this.setState({ depHov: true });
    }

    checkGitHover = () => {
        if(!this.state.gitHov)this.setState({ gitHov: true });
    }

    render(){
        let cursorStyle;
        if(this.state.hover) cursorStyle = {cursor: "url('./images/codeFlow_tran.png') 4 12, auto"};

        return(
            <Card style={styles.card} className="col-12 mx-auto">
                <CardHeader style={{backgroundColor:"transparent", borderColor: CSS.colors.accent}}>
                    <CardTitle style={styles.title}>
                        {this.props.title} 
                    </CardTitle>
                </CardHeader>

                <CardBody style={styles.cardBody}>
                    <CardSubtitle style={styles.subtitle}>
                        {this.props.subtitle}

                        <hr />

                        <ul style={styles.li1}>
                            <li>Tech used:</li>
                            {this.props.tech.length ? this.props.tech.map((tech,i) => {
                                return <li style={styles.li2} key={i}>{tech}</li>
                            }) : null}
                        </ul>
                    </CardSubtitle>
                    <hr />
                    <CardImg onMouseEnter={this.toggleHover} onMouseOver={()=> this.checkHover()} onMouseLeave={this.toggleHover}
                     onClick={()=>this.props.flowModal(this.props.flowCharts)} 
                        style={{...styles.preview, ...cursorStyle}} src={this.props.img} alt="codeflow" />

                </CardBody>

                <CardHeader className="row" style={{justifyContent: "space-around"}}>
                    <Col sm="3">
                        <a id={`repoLink${this.props.index}`} href={this.props.repo} onMouseEnter={this.toggleGitHover} 
                             onMouseOver={()=> this.checkGitHover()} onMouseLeave={this.toggleGitHover}>
                            <img src="./images/Repo.png" alt="link to repo" />
                        </a>
                        <Popover placement="left" isOpen={this.state.gitHov} target={`repoLink${this.props.index}`} toggle={this.toggleGitHover}>
                            <PopoverHeader>Link to Github repository</PopoverHeader>
                        </Popover>
                    </Col>
                    <Col sm="3">
                        {this.props.deployed ? (
                            <div>
                                <a id={`deployedLink${this.props.index}`} href={this.props.deployed} onMouseEnter={this.toggleDpHover} 
                                onMouseOver={()=> this.checkDpHover()} onMouseLeave={this.toggleDpHover}>
                                    <img src="./images/Deployed.png" alt="link to deployed version" />
                                </a>

                                <Popover placement="right" isOpen={this.state.depHov} target={`deployedLink${this.props.index}`} toggle={this.toggleDpHover}>
                                    <PopoverHeader>Link to deployed version</PopoverHeader>
                                </Popover>
                            </div>
                        ): <h5>No deployed version avalible</h5>}
                    </Col>
                </CardHeader>

            </Card>
        )
    }
}

const styles = {
    card: {
        boxShadow:CSS.shadows.div2,
        borderRadius: "7px",
        margin: "5px",
        backgroundColor: CSS.colors.light
    },
    cardBody: {
        display: "flex",
        flex:1, flexDirection: "column",
        justifyContent: "center",
        fontSize: "1.2rem"
    },
    title: {
        fontFamily: CSS.fonts.primary,
        fontSize: "2.5rem",
        color: CSS.colors.darkGrey,
        textShadow: CSS.shadows.text2,
    },
    subtitle: {
        fontFamily: CSS.fonts.secondary
    },
    img:{
        maxWidth: "80vw",
    },
    li1:{
        listStyle:"none",
        marginTop: "10px",
        fontWeight:600,
        fontFamily:CSS.fonts.primary
    },
    li2:{
        display:"inline",
        margin:"0 10px",
        fontWeight:500,
        fontFamily:CSS.fonts.secondary
    }
};

export default ProjectDisplay;