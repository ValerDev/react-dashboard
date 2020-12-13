import React from 'react';
import "../index.scss"
import "../assets/scss/dashboard.scss"
import { Link } from "react-router-dom";
import DashboardMenuItem from './DashboardMenuItem';
import { connect } from "react-redux";
import { showMenu } from "../redux/actions/action.js";

function Dashboard({ showMenu, isShow }) {
    return (
        <section id='dashboard' className={!isShow ? "closeDashboard" : "dashboard"}>
            <div className="logo-block">
                <Link to="/">
                    <div className='logo-wrapper'></div>
                </Link>
            </div>
            <div className="menus">
                <DashboardMenuItem title="Home" link="/home" iClassName="fa fa-home"  isShow={isShow} active="true"/>
                <DashboardMenuItem title="Stop" link="/stop" iClassName="fas fa-stop" isShow={isShow} />
                <DashboardMenuItem title="Play" link="/play" iClassName="fas fa-play" isShow={isShow} />
                <DashboardMenuItem title="Bed" link="/bed" iClassName="fas fa-bed" isShow={isShow} />
                <DashboardMenuItem title="Plane" link="/plane" iClassName="fa fa-phone" isShow={isShow} />
                <DashboardMenuItem title="Tree" link="/tree" iClassName="fas fa-tree" isShow={isShow} />
                <DashboardMenuItem title="Ambulance" link="/ambulance" iClassName="fas fa-ambulance" isShow={isShow} />
            </div>
        </section>
    )
}

const mapStateToProps = ({ isShow }) => ({
    isShow
});

const mapDispatchToProps = {
    showMenu,
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);