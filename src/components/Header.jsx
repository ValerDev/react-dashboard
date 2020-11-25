import React from 'react';
import "../index.scss"
import "../assets/scss/header.scss"
class Header extends React.Component {
    
    
    render() {
        return (
            <section id='header'>
                <div className="header-content">
                    <div className='menuHandler'>
                        <i className={this.props.state.isMenuClosed ? "fas fa-bars" : 'fas fa-times'} onClick={this.props.handleMenu}></i>
                    </div>
                </div>
            </section>
        )
    }
}

export default Header;