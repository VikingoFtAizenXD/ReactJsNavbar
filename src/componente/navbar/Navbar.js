import React from 'react';
import {MenuItem} from './MenuItem';
import {Button} from './Button';
import './Navbar.css'

class Navbar extends React.Component {
  state = { clicked: false}

  handleClick = () => {
      this.setState({ clicked: !this.state.clicked})
  }

  render(){
      return(
          <nav className="NavbarItem">
             <h1 className="navbar-logo">React <i className="fab fa-react"></i> </h1>
             <div className="menu-icon" onClick={this.handleClick}>
                  <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
             </div>
             <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                 {MenuItem.map((item,index)=> {
                     return(
                         <li Key={index}>
                             <a href={item.url} className={item.CName}>
                               {item.title}  
                            </a>    
                        </li>
                     );
                 })}
             </ul>
             <Button>Sing Up</Button>
          </nav>
      );
  }
}

export default Navbar;