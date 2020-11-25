import React from "react"
import "../assets/scss/dashboardMenuItem.scss"
import {Link} from "react-router-dom";
class DashboardMenuItem extends React.Component {
    handleDashboardMenuItems = (event) => {
        document.querySelectorAll(".menu-item").forEach(el => {
            el.classList.remove('menu-item_active')
        })
        event.target.classList.add("menu-item_active")
    }
    render() {
        return (
            <div className="menu-item-content" onClick={this.handleDashboardMenuItems}>
                <Link className={this.props.active === "true" ? "menu-item menu-item_active" : "menu-item"} to={this.props.link}>
                    <span className={this.props.isMenuClosed ? "menu-title menu-title_deactive" : "menu-title "}>{this.props.title}</span>
                    <div className="icon-block">
                        <i className={this.props.iClassName}></i>
                    </div>
                </Link>
            </div>
        )
    }
}

export default DashboardMenuItem;