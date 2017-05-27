
import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import './navigationBar.css'

export class NavigationBar extends Component{

    container(){
        const {labels}  = this.props



        return(
            <div className="navigationBar-container">

                <button className="arrow prev material-icons">
                    navigate_before
                </button>

                {labels.map((label)=>{
                    return <button className="navigationBar-item material-icons">
                        <Link to={label.path}>
                        {label.icon}
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