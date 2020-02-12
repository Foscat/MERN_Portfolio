import React, { Component } from 'react';
import { Row } from 'reactstrap';
import SweetAlert from 'react-bootstrap-sweetalert';
import TextCard from '../../parts/TextCard';
import API from "../../../utils/API";
import FlexTron from "../../parts/FlexTron";
import CSS from "../../../utils/CSS";

class ClientBlog extends Component {
    
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
        console.log("ClientBlog mount state:", this.state);
        this.getApproved()
    };

    componentDidUpdate(){
        console.log("ClientBlog update state:", this.state);
    };

    getApproved = () => {
        API.getApprovedPosts().then(res => {
            console.log("Appproved post res", res);
            this.setState({ postPool: res.data });
        }).catch(err => {
            this.setState({ show: true, title: "Error", text: `You hit an error: ${err}`, trys: this.state.trys+1});
        });
    }

    render() {
        return (
            <div style={styles.page}>
                <SweetAlert
                    show={this.state.show}
                    title={this.state.title}
                    onConfirm={() => this.setState({ show: false })}
                    confirmBtnText="Close"
                    confirmBtnStyle={{backgroundColor:CSS.colors.accent,color:CSS.colors.light}}
                    className="col-10 card mx-auto"
                >
                    <div style={styles.sweetBox}>
                        {this.state.text}
                    </div>
                </SweetAlert>

                <Row>
                <FlexTron
                    style={{backgroundColor: CSS.colors.light}}
                    className="col-11 mx-auto"
                    title="Welcome to my blog!"
                    subtitle="This is where I post my thoughts on tech and buisness."/>
                    {this.state.postPool.length ? this.state.postPool.map((post,i) => {
                        return(
                            <TextCard
                                style={{backgroundColor: CSS.colors.light}}
                                className="col-8 mx-auto"
                                key={i}
                                subtitle={post.title}>
                                    <p> {post.body} </p>
                            </TextCard>
                        )
                    }) : null}
                </Row>
            </div>
        );
    };
};

const styles = {
    page: {
        paddingTop: "4rem",
        margin: "0 auto"
    }
};

export default ClientBlog;