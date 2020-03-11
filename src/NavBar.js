import React from 'react';
import tachyons from 'tachyons';
import './NavBar.css'

const NavBar = props => (
        <nav className='dt bg-yellow w-100 border-box pa 3 ph5-ns' style={{height: '70px'}}>
            <a className='hackBuddyLogo dtc v-mid mid-gray link dim w-20' href='#'>Hackbuddy</a>
            <div className='dtc v-mid w75 tr'>
                <div>
                 <a className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns' href='#'>About</a> 
                 <a className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'  href='#'>Meetups</a> 
                 <a className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'  href='#'>WorkShops</a> 
                 <a className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'  href='#'>Products</a> 
                 <a className='link dim dark-gray f6 f5-ns dib mr3 mr4-ns'  href='#'>Sponsors</a> 
                 <a className='link dim dark-gray f6 f5-ns dib' href='#'>Blog</a> 
                </div>
            </div>
        </nav>

)

export default NavBar;