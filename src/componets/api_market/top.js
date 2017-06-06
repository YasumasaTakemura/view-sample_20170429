/**
 * Created by YasumasaTakemura on 2017/05/29.
 */
import React, {Component} from 'react';
import {ConsoleContainerSwitcher} from '../../componets/console/console'


export class Top extends Component {
    constructor() {
        super();
        this.state = {
            path: window.location.href.split('/').slice(-1)[0],
            open: true,
        }
    }

    toggleOpen() {
        this.setState(
            {open: !this.state.open}
        )
    }

    style = {
        container: {

            display:'flex',
            justifyContent:'center',
            alignItems: 'stretch',
            // widths:'100%',
            // margin:'auto 0',
            // position: 'relative',
            // height: '200px',
            // width: '300px'
        },
        boxContainer: {
            // margin:'auto 0',
            // position: 'absolute',
            marginTop:'15%',
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'column',
            flexWrap: 'wrap',
            height: '60vh',
            width: '60vh'
        },
        squareBox: {
            height: '20vh',
            backgroundColor: '#d5d5d5',
            margin: '10px',
            borderRadius:'5px',
            border:'solid 1px white',
            textAlign:'center',
        },
        label:{
            fontWeight:'600',
            // margin:'0 auto',
            verticalAlign:'middle',

        }

    }

    render() {
        return (
            <div style={this.style.container}>
                <div style={this.style.boxContainer}>
                    <div style={this.style.squareBox}>
                        <span style={this.style.label}> Search</span>
                    </div>
                    <div style={this.style.squareBox}>
                        <span style={this.style.label}> Develop</span>
                    </div>
                    <div style={this.style.squareBox}>
                        <span style={this.style.label}> Order</span>
                    </div>
                    <div style={this.style.squareBox}>
                        <span style={this.style.label}> Release</span>
                    </div>
                </div>

                <div style={this.style.console}>
                    <ConsoleContainerSwitcher
                        sticky={true}
                        label={'apiMarket'}
                        toggleOpen={this.toggleOpen.bind(this)}
                        {...this.props} {...this.state}
                    />
                </div>

            </div>
        )
    }
}