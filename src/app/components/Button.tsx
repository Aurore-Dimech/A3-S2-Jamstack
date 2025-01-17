import React from 'react';

type ButtonProps = {
    label: String;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
    return <button onClick={onClick}>{label}</button>
}

export default Button;