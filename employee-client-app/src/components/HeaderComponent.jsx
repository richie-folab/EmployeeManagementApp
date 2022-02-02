import React, {Component} from 'react'

class HeaderComponent extends Component{
  render () {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark" style={{backgroundColor:"#AA0000"}}>
            <div className="AppName">
              <a href="http://javaguides.net" className="navbar-brand">
                <strong>Employee Management App</strong>
              </a>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}
export default HeaderComponent;
