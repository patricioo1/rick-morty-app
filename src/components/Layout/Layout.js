import React from 'react'
import Picture from '../../images/Left.png'

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <div className="layout-left">
            <div className="rickMorty">
                <img src={Picture} alt="Rick and Morty" />
            </div>
            </div>
        {children}
      </div>
    );
};

export default Layout;