import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  let selectedLink = props.link;
  let setSelectedLink = props.func;
  return (
    <>
        <div className="navbar">
            <div className="title">ConvoGuru</div>
            <div className="pages">
                <Link to="/home" className={selectedLink === 'home' ? 'active' : 'link'} key='home' onClick={() => setSelectedLink('home')}>
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