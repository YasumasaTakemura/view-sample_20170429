/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import {w,h} from '../../shared_components/shared_components'

// general styles
// import 'react-responsive-carousel/lib/styles/main.css';

// carousel styles
import 'react-responsive-carousel/lib/styles/carousel.css';


console.log(window.innerWidth)

export class SS extends Component {

    state = {
        currentView: 0
    };

    viewHandler() {

    }

    render() {

        const {app,width} = this.props;
        const ss = app.ss;
        const styles = {
            container:{
                height:`${h*0.6}`,
                // display:'flex',
                // justifyContent:'center',
                // textAlign:'center'
                margin:20,
                // paddingLeft:100
            },
            main: {
                width: 500,
                // height:200,
            },
            sub: {
                width: 300,
                // height:80,
            },
        };

        console.log(width)


        return <div style={styles.container}>

            <Carousel axis="horizontal" width={width} showArrows={true}>
                {ss.map((item)=><div><img src={item} /></div>)}
            </Carousel>
        </div>
    }
}


const MainSS = (props)=> {

    const {ss, style} = props
    const styles = {
        container: {
            width:'100%'
        }
    }

    return <div style={styles.container}>
        <img style={style} src={ss[0]}/>
    </div>
}
const SubSS = (props)=> {
    const {ss, style} = props
     const styles = {
        container: {
            width:'100%'
        }
    }
    return <div style={styles.container}>
        <img style={style} src={ss[1]}/>
    </div>
}