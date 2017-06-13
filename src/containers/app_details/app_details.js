/**
 * Created by YasumasaTakemura on 2017/06/13.
 */
import React, {Component} from 'react';
import * as _ from '../index';
import './app_details.css'



export default class AppDetails extends Component{

    constructor(props){
        super(props);
        this.state={

        }

    }
    componentWillMount(){
        this.getData()
    }

    getData(){

    }

    render(){
        return <div>
            <Title/>
            <Stars/>
            <KPIs/>
            <Developer/>
            <Objective/>
            <Target/>
            <ScreenShot/>
            <Description/>
            <UserReview/>
        </div>
    }

}