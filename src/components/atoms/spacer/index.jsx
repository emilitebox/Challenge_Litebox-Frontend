import React from "react";

const CommonSpacer = (
    {marginTop, marginRight, marginBottom, marginLeft, paddingTop, paddingRight, paddingBottom, paddingLeft}
) => {
    return (
        <>
            <div style={{
                marginTop: marginTop,
                marginRight: marginRight,
                marginBottom: marginBottom,
                marginLeft: marginLeft,
                paddingTop: marginTop,
                paddingRight: marginRight,
                paddingBottom: marginBottom,
                paddingLeft: marginLeft
                }}
            >
            </div>
        </>
    );
}

export default CommonSpacer;