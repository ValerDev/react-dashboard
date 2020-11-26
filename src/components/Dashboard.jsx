import React from 'react';
import "../index.scss"
import "../assets/scss/dashboard.scss"
import { Link } from "react-router-dom";
import DashboardMenuItem from './DashboardMenuItem';

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
                    <DashboardMenuItem title="Home" link="/home" iClassName="fa fa-home" isMenuClosed={this.props.state.isMenuClosed} active="true" />
                    <DashboardMenuItem title="Stop" link="/stop" iClassName="fas fa-stop" isMenuClosed={this.props.state.isMenuClosed} />
                    <DashboardMenuItem title="Play" link="/play" iClassName="fas fa-play" isMenuClosed={this.props.state.isMenuClosed} />
                    <DashboardMenuItem title="Bed" link="/bed" iClassName="fas fa-bed" isMenuClosed={this.props.state.isMenuClosed} />
                    <DashboardMenuItem title="Plane" link="/plane" iClassName="fa fa-phone" isMenuClosed={this.props.state.isMenuClosed} />
                    <DashboardMenuItem title="Tree" link="/tree" iClassName="fas fa-tree" isMenuClosed={this.props.state.isMenuClosed} />
                </div>
            </section>
        )
    }
}

export default Dashboard;