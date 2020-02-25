import React, { Component } from 'react';
const {colors, shadows} = require("../../../utils/CSS");

class ImgSlider extends Component {
    
    
    constructor(props){
        super(props);

        this.state = {
            count: 0
        }
    }

    previous = () => {
        // console.log("previous");
        this.setState({ count: this.state.count - 1 });
        if(this.state.count === 0){
            this.setState({ count : this.props.imgList.length - 1 });
        }
        // console.log("New count", this.state.count);
    }

    next = () => {
        // console.log("next");
        this.setState({ count: this.state.count + 1 });
        if(this.state.count === this.props.imgList.length -1){
            this.setState({ count: 0 });
        }
        // console.log("New count", this.state.count);
    }

    render(){
        return(
            <div>
                <button style={styles.button} onClick={() => this.previous()}>&#8666;</button>
    
                <img style={styles.image} src={this.props.imgList[this.state.count]} alt="sliderImg" />
    
                <button style={styles.button} onClick={() => this.next()}>&#8667;</button>
            </div>
        )
    }
};

const styles = {
    button: {
        margin: "10px",
        border: "none",
        color: colors.light,
        boxShadow: shadows.div3,
        backgroundColor: colors.accent
    },
    image: {
        height:"100%",
        width:"100%",
        minWidth: "250px",
        minHigth: "280px",
        maxHeight: "80vh",
        maxWidth: "90vw"
    }
}


export default ImgSlider;