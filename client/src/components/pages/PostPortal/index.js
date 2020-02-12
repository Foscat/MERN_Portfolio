import React, { Component } from 'react';
import { Row, Button, Card } from 'reactstrap';
import SweetAlert from "react-bootstrap-sweetalert";
import FlexTron from '../../parts/FlexTron';
import TextCard from '../../parts/TextCard';
import BlogForm from '../../parts/BlogForm';
import EditBlog from "../../parts/EditBlog";
import API from "../../../utils/API";
import DBKeyInput from '../../parts/DBKeyInput';
import CSS from "../../../utils/CSS";
import HeaderText from '../../parts/HeaderText';

class PostPortal extends Component {

    constructor(props){
        super(props);

        this.state = {
            blogTitle:"",
            dbKeyInput: "",
            blogContent: "",
            pubArt: false,

            editTitle: "",
            edit_dbKeyInput: "",
            editBody: "",
            editShow: false,

            conType: "",
            // Any list of posts will be put and mapped here
            postPool: [],

            // modal atters
            show: false,
            title: "",
            text: ""
        };
    };

    componentDidMount(){
        // console.log("PostPortal mount state:", this.state);
    };

    componentDidUpdate(){
        // console.log("PostPortal update state:", this.state);
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
    }

    loopArticle = artArray => {
        return(
            artArray.map((post,i) => {
                return(
                    <TextCard
                      className="mx-auto mt-2 mb-2 col-8"
                      key={i}
                      subtitle={post.title}>
                        <p> {post.body} </p>
                        <Button onClick={() => this.deletePost(post._id)} color="danger">X</Button>
                        <Button onClick={() =>this.editModal(post,post._id)} style={styles.showBtn}>Edit</Button>
                    </TextCard>
                )
            })
        )
    }

    handleRadioSelect = boo => this.setState({ pubArt: boo });
    handleRadioEditSelect = boo => this.setState({ editShow: boo });

    handleBlogSubmit = () => {
        let s = this.state;
        // console.log("submit blog:", s);
        API.addPost({
            title: s.blogTitle,
            body: s.blogContent,
            show: s.pubArt
        }).then(res => {
            // console.log("Add post response",res);
        }).catch(err => console.error("Add post error", err));
    }

    handleBlogUpdateSubmit = id => {
        let s = this.state;
        if(!s.editTitle || !s.editBody)this.setState({ title: "Error", text:"Fill out all fields", show: true });
        else{
            // console.log("update blog", id, s );
            API.updatePost(id, {title:s.editTitle, body:s.editBody, show:s.editShow }).then(res =>{
                // console.log("update post res", res);
                this.setState({ show: false });
                this.getApproved();
            }).catch(err => console.error("Update hit an error", err))
        }
    }

    deletePost = id => {
        API.deletePost(id, this.state.dbKeyInput).then(res => {
            // console.log("delete post res", res);
            this.getApproved();
        }).catch(err => console.error("Delete hit an error", err))
    }

    getApproved = () => {
        this.setState({ conType: "posted"  });
        API.getApprovedPosts().then(res => {
            // console.log("Appproved post res", res);
            this.setState({ postPool: res.data });
        }).catch(err => {
            this.setState({ show: true, title: "Error", text: `You hit an error: ${err}`});

        });
    }

    getDrafts = () => {
        this.setState({ conType: "drafts", show: false  });
            API.getDraftPosts(this.state.dbKeyInput).then(res => {
                // console.log("Daft post res", res);
                this.setState({ postPool: res.data });
            }).catch(err => {
                this.setState({ 
                    title: "Please input your db key you hit a \n"+err,
                    text: <DBKeyInput handleInputChange={this.handleInputChange} handleSubmit={this.getDrafts}/>,
                    show: true
                 });
            });

    }

    changeContent = conType => {
        if(conType === "drafts" && this.state.postPool.length){
            return this.loopArticle(this.state.postPool);
        }
        else if(conType === "posted" && this.state.postPool.length){
            return this.loopArticle(this.state.postPool);
        }
        else{
            return(
                <BlogForm
                    className="m-3"
                    handleInputChange={this.handleInputChange}
                    handleRadioSelect={this.handleRadioSelect}
                    handleBlogSubmit={this.handleBlogSubmit}/>
            )
        }
    }

    editModal = (post,id) => {
        this.setState({ 
            editTitle: post.title,
            editBody: post.body
        });
        this.setState({ 
            show: true,
            title: <HeaderText>Edit this post</HeaderText>,
            text: <EditBlog handleInputChange={this.handleInputChange}
                handleRadioSelect={this.handleRadioEditSelect} 
                handleBlogSubmit={this.handleBlogUpdateSubmit} 
                blog={post} />
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
                    confirmBtnStyle={styles.closeBtn}
                    className="col-10 card mx-auto"
                >
                    <div style={styles.sweetBox}>
                        {this.state.text}
                    </div>
                </SweetAlert>

                <Row>
                    <FlexTron
                        className="col-11 mx-auto"
                        title="What's up Kyle?"
                        subtitle="What do you have to tell the world today?" />

                    <Card className="mx-auto" style={styles.btnCard}>
                        <Button style={styles.showBtn} onClick={() => this.getDrafts()}>See drafts</Button>
                        <Button style={styles.showBtn}  onClick={() => this.getApproved()}>See posted articles</Button>
                        <Button style={styles.showBtn}  onClick={() => this.setState({ conType: "new" })}>Make a new post</Button>
                    </Card>
                </Row>
                <Row>
                    {this.changeContent(this.state.conType)}
                </Row>
                
            </div>
        );
    };
};

const styles = {
    page: {
        paddingTop: "3rem",
        margin: "20px"
    },
    sweetBox:{ 
        maxHeight: "50vh", 
        minWidth: "50%", 
        overflow: "auto" 
    },
    closeBtn: {
        backgroundColor: CSS.colors.accent,
        color: CSS.colors.light,
        boxShadow: CSS.shadows.div1,
        fontWeight: 600,
        margin: "10px",
        border: "none"
    },
    showBtn: {
        margin:"5px",
        backgroundColor:CSS.colors.accent,
        color: CSS.colors.black,
        fontWeight: 600
    },
    btnCard: {
        border: "none", 
        display: "flex", 
        flexWrap:"wrap", 
        flexDirection: "row", 
        justifyContent: "space-around", 
        padding: "2rem",
        backgroundColor: CSS.colors.light
    }
};

export default PostPortal;