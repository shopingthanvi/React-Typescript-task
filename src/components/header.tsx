import React from 'react';

interface Props {
    label: string;
    component?: React.ReactNode;
    onLabelClick?:()=>void;
}

const Header: React.FC<Props> = ({
    label, component,onLabelClick
}) => {
    return (
        <header className="c-header">
            <div>
               <h2 className="c-header__label" onClick={onLabelClick}>{label}</h2> 
            </div>
            <div>
                {component}
            </div>
        </header>
    )
}
export default Header;