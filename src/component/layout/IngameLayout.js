import React from 'react';
import IngameNavbar from '../IngameNavbar';

const IngameLayout = ({children}) => (
    <>
        <IngameNavbar/>
        <>
        {children}
        </>
    </>
);

export default IngameLayout;