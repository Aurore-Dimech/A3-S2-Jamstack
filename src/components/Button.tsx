import React from 'react';

type ButtonProps = {
    label: String;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({label, onClick}) => {
    return <button onClick={onClick} className="bg-black text-white p-2 rounded-md">{label}</button>
}

export default Button;