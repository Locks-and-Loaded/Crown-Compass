import React from 'react';

const HairCareServiceSection = ({ title, children }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    );
};

export default HairCareServiceSection;
