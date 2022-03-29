import React from 'react'
class Nav extends React.Component{
  render(){
     return (
         <div>
           <nav className="navbar navbar-dark bg-dark navbar-expand-md mt-3">
              <a href="#" className='navbar-brand'>NAVBAR</a>
                 <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="#">home</a></li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">About</a></li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">contact</a></li>
                 </ul>
          </nav>
         </div>
     )
  }
}
export default Nav;