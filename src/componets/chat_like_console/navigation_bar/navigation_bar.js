import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './navigation_bar.css'

export class NavigationBar extends Component {


    render() {

        const {onShowHandler,navigationBarWidth} =this.props

        // this will get from API
        let path = [
            {path: 'tasks', icon: "code"},
            {path: 'apiMarket', icon: "menu"},
            {path: 'marketplace', icon: "mail_outline"},
            {path: 'navi', icon: "cloud"},
        ]

        const styles={
            container:{
                display:'flex',
                justifyContent:'space-between',
                width:navigationBarWidth,
            },
            arrow:{
                color:'white'
            }
        }

        return (
            <div style={{width:navigationBarWidth}} className="navigationBar-container">

                <div onClick={ ()=>onShowHandler()}>
                    {this.props.consoleState?<label style={styles.arrow} className="arrow prev material-icons">navigate_before</label>:<label style={styles.arrow} className="arrow next material-icons">navigate_next</label>}
                </div>

                <button className="arrow prev material-icons">
                    navigate_before
                </button>

                {path.map((path)=> {
                    return <button className="navigationBar-item material-icons">
                        <Link to={path.path}>
                            {path.icon}
                        </Link>
                    </button>
                })}

                <button className="arrow next material-icons">
                    navigate_next
                </button>


            </div>
        )
    }
}