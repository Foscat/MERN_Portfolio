import React, { Component } from 'react';
import { Card, CardBody, CardHeader, CardTitle, CardSubtitle, CardImg, Col, Popover, PopoverHeader } from 'reactstrap';
import { colors, shadows, fonts } from "../../../utils/CSS"

class ProjectDisplay extends Component {

    constructor(props){
        super(props);

        this.state = {
            hover: false,
            depHov: false,
            gitHov: false,
        }
    };

    toggleDpHover = () => {
        this.setState({ depHov: !this.state.depHov });
    }

    toggleGitHover = () => {
        this.setState({ gitHov: !this.state.gitHov });
    }

    checkDpHover = () => {
        if(!this.state.depHov)this.setState({ depHov: true });
    }

    checkGitHover = () => {
        if(!this.state.gitHov)this.setState({ gitHov: true });
    }

    render(){

        return(
            <Card style={styles.card} className="col-10 mx-auto">
                <CardHeader style={{backgroundColor:"transparent", borderColor: colors.accent}}>
                    <CardTitle style={styles.title}>
                        {this.props.title} 
                    </CardTitle>
                </CardHeader>

                <CardBody style={styles.cardBody}>
                    <CardSubtitle style={styles.subtitle}>
                        {this.props.subtitle}

                        <hr />

                        <ul style={styles.ul}>
                            <li className="mt-1"  style={styles.li1}>Tech used:</li>
                            {this.props.tech.length ? this.props.tech.map((tech,i) => {
                                return <li className="mt-1" style={styles.li2} key={i}>{tech}</li>
                            }) : null}
                        </ul>

                    </CardSubtitle>
                    <hr />
                    <CardImg style={styles.preview} src={this.props.img} alt="Website screenshot" />

                </CardBody>

                <CardHeader className="row" style={{justifyContent: "space-around"}}>
                    <Col sm="1">
                        <a target="_blank" rel="noopener noreferrer"
                            id={`repoLink${this.props.index}`} href={this.props.repo} onMouseEnter={this.toggleGitHover} 
                             onMouseOver={()=> this.checkGitHover()} onMouseLeave={this.toggleGitHover}>
                            <img src="./images/Repo.png" alt="link to repo" />
                        </a>
                        <Popover placement="left" isOpen={this.state.gitHov} target={`repoLink${this.props.index}`} toggle={this.toggleGitHover}>
                            <PopoverHeader>Link to Github repository</PopoverHeader>
                        </Popover>
                    </Col>
                    <Col sm="1">
                        {this.props.deployed ? (
                            <div>
                                <a target="_blank" rel="noopener noreferrer"
                                id={`deployedLink${this.props.index}`} href={this.props.deployed} onMouseEnter={this.toggleDpHover} 
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
        boxShadow:shadows.div2,
        borderRadius: "7px",
        margin: "5px",
        backgroundColor: colors.light,
        maxWidth:"90vw"
    },
    cardBody: {
        display: "flex",
         flexDirection: "column",
        justifyContent: "center",
        fontSize: "1.2rem"
    },
    title: {
        fontFamily: fonts.primary,
        fontSize: "2.5rem",
        color: colors.darkGrey,
        textShadow: shadows.text2,
    },
    subtitle: {
        fontFamily: fonts.secondary,
        display: "flex",
        flexWrap: "wrap",
        wordWrap: "break-word",
        width: "80%"
    },
    img:{
        maxWidth: "80vw",
    },
    ul:{
        display:"flex",
        flexWrap:"wrap"
    },
    li1:{
        listStyle:"none",
        fontWeight:600,
        fontFamily:fonts.primary
    },
    li2:{
        display:"inline",
        margin:"0 10px",
        fontWeight:500,
        fontFamily:fonts.secondary
    }
};

export default ProjectDisplay;