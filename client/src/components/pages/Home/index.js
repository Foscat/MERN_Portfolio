import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
// import API from '../../../utils/API';
import SweetAlert from 'react-bootstrap-sweetalert';
import TextCard from '../../parts/TextCard';
import SkillTable from '../../parts/SkillTable';
import ProjectSelect from '../../parts/ProjectSelect';
import ProjectDisplay from '../../parts/ProjectDisplay';
import ImgSlider from "../../parts/ImgSlider";
import Education from '../../parts/Education';
import ResumeDL from '../../parts/ResumeDL';
import ResumeView from '../../parts/ResumeView';
import HeaderText from "../../parts/HeaderText";

const CSS = require("../../../utils/CSS");
const projects = require("../../../utils/projectInfo");

class Home extends Component{
    constructor(props){
        super(props);

        // These are base state aspects that makes this page work
        this.state = {

            // Modal attributes
            show: false,
            title: "Sweetie",
            text: null,

            resume: false,
            projectsShown: []

        }
    }

    // When page loads see inital state value
    componentDidMount(){
        console.log("Mount State: " , this.state);
    }

    // Every time state changes this function fires to give you a update all changes and thier values
    componentDidUpdate(){
        console.log("Updated State: ", this.state);
    }

    // General handler for inputs thats value is to change the state
    // If state does not exsist it makes a state field with its name
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    handleRadioSelect = type => {
        // console.log("Radio value", type)
        this.setState({ projectsShown: projects[type] });
    }

    flowChartModal = (chartArray) => {
        let text = <ImgSlider className="card-img" imgList={chartArray}/>
        this.setState({ title: "Codeflows", text: text, show: true  });
    }

    showDownloads = () => {
        this.setState({ 
            title: "My Resume", 
            text: <ResumeView resumeImages={["./images/resImg1.png", "./images/resImg2.png"]} />, 
            show: true  
        });
    }

    showDLoptions = () => this.setState({ title:"Download options", text: <ResumeDL className="row" style={{margin:"3px"}} />, show: true });

    render() {
        
        return (
            <div className="row" style={styles.page}>

                {/* Generic model waiting for function to show and fill it */}
                <SweetAlert
                    show={this.state.show}
                    title={<HeaderText>{this.state.title}</HeaderText>}
                    onConfirm={() => this.setState({ show: false })}
                    confirmBtnText="Close"
                    confirmBtnStyle={styles.closeBtn}
                    className="col-10 card mx-auto"
                    style={{backgroundColor: CSS.colors.light, justifyContent: "center"}}
                >
                    <div style={styles.sweetBox}>
                        {this.state.text}
                    </div>
                </SweetAlert>

               <Row style={styles.row}>
                    <Col style={styles.portCol} sm="3">
                        <img style={styles.portImg} className="card-img" src="./images/linkedInPic.jpg" alt="profilePic" />

                        <div style={{justifyContent: "space-around", marginTop: "8px"}} className="row">
                            <div className="col-4">
                                <a href="https://github.com/Foscat">
                                    <img alt="github icon" src="./images/GitHub-Mark-32px.png" />
                                </a>
                            </div>
                            <div className="col-4">
                                <a href="https://www.linkedin.com/in/kylefoster-dev/">
                                    <img alt="linked-in icon" src="./images/In-Black-34px-TM.png" />
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Education className="col-3 mb-2" showResumes={this.showDownloads} showDLoptions={this.showDLoptions}/>
                    <Col sm="4">
                        <SkillTable style={styles.skillForm} />
                    </Col>

                    <TextCard
                        style={styles.proCard}
                        titleStyle={{fontSize: "2.5em"}}
                        className="col-md-4 mx-auto"
                        title="Projects"
                        subtitle="Choose a option to filter types of projects">
                            <ProjectSelect handleRadioSelect={this.handleRadioSelect}/>
                    </TextCard>
               </Row>

               <Row className="mt-3" style={styles.row}>

                    <div className="mx-auto">
                        {this.state.projectsShown.length ? (
                            <Button style={styles.closeBtn} onClick={() => this.setState({ projectsShown: [] })}>
                                Close Projects
                            </Button>
                        ): null}

                        {this.state.projectsShown.length ? (this.state.projectsShown.map((project,i) =>{
                            return(
                                <ProjectDisplay
                                key={i}
                                title={project.name}
                                subtitle={project.description}
                                img={project.preview}
                                tech={project.extras}
                                repo={project.repoLink}
                                deployed={project.deployLink}
                                flowCharts={project.codeFlows}
                                flowModal={this.flowChartModal}
                                downloadable={project.dlFile}
                                index={i}
                                />
                            )
                        })): null}
                    </div>
                    
               </Row>
                
                
            </div>
        );
    }
}

const styles = {
    page: {
        paddingTop: "5rem",
        margin: "10px",
        justifyContent: "center"
    },
    sweetBox:{ 
        maxHeight: "50vh", 
        minWidth: "50%", 
        overflow: "auto" 
    },
    portCol: {
        border: "none",
        justifyContent: "space-around",
        margin: "10px"
    },
    portImg: {
        boxShadow:CSS.shadows.div2,
        borderRadius: "7px"
    },
    row:{
        display: "flex",
        justifyContent:"space-around",
        width: "100%"
    },
    skillForm: {
        justifyContent: "space-around",
        backgroundColor: CSS.colors.light,
        padding: "10px",
        borderRadius: "7px",
        boxShadow:CSS.shadows.div2
    },
    proCard:{
        margin: "0 10% 30px",
        borderRadius: "7px",
        backgroundColor: CSS.colors.light,
        border: "none",
        boxShadow:CSS.shadows.div2
    },
    closeBtn: {
        backgroundColor: CSS.colors.accent,
        color: CSS.colors.light,
        boxShadow: CSS.shadows.div3,
        margin: "10px",
        border: "none"
    },
    header: {
        fontSize: "2.5em",
        fontFamily: CSS.fonts.primary,
        color: CSS.colors.darkGrey,
        textShadow: CSS.shadows.text2
    }
}

export default Home;