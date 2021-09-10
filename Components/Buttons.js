import React from 'react'
import './Buttons.css'

const STYLES = ['btn-primary', 'btn-outline', 'btn-submit'];
const SIZES = ['btn-wide', 'btn-mobile'];
const COLOR = ['black', 'white'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor 
}) => {
    
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
   
    const checkButtonSize = STYLES.includes(buttonSize) ? buttonStyle : SIZES[0];
    
    const checkButtonColor = STYLES.includes(buttonColor) ? buttonStyle : null;
   
    return(
        <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
        onClick ={onClick}
        type={type}
        >
            {children}
        </button>
    );
};