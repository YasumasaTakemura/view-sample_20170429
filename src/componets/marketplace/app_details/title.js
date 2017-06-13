/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';

export const Title = (props)=> {
    const {icon,title} = props;
    const styles = {
        container: {
            display:'flex',
            alignItems:'center'
        },
        icon: {
            flex:1
        },
        title: {
            flex:9
        },
    };

    return <div style={styles.container}>

        <div style={styles.icon}>{icon}</div>
        <div style={styles.title}>{title}</div>

    </div>
}