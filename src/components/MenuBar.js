import '../css/menu-bar.scss'
import Logo from './Logo';
import Menu from './Menu';

function MenuBar() {
    return (
        <div className="menu-bar">
            <Logo />
            <Menu />
        </div>
    );
}

export default MenuBar;