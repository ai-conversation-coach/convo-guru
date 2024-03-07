import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  let selectedLink = props.link;
  let setSelectedLink = props.func;
  return (
    <>
        <div className="navbar">
            <Link to="/home" className="title" onClick={() => setSelectedLink('home')}>ConvoGuru</Link>
            <div className="pages">
                <Link to="/home" className={selectedLink === 'home' ? 'active' : 'link'} onClick={() => setSelectedLink('home')}>
                Home
                </Link>
                <Link to="/chat" className={selectedLink === 'chat' ? 'active' : 'link'} onClick={() => setSelectedLink('chat')}>
                Chat
                </Link>
            </div>
        </div>
        <hr className="divider"/>
    </>
  );
};

export default Navbar;