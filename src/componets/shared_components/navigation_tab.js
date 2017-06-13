/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';

export const NavigationTab = (props) => {

    const {clickedID,innerNavigatorBarProps,changeTab} = props
    const tabs = innerNavigatorBarProps.tabs
    const mapper = innerNavigatorBarProps.mapper
    const tabWidth = 100 / tabs

    const styles = {
        clicked: {
            color: 'white',
            backgroundColor: '#4B5F7C',
            width: `${tabWidth}%`
        },
        unClicked: {
            width: `${tabWidth}%`
        }
    }

    return <div className="navigation-bar container">
        {mapper.map((item)=> <label onClick={()=>changeTab(item.id)} style={clickedID === `${item.id}` ? styles.clicked : styles.unClicked }>{item.text}</label>)}

    </div>

}
