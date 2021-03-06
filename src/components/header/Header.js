import React from 'react'
import './_header.scss'
import Logo from './../../assets/logo.png'

const Header = () => {
    return (
        <header data-test="header-component">
            <div className="wrap">
                <div className="logo">
                    <img data-test="logoIMG" src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header

