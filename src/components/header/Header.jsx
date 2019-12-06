import React from 'react';
import HeaderItem from './headerItem';

// files
import logo__img from '../../media/logo/Logo.svg';

// style
import classNamees from './Header.module.css';

const { header } = classNamees;

const Header = (props) => {
    return (
        <header>
            <ul className={header}>
                <HeaderItem content={<img src={logo__img} alt="logo" />} link={'/'} />
                <HeaderItem content={'Our coffee'} link={'/ourCoffe'} />
                <HeaderItem content={'For your pleasure'} link={'/Coffee'} />
                <HeaderItem content={'Contact as'} link={'/Contacts'} />
            </ul>
        </header>
    )
}

export default Header;