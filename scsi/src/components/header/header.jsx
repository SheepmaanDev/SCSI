import Logo from '../../assets/scs.png'

import './header.sass'

const Header = () => {
    return (
        <header className='header'>
            <nav className='header__navbar'>
                <a className='header__navbar__left' href="">
                    <img className='header__navbar__left__logo' src={Logo} alt="" />
                    <h1 className='header__navbar__left__title'>SCS Informatique</h1>
                </a>
                <ul className='header__navbar__middle'>
                    <li><a href="">Accueil</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
                <a className='header__navbar__right' href="#">TéléAssistance</a>
            </nav>
        </header>
    )
}

export default Header