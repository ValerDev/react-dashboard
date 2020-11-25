import React from 'react';
import "../index.scss"
import "../assets/dashboard.scss"
import { Link } from "react-router-dom";
class Dashboard extends React.Component {
    state = {
        isMenuClosed: true
    };
    handleDashboardMenuItems = (event) => {
        document.querySelectorAll(".menus a.menu").forEach(el => {
            el.classList.remove('active-menu')
        })
        event.target.classList.add("active-menu")
    }

    handleMenu = () => {
        this.setState({
            isMenuClosed: !this.state.isMenuClosed
        })
    }
    render() {
        return (
            <section id='dashboard' className={this.state.isMenuClosed ? "closeDashboard" : "dashboard"}>
                <div className="logo-block">
                    <div className='logo-wrapper'></div>
                    <div className='menuHandler' >
                        <i className={this.state.isMenuClosed ? "fas fa-bars" : 'fas fa-times'} onClick={this.handleMenu}></i>
                    </div>
                </div>
                <div className="menus">
                    <Link to="/menu_1" className="menu active-menu" onClick={this.handleDashboardMenuItems}>
                        <i className="fas fa-bed "></i>
                        <span className="menu"> menu_1 </span>
                    </Link>
                    <Link to="/menu_2" className="menu" onClick={this.handleDashboardMenuItems}>
                        <i className="fas fa-angry"></i>
                        <span className="menu">menu_2 </span>
                    </Link>
                </div>
            </section>
        )
    }
}

export default Dashboard;