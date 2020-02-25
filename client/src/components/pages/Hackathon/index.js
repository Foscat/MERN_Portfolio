import React, { Component } from 'react';
import { Row, Col, Card, Button } from 'reactstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import FlexTron from "../../parts/FlexTron";
import ImgSlider from "../../parts/ImgSlider";
import HeaderText from '../../parts/HeaderText';
import TextCard from '../../parts/TextCard';
import { MedArtLink, TrilogyArtLink } from '../../parts/Links';
import { colors, fonts, shadows } from "../../../utils/CSS";

class Hackathon extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            postPool: [],
            show: false,
            title: "",
            text: ""
        };
    };

    componentDidMount(){
        // console.log("Hackathon mount state:", this.state);
    };

    componentDidUpdate(){
        // console.log("Hackathon update state:", this.state);
    };

    flowChartModal = (chartArray) => {
        let text = <ImgSlider className="card-img" imgList={chartArray}/>
        this.setState({ title: "Codeflows", text: text, show: true  });
    }

    render() {
        return (
            <div style={styles.page}>
                <SweetAlert
                    show={this.state.show}
                    title={<HeaderText>{this.state.title}</HeaderText>}
                    confirmBtnStyle={{backgroundColor:colors.accent,color:colors.light}}
                    confirmBtnText="Close"
                    onConfirm={() => this.setState({ show: false })}
                    className="col-9 card mx-auto"
                >
                    <div style={styles.sweetBox}>
                        {this.state.text}
                    </div>
                </SweetAlert>

                <Row>
                    <FlexTron
                        style={styles.flexTron}
                        subStyle={styles.flexSub}
                        className="col-11 mx-auto"
                        title="2019 Daimler Hackathon"
                        subtitle="5 first year devs + 1 deisel tech + 1 documents expert + 1 lawyer...
                        Took on 20 other teams filled of senior devs, and came out on top.">
                            <TextCard
                                style={{backgroundColor:colors.accent, justifyContent:"centera"}}
                                titleStyle={{color: colors.light, textShadow: shadows.text1}}
                                className="col mx-auto"
                                title="Tech Assist"
                                subtitle="Links to different repos that hold phases ans pieces of the app">
                                   
                                   {/* <ul style={{listStyle:"none"}}>
                                       <li style={styles.li}> */}
                                           <a href="https://github.com/anirudh-goyal/daimlerHackathon2019">
                                               <Button style={styles.btn}>
                                                   Original Hackathon Version
                                               </Button>
                                           </a>
                                       {/* </li>
                                       <li style={styles.li}> */}
                                           <a href="https://github.com/Foscat/TechAssist_Public">
                                               <Button style={styles.btn}>
                                                   Final React Native Front End
                                               </Button>
                                           </a>
                                       {/* </li>
                                       <li style={styles.li}> */}
                                           <a href="https://github.com/Foscat/XML_Sorter_Microservice">
                                               <Button style={styles.btn}>
                                                   XML Parser Service
                                               </Button>
                                           </a>
                                       {/* </li>
                                   </ul> */}

                                   <TextCard
                                   style={{backgroundColor: colors.light}}
                                    className="mx-auto mt-2"
                                    title="Articles written about event"
                                    >
                                    <Row className="mx-auto">
                                        <Col sm="6">
                                            <MedArtLink />
                                        </Col>
                                        <Col sm="6">
                                            <TrilogyArtLink />
                                        </Col>
                                    </Row>
                                   </TextCard>
                            </TextCard>
                        </FlexTron>

                    {/* <Col sm="9" className="mx-auto">
                        <iframe 
                            className="rounded"
                            height="600px"
                            width="100%" 
                            title="Austin Startups Article"
                            src="https://austinstartups.com/21-teams-gather-at-capital-factory-to-hack-daimler-north-americas-voice-technology-for-truck-77ed19862592" 
                        />
                    </Col> */}

                    <Card 
                        style={{border: "none", backgroundColor: colors.lightGrey, marginBottom: "20px"}}
                        className="mx-auto col-md-8">
                        <img className="card-img m-1" alt="collaboration" src="./images/chatBotting.jpg" />

                        <img className="card-img m-1" alt="groupPhoto" src="./images/focus.jpg" />

                        <img className="card-img m-1" alt="big check" src="./images/bigCheck.jpg" />
                    </Card>

                    {/* <Col sm="9" className="mx-auto">
                        <iframe 
                            className="rounded"
                            height="600px"
                            width="100%"
                            title="Trilogy Ed Article"
                            src="https://www.trilogyed.com/blog/a-friendship-yields-a-championship-two-smu-coding-boot-camp-students-win-major-hackathon/"
                        />
                    </Col>
    */}
                </Row>
            </div>
        );
    };
};

const styles = {
    page: {
        paddingTop: "5rem"
    },
    flexTron: {
        backgroundColor: colors.light,
        color: colors.darkGrey
    },
    flexSub: {
        fontFamily: fonts.primary,
        color: colors.darkGrey,
        textShadow: shadows.text1
    },
    li: {
        display: "inline",
        margin: "5px"
    },
    btn: {
        backgroundColor: colors.accent,
        color: colors.light,
        boxShadow: shadows.div1,
        fontWeight: 600,
        margin: "10px",
        border: "none"
    }
};

export default Hackathon;