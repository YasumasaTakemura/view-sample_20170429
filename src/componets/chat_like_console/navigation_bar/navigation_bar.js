import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './navigation_bar.css'

export class NavigationBar extends Component {
    render() {
        const {onShowHandler, navigationBarWidth} =this.props

        // this will get from API
        let path = [
            {path: 'tasks', icon: "code", img: false},
            {path: 'apiMarket', icon: "menu", img: false},
            {
                path: 'marketplace',
                icon: "http://lab.appa.pe/wp-content/uploads/2015-06/flea-market-recommend/jp.co.crooz.android.snaps.png",
                img: true
            },
            {path: 'navi', icon: "cloud", img: false},
        ]


        const styles = {
            container: {
                display: 'flex',
                justifyContent: 'space-between',
                width: navigationBarWidth,
            },
            arrow: {
                color: 'white'
            },
            naviButton: {
                padding: 0,
                margin: 0,
                border: 0,
                backgroundColor: 'transparent'
            },
            img: {
                width: 24,
                height: 24,
                textAlign: 'center',

            }
        }


        return (
            <div style={{width: navigationBarWidth}} className="navigationBar-container">

                <div onClick={ ()=>onShowHandler()}>
                    {this.props.consoleState ?
                        <label style={styles.arrow} className="arrow prev material-icons">navigate_before</label> :
                        <label style={styles.arrow} className="arrow next material-icons">navigate_next</label>}
                </div>

                <button className="arrow prev material-icons">
                    navigate_before
                </button>

                {path.map((path)=> {

                    //getting images  not material design
                    if (path.img)return <button style={styles.naviButton}>
                        <Link to={path.path}>
                            <img style={styles.img} src={path.icon}/>
                        </Link>
                    </button>;

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