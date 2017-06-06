
import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './navigationBar.css'

export class NavigationBar extends Component{

    container(){


        let path = [
            {path: 'tasks', icon: "code"},
            {path: 'apiMarket', icon: "menu"},
            {path: 'apiMarketTop', icon: "mail_outline"},
            {path: 'navi', icon: "cloud"},
        ]

        return(
            <div className="navigationBar-container">

                <button className="arrow prev material-icons">
                    navigate_before
                </button>

                {path.map((path)=>{
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

    render(){
        return(this.container())
    }
}