import React from 'react';

const NavBar = () => {

    return(
        <nav className="navbar popcorn-red fixed-top navbar-expand-sm" style={{borderBottomWidth:'3px',borderBottomStyle:'solid', backgroundColor:'white'}}>
            <a className="navbar-brand mr-auto" href="#">
                <img src="/assets/popcorn.png" width="42" height="60" className="d-inline-block align-top "/>
                <span className="popcorn-red pl-5" style={{fontSize:'36px'}}>POPCORN</span>
            </a>

            <div className="collapse navbar-collapse">
                <ul className="nav-bar nav" style={{position:"absolute",top:"0",right:"0"}}>
                    <il className="nav-item">
                        <a href="#" style={{fontSize:'10px'}} className="nav-link popcorn-red"> <img src="/assets/profIcon.png" width="18" height="18" className="d-inline-block align-top border"/> Emilia Clarke</a>
                    </il>
                    <il className="nav-item">
                        <a href="#" style={{fontSize:'10px'}} className="nav-link popcorn-red">Log Out</a>
                    </il>
                </ul>

                <ul className="nav" style={{position:"absolute",bottom:"0",right:"0"}}>
                    <li className="nav-item">
                        <a href="#" className="nav-link popcorn-red font-weight-bold">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link popcorn-red">Popular Movies</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link popcorn-red">Top Rated</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link popcorn-red">Upcoming</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;