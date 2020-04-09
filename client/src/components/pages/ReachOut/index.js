import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import SweetAlert from "react-bootstrap-sweetalert";
import TextCard from '../../parts/TextCard';
import ConForm from '../../parts/ConForm';
import ResumeDL from "../../parts/ResumeDL";
import { HackathonLink, HomeLink, BlogLink } from "../../parts/Links";
import API from "../../../utils/API";
import { colors, shadows} from "../../../utils/CSS";
import HeaderText from '../../parts/HeaderText';

class ReachOut extends Component {

    constructor(props){
        super(props);

        this.state={
            senderName: "",
            senderConInfo: "",
            senderMessage: "",
            sent: false,

            // modal atters
            show: false,
            text: "",
            title: ""
        }
    }

    componentDidMount(){
        // console.log("ReachOut Component mount state:", this.state);
    }

    componentDidUpdate(){
        // console.log("ReachOut update state:", this.state);
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    sendReachOutMsg = () => {
        let s = this.state;

        let errorContact = 
            <div>
                <p>Something went wrong with my message system and it did not send. Feel free to call me at
                <span><a href="tel:4696180410">469-618-0410</a></span>
                </p>
            </div>

        if(s.senderName.length === 0) this.setState({ title: "Name", text: "Please give me your name so I know who you are.", show: true});
        else if(s.senderConInfo.length === 0) this.setState({ title:"Contact Info", text: "Please give me a way to contact you back.", show: true});
        else if(s.senderMessage.length === 0) this.setState({ title: "Content", text: "Please tell me what you had to say.", show: true});
        else{
            
            API.reachOutEmail({
                reachoutInfo: {
                    name: s.senderName,
                    contactInfo: s.senderConInfo,
                    content: s.senderMessage
                }
            }).then(res => {
                console.log("Email res", res);
                this.setState({ sent: true });
            }).catch(err => {
                console.error("Email error", err);
                this.setState({ 
                    show: true,
                    text: errorContact
                 });
            })
        }
    }

    render() {
        return (
            <div style={styles.page}>
                <SweetAlert
                    show={this.state.show}
                    title={<HeaderText>{this.state.title}</HeaderText>}
                    onConfirm={() => this.setState({ show: false })}
                    confirmBtnText="Close"
                    confirmBtnStyle={{backgroundColor:colors.accent,color:colors.light}}
                    className="col-10 card mx-auto"
                >
                    <div style={styles.sweetBox}>
                        {this.state.text}
                    </div>
                </SweetAlert>
            
                <Row>
                    

                    <Col className="mx-auto">

                    {this.state.sent ? (
                            <TextCard
                                style={{backgroundColor:colors.light}}
                                className="col-10 mx-auto"
                                title="Thanks for reaching out!"
                                subtitle="Please take a copy of my resume if you don't already have one.">

                                    <ResumeDL className="row"/>
                                    <h3 className="text-center mt-3"> Or continue browsing</h3>
                                    <hr></hr>
                                    <Row style={{justifyContent:"space-around"}}>
                                        <Col  sm="4">
                                            <HomeLink className="mx-auto"/>
                                        </Col>
                                        <Col sm="4">
                                            <HackathonLink />
                                        </Col>
                                        <Col sm="4">
                                            <BlogLink />
                                        </Col>
                                    </Row>

                                    
                            </TextCard>
                        ): (
                            <TextCard
                            style={{backgroundColor: colors.light,maxWidth:"900px"}}
                            title="Reach out form"
                            className="col-10 mx-auto"
                            subtitle="Send me a message with your contact info.">
                                <ConForm 
                                    handleInputChange={this.handleInputChange}
                                    handleFormSubmit={this.sendReachOutMsg}
                                />
                            </TextCard>
                        )}

                        
                    </Col>

                </Row>
            </div>
        );
    };
}

const styles = {
    page: {
        paddingTop: "5rem"
    },
    sweetBox:{ 
        maxHeight: "50vh", 
        minWidth: "50%", 
        overflow: "auto" 
    },
    header: {
        color: colors.accent,
        textShadow: shadows.text1
    }
};

export default ReachOut;