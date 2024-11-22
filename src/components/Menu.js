import '../css/menu-bar.scss'

function Menu() {

    const menu = [
        {
            id: 1,
            name: 'Home',
            description: 'Home',
        },
        {
            id: 2,
            name: 'News',
            description: 'News',
        },
        {
            id: 3,
            name: 'About',
            description: 'About',
        },
        {
            id: 4,
            name: 'Contact',
            description: 'Contact',
        },
    ];

    return (
        <div className='menu'>
            {
                menu.map((i) => 
                    <span className='menu-title'>{i.name}</span>
                    )
            }
        </div>
    );
}

export default Menu;