import React from 'react';

const List = props => (
    <header className='navbar'>
        <nav className='navbar__navigation'>
            <div></div>
            <div className='navbar__logo'><a href='/'>Hackbuddy</a></div>
            <div className='spacer' />
            <div className='navbar__navigation-items'>
                <ul>
                  <li> <a href='#'>About</a> </li>
                  <li> <a href='#'>Meetups</a> </li>
                  <li> <a href='#'>WorkShops</a> </li>
                  <li> <a href='#'>Products</a> </li>
                  <li> <a href='#'>Sponsors</a> </li>
                  <li> <a href='#'>Blog</a> </li>
                </ul>
            </div>
        </nav>
    </header>
)

export default List;