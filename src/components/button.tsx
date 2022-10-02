import React from 'react';

interface Props {
    type: 'submit' | 'reset' | 'button';
    className?: string

}
const Button: React.FC<Props> = ({
    type, className
}) => {
    return (
        <button
            type={type}
            className={`c-button ${className ? className : ""}`}
        >
            Submit</button>

    )
}
export default Button;