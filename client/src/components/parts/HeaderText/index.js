import React from 'react';
import CSS from "../../../utils/CSS";

const HeaderText = props => {
    return(
        <div style={{
            fontSize: "1.5em",
            fontFamily: CSS.fonts.primary,
            color: CSS.colors.darkGrey,
            textShadow: CSS.shadows.text2
        }}>
            {props.children}
        </div>
    )
}

export default HeaderText;