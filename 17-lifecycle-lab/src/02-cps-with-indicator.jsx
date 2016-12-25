/**
 * Lab 02: CPS monitor with indicator
 *
 * Add an indicator panel to the CPS monitor
 * that shows a green rectangle if user clicks fast enough
 * or a red rectangle if user clicks too slow
 *
 * Decide how to share information between the components
 * and what values to pass when creating the Indicator
 */

import React from 'react';

export default function CPSIndicator(props) {
    return (
       <div style={{backgroundColor : props.color, width:"50px", height:"50px", display:"inline-block"}} />
    )
}

CPSIndicator.propTypes = {
    color: React.PropTypes.string
}

CPSIndicator.defaultProps = {
    color: "white"
}



