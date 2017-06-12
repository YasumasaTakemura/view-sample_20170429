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
            {path: 'apiMarketTop', icon: "mail_outline"},
            {path: 'navi', icon: "cloud"},
        ]

        return (
            <div style={{width:navigationBarWidth}} onDoubleClick={()=>onShowHandler()} className="navigationBar-container">

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