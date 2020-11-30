import React from 'react'
import '../assets/scss/dropdown.scss'

class Dropdown extends React.Component {
    state = {
        dropdownActive: false,
    };
    handleDropdown = () => {
        this.setState({
            dropdownActive: !this.state.dropdownActive
        })
    };
    render() {
        return (
            <div className="dropdown" style={{ height: this.props.height ? this.props.height : 30 + "px", width: this.props.width ? this.props.width : 150 + "px" }}>
                <div className='dropdown-content'>
                    <div className={this.state.dropdownActive ? "layout" : "layoutClose"} onClick={this.handleDropdown}></div>
                    <div className="control" >
                        <div className="selected">{this.props.dTitle}</div>
                        <i className={this.state.dropdownActive ? "fas fa-chevron-up" : "fas fa-chevron-down"}
                        ></i>
                        <input type="checkbox" id="dropdown" name="dropdown" onClick={this.handleDropdown} checked={this.state.dropdownActive ? true : false} />
                        <label htmlFor="dropdown" >
                            <div className="dropdown-menu">{this.props.content}</div>
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dropdown;