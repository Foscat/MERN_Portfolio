import React from 'react';

const ResumeView = props => {
    return(
        <>
            {props.resumeImages.length ? (
                props.resumeImages.map((img, i) => {
                    return <img height="50%" width="100%" src={img} alt={`resumeImage${i+1}`} key={i} />
                })
            ): null}
        </>
    );
};

export default ResumeView;