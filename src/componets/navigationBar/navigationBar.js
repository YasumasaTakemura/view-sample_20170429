
import React, {Component} from 'react';
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
                        {label}
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