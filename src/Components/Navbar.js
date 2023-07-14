import React from 'react'
import { Link } from 'react-router-dom'
import '../Styles.css'
const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand bg-info px-3">
        <div class="container-fluid">
            <Link class="navbar-brand text-white stynav1" to='/'><img src='https://www.google.com/search?sxsrf=AB5stBgpLDZwyuXvvWm63_84-hM05OceGQ:1689333087197&q=lorem+picsum&tbm=isch&sa=X&ved=2ahUKEwjmhMeUiI6AAxWBgGMGHcRaC4EQ0pQJegQIERAB&biw=1536&bih=746&dpr=1.25#imgrc=QVwT5Y3613oJOM' alt='' className='imgnav rounded-pill'></img>&ensp;&ensp;TRAVELOSA</Link>&ensp;&ensp;
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link class="nav-link stynav px-3" aria-current="page" to='/'><div className='col'>Home</div></Link>&ensp;&ensp;
                <Link class="nav-link stynav px-3" to='/Destination'><div className='col'>Destination</div></Link>&ensp;&ensp;
                <Link class="nav-link stynav px-3" to='/aboutus'><div className='col'>About</div></Link>&ensp;&ensp;
                &ensp;&ensp;
            </div>
            </div>
            <Link className="btn btn-primary" to="/login">
                    Login
                </Link>
        </div>
        </nav>
    </div>
  )
}

export default Navbar