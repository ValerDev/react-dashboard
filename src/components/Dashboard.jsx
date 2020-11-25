import React from 'react';
import "../index.scss"
import "../assets/dashboard.scss"
import { Link } from "react-router-dom";
class Dashboard extends React.Component {

    handleDashboardMenuItems = (event) => {
        document.querySelectorAll(".menus a.menu").forEach(el => {
            el.classList.remove('active-menu')
        })
        event.target.classList.add("active-menu")
    }

    render() {
        return (
            <section id='dashboard' className={this.props.state.isMenuClosed ? "closeDashboard" : "dashboard"}>
                <div className="logo-block">
                    <Link to="/">
                        <div className='logo-wrapper'></div>
                    </Link>
                </div>
                <div className="menus">
                    <Link to="/menu_1" className="menu active-menu" onClick={this.handleDashboardMenuItems}>
                        <span className="menu-title"> menu_1 </span>
                        <i className="fas fa-bed "></i>
                    </Link>
                    <Link to="/menu_2" className="menu" onClick={this.handleDashboardMenuItems}>
                        <span className="menu-title">menu_2 </span>
                        <i className="fas fa-angry"></i>
                    </Link>
                </div>
            </section>
        )
    }
}

export default Dashboard;