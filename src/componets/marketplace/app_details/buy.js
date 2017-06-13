/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import {Hover} from '../../shared_components/shared_components';

export default  class Buy extends Component {

    goTransaction() {

    }

    render() {
        const styles = {
            container: {
                display: 'flex',
                borderRadius:10,
                height: 50,
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
            },
            on: {
                color: '#4B5F7C',
                border: 'solid 1px #4B5F7C',
                backgroundColor: 'white',
            },
            off: {
                color: 'white',
                border: 'solid 1px white',
                backgroundColor: '#4B5F7C',
            },
            icon: {
                flex: 1
            },
            title: {
                flex: 9
            },
            img: {
                width: 50,
                height: 50
            },
            label: {},
        };


        return <Hover on={styles.on} off={styles.off}>
            <div style={styles.container}>
                <label style={styles.label}>Buy</label>
            </div>
        </Hover>
    }
}
