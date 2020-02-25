import React from 'react';
import { colors, fonts, shadows} from "../../../utils/CSS";

const HeaderText = props => {
    return(
        <div style={{
            fontSize: "1.5em",
            fontFamily: fonts.primary,
            color: colors.darkGrey,
            textShadow: shadows.text2
        }}>
            {props.children}
        </div>
    )
}

export default HeaderText;