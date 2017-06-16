/**
 * Created by YasumasaTakemura on 2017/06/14.
 */
import React, {Component} from 'react';
import {LineChart, Line} from 'recharts';

export default class Graph extends Component {

    render() {
        const {apps, styles} = this.props;

        return <div style={styles}>
            <LineChart width={400} height={400} data={apps}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
            </LineChart>
        </div>
    }

}

