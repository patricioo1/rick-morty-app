import React from 'react'
import Picture from '../../images/Left.png'

const Layout = ({ children }) => {
    return (
        <div className='layout'>
            <div className="rickMorty">
                <img src={Picture} alt="Rick and Morty" />
            </div>
        {children}
      </div>
    );
};

export default Layout;