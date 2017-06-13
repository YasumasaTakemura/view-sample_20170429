/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import {Stars} from '../../shared_components/user_review/stars'
import {KPIs} from './kpis'
import {Developer} from './developers'

export const Title = (props)=> {
    const {app, getAppIcon, stars, countReviews} = props;
    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: 'white',
            height: 80,
            paddingLeft: 50,
            marginBottom:20,
            // position:'fixed',
            // width:'100%',
            // zIndex:80,
        },
        icon: {
            flex: 1
        },
        title: {
            flex: 2
        },
        img: {
            width: 50, height: 50
        },
        kpi: {
            width: '70%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
            flex: 7,
            backgroundColor: '#4B5F7C',
            color:'white',
        },
        space: {
            flex: 2
        }

    };

    return <div style={styles.container}>

        <div style={styles.icon}>
            <img style={styles.img} src={getAppIcon(app.app_id)}/>
        </div>

        <div style={styles.title}>
            <div>{app.title}</div>
            <div>{app.developer}</div>
            <Stars stars={stars}/>
            <span>({app.reviews.length})</span>
        </div>

        <KPIs style={styles.kpi}/>

        <div style={styles.space}/>

    </div>
}