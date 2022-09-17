import React from 'react';

// typing style props

type ButtonStyleProps = {
    btnStyle : React.CSSProperties
}

const ButtonStyle = (props : ButtonStyleProps) => {

  return (
    <>
        <h5 style={props.btnStyle}>Style Type</h5>
    </>
  )
}

export default ButtonStyle;
