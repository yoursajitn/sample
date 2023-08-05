import React from 'react';
import {Link} from 'react-router-dom';

var Home=()=>{
    return 
    <header>
<nav>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/Contact">Contact</Link>
        </li>
        <li>
            <Link to="/Portfolio">Portfolio</Link>
        </li>
    </ul>
</nav>
    </header>
}

export default Home;