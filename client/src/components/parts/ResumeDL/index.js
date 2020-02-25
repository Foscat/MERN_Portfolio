import React from 'react';
import { Button } from 'reactstrap';
import { shadows } from "../../../utils/CSS";

const ResumeDL = props => {
    return(
        <div className={props.className} style={{justifyContent: "space-between",...props.style}}>

            <div className="col-6">
                <a href="./downloads/Kyle_Foser_Résumé.pdf" download="Kyle_Foser_Résumé.pdf">
                    <Button style={{boxShadow: shadows.div2}} >
                        <img src="./images/PDF_DL.png" alt="download pdf" />
                    </Button>
                </a>
            </div>

            <div className="col-6">
                <a href="./downloads/Kyle_Foser_Résumé.docx" download="Kyle_Foser_Résumé.docx">
                    <Button style={{boxShadow: shadows.div2}} >
                        <img src="./images/Word_DL.png" alt="download pdf" />
                    </Button>
                </a>
            </div>

        </div>
    );
};

export default ResumeDL;