import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import './navigation_bar.css'

export class NavigationBar extends Component {
    render() {
        const {onShowHandler, navigationBarWidth, consoleState} =this.props

        // this will get from API
        let path = [
            {
                path: 'tasks',
                icon: "code",
                img: false
            },
            {
                path: 'my_apps',
                icon: "https://cdn2.iconfinder.com/data/icons/web-icons/512/Gear-512.png",
                img: true
            },
            {
                path: 'marketplace',
                icon: "http://lab.appa.pe/wp-content/uploads/2015-06/flea-market-recommend/jp.co.crooz.android.snaps.png",
                img: true
            },
            {path: 'my_api', icon:require('../../../../img/my_api.svg'), img: true},
        ];


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
        };

        const renderLinkButtons = path.map((path, index)=> path.img ? <ImgButton k={index + 1} path={path} styles={styles}/> :
            <MDButton k={index + 1} path={path}/>);


        return (
            <div style={{width: navigationBarWidth}} className="navigationBar-container">

                {/* arrow for Open or Close console*/}
                <SwitchButton onShowHandler={onShowHandler} consoleState={consoleState} styles={styles}/>

                <button className="arrow prev material-icons">
                    navigate_before
                </button>

                {renderLinkButtons}

                <button className="arrow next material-icons">
                    navigate_next
                </button>


            </div>
        )
    }
}

const SwitchButton = (props)=> {
    const {onShowHandler, consoleState, styles, key} =props;
    return <div style={{textAlign: 'center'}} onClick={ ()=>onShowHandler()}>
        {consoleState ?
            <label key='0' style={styles.arrow} className="arrow prev material-icons">navigate_next</label> :
            <label key='0' style={styles.arrow} className="arrow next material-icons">navigate_before</label>}
    </div>
};

const LinkButtons = (props)=> {
    const {path, styles} =props;
    // switch links by with image or material design
    return path.map((path, index)=> path.img ? <ImgButton k={index + 1} path={path} styles={styles}/> :
        <MDButton k={index + 1} path={path}/>);

};

const ImgButton = (props)=> {
    const {path, styles, k} =props;
    return <button key={k} style={styles.naviButton}>
        <Link to={`/${path.path}`}>
            <img style={styles.img} src={path.icon}/>
        </Link>
    </button>;
};

const MDButton = (props)=> {
    const {path, k} = props;

    return <button key={k} className="navigationBar-item material-icons">
        <Link to={`/${path.path}`}>
            {path.icon}
        </Link>
    </button>
};